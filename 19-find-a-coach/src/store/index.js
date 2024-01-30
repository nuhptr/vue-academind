import { createStore } from "vuex"

import coachesModules from "./coaches"
import requestsModules from "./requests"

const store = createStore({
   modules: { coaches: coachesModules, requests: requestsModules },
})

export default store
