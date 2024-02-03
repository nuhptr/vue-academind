let timer

export default {
   namespaced: true,
   state() {
      return {
         userId: null,
         token: null,
         // tokenExpiration: null,
         didAutoLogout: false,
      }
   },
   getters: {
      userId(state) {
         return state.userId
      },
      token(state) {
         return state.token
      },
      isAuthenticated(state) {
         return !!state.token //* !! converts to boolean
      },
      didAutoLogout(state) {
         return state.didAutoLogout
      },
   },
   actions: {
      async login(context, payload) {
         context.dispatch("auth", { ...payload, mode: "login" })
      },
      async signUp(context, payload) {
         context.dispatch("auth", { ...payload, mode: "signup" })
      },
      async auth(context, payload) {
         const mode = payload.mode
         let url =
            "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBvOcmh_Avvu08bFdUHdmJzA06c6vV4h0E"

         if (mode === "signup") {
            url =
               "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBvOcmh_Avvu08bFdUHdmJzA06c6vV4h0E"
         }

         const response = fetch(url, {
            method: "POST",
            body: JSON.stringify({
               email: payload.email,
               password: payload.password,
               returnSecureToken: true,
            }),
         })

         const responseData = await response.json()

         if (!response.ok) {
            const error = new Error(responseData.message || "Failed to authenticate. Check your login data.")
            throw error
         }

         // const expiresIn = +responseData.expiresIn * 1000 // convert to milliseconds (from seconds) to count down to expiration
         const expiresIn = 5000 // for testing purposes
         const expirationDate = new Date().getTime() + expiresIn // current time + expiresIn

         // save token and userId in localStorage
         localStorage.setItem("token", responseData.idToken)
         localStorage.setItem("userId", responseData.localId)
         localStorage.setItem("tokenExpiration", expirationDate)

         // set auto-logout
         timer = setTimeout(() => {
            context.dispatch("autoLogout")
         }, expiresIn)

         context.commit("setUser", {
            token: responseData.idToken,
            userId: responseData.localId,
            tokenExpiration: expirationDate,
         })
      },
      tryLogin(context) {
         const token = localStorage.getItem("token")
         const userId = localStorage.getItem("userId")
         const tokenExpiration = localStorage.getItem("tokenExpiration")

         const expiresIn = +tokenExpiration - new Date().getTime() // count down to expiration

         if (expiresIn < 0) return

         // set auto-logout
         timer = setTimeout(() => {
            context.dispatch("autoLogout")
         }, expiresIn)

         if (token && userId) context.commit("setUser", { token: token, userId: userId })
      },
      logout(context) {
         localStorage.removeItem("token")
         localStorage.removeItem("userId")
         localStorage.removeItem("tokenExpiration")

         clearTimeout(timer) // clear auto-logout timer

         context.commit("setUser", {
            token: null,
            userId: null,
            tokenExpiration: null,
         })
      },
      autoLogout(context) {
         context.dispatch("logout")
         context.commit("setAutoLogout")
      },
   },
   mutations: {
      setUser(state, payload) {
         state.token = payload.token
         state.userId = payload.userId
         state.didAutoLogout = false
      },
      setAutoLogout(state) {
         state.didAutoLogout = true
      },
   },
}
