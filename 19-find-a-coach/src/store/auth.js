export default {
   namespaced: true,
   state() {
      return {
         userId: null,
         token: null,
         tokenExpiration: null,
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

         // save token and userId in localStorage
         localStorage.setItem("token", responseData.idToken)
         localStorage.setItem("userId", responseData.localId)

         context.commit("setUser", {
            token: responseData.idToken,
            userId: responseData.localId,
            tokenExpiration: responseData.expiresIn,
         })
      },
      tryLogin(context) {
         const token = localStorage.getItem("token")
         const userId = localStorage.getItem("userId")

         if (token && userId) {
            context.commit("setUser", { token: token, userId: userId, tokenExpiration: null })
         }
      },
      logout(context) {
         context.commit("setUser", {
            token: null,
            userId: null,
            tokenExpiration: null,
         })
      },
   },
   mutations: {
      setUser(state, payload) {
         state.token = payload.token
         state.userId = payload.userId
         state.tokenExpiration = payload.tokenExpiration
      },
   },
}
