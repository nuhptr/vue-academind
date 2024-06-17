## Composition API Notes

This is a notes for update changes from option api to composition api.

### Setup

-  `setup` is a new option in the composition API.
-  `setup` is called before the component is created.

```javascript
   setup() {
       // code here
   }
```

### refs

-  `ref` is a new way to create a reactive reference.

```javascript
import { ref } from "vue"
const count = ref(0)
```

### reactive

-  `reactive` is a new way to create a reactive object.

```javascript
import { reactive } from "vue"
const state = reactive({
   count: 0,
})
```

### computed

-  `computed` is a new way to create a computed property.

```javascript
import { computed } from "vue"
const double = computed(() => state.count * 2)
```

### watch

-  `watch` is a new way to watch for changes in reactive properties.

```javascript
import { watch } from "vue"
watch(
   () => state.count,
   (count, prevCount) => {
      console.log(`count changed from ${prevCount} to ${count}`)
   }
)
```

### Lifecycle Hooks

-  Lifecycle hooks are now exposed as functions.

```javascript
import { onMounted, onUpdated, onUnmounted } from "vue"
onMounted(() => {
   console.log("mounted")
})
onUpdated(() => {
   console.log("updated")
})
onUnmounted(() => {
   console.log("unmounted")
})
```
