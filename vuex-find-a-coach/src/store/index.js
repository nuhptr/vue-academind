import { createStore } from "vuex"

import coachesModules from "./coaches"
import requestsModules from "./requests"
import authModules from "./auth"

const store = createStore({
    modules: {
        coaches: coachesModules,
        requests: requestsModules,
        auth: authModules,
    },
})

export default store
