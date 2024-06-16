import { createStore } from "vuex"

import { counterModule } from "./counter"
import { authModule } from "./authentication"

const store = createStore({
   modules: {
      numbers: counterModule,
      auth: authModule,
   },
})

export default store
