import { createStore } from "vuex"

import coachesModules from "./coaches"
import requestsModules from "./requests"

const store = createStore({
   modules: { coaches: coachesModules, requests: requestsModules },
   state() {
      return {
         userId: "c3",
      }
   },
   getters: {
      userId(state) {
         return state.userId
      },
   },
})

export default store
