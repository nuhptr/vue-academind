# Dynamic Element Notes

## Vue 3 Dynamic Component

```vue
<template>
   <div>
      <component :is="currentComponent" />
      <button @click="toggleComponent">Toggle Component</button>
   </div>
</template>
```

## Keep-Alive

Use `keep-alive` to cache the component. This will keep the component alive and not destroy it when it is not in use.

```vue
<template>
   <div>
      <keep-alive>
         <component :is="currentComponent" />
      </keep-alive>
      <button @click="toggleComponent">Toggle Component</button>
   </div>
</template>
```

## Teleport

Use `teleport` to render the component in a different part of the DOM.

```vue
<template>
   <div>
      <teleport to="body">
         <component :is="currentComponent" />
      </teleport>
      <button @click="toggleComponent">Toggle Component</button>
   </div>
</template>
```
