export const counterModule = {
   namespaced: true,
   state() {
      return {
         counter: 0,
      }
   },

   mutations: {
      increment(state) {
         state.counter = state.counter + 1
      },
      // use with payload
      increase(state, payload) {
         console.log(state)
         state.counter = state.counter + payload.value
      },
   },

   actions: {
      increment(context) {
         setTimeout(() => context.commit("increment"), 2000)
      },
      increase(context, payload) {
         console.log(context)
         setTimeout(() => context.commit("increase", payload), 2000)
      },
   },

   getters: {
      finalCounter(state) {
         return state.counter * 3
      },
      normalizedCounter(_, getters) {
         const finalCounter = getters.finalCounter
         if (finalCounter < 0) return 0
         if (finalCounter > 100) return 100

         return finalCounter
      },
      // testAuth(state, getters, rootState, rootGetters) {
      //    return state.isLoggedIn
      // },
   },
}
