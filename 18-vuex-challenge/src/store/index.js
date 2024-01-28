import { createStore } from "vuex"

import productModules from "./product"
import cartModules from "./cart"

const store = createStore({
   modules: { prod: productModules, cart: cartModules },
})

export default store
