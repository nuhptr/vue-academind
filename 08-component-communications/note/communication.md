# Note of component communications in Vue

Taking note of the different ways to communicate between components in Vue.

## Using props

This is the most common way to pass data from parent to child components. The parent component can pass data to the child component by binding the data to the child component as props.

```html
<template>
   <child-component :message="message" />
</template>
```

```javascript
props: {
   message: String
}
```

## Using $emit("event-name", payload)

This is the most common way to pass data from child to parent components. The child component can pass data to the parent component by emitting an event with the data as payload.

```html
<template>
   <child-component @message="handleMessage" />
</template>
```

```javascript
methods: {
   handleMessage(message) {
      this.message = message;
   }
}
```
