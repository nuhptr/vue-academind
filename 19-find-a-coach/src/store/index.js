import { createStore } from "vuex"

import coachesModules from "./modules/coaches"
import requestsModules from "./modules/requests"

const store = createStore({
   modules: {
      coaches: coachesModules,
      requests: requestsModules,
   },
})

export default store
