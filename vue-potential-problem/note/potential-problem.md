# Potential Problem

This is a component communication problem. When you passing props to parent to one child and then to another child, it is called **prop drilling**. It is a problem because it is hard to maintain and it is not scalable.

## Solution

### [Provide Inject](https://vuejs.org/v2/api/#provide-inject)

**Provide** is used to provide data to all its children. **Inject** is used to inject data from its parent. It is a way to pass data to its children without using props.

```javascript
// parent
provide() {
    return {
        user: this.user
      }
    }

// child
inject: ['user']
```

### [Vuex](https://vuex.vuejs.org/)

Vuex is a state management pattern + library for Vue.js applications. It serves as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion.

```javascript
// store.js
import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
   state: {
      user: {
         name: "John Doe",
      },
   },
})
```

### [Event Bus](https://alligator.io/vuejs/global-event-bus/)

Event Bus is a Vue instance that allows you to emit events and listen to them anywhere in your app.

```javascript
// event-bus.js
import Vue from "vue"
export const EventBus = new Vue()

// parent
EventBus.$emit("user", this.user)

// child
EventBus.$on("user", (user) => {
   this.user = user
})
```
