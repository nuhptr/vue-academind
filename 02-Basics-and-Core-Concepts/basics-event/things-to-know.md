# Note

## Event

-  An event is an action or occurrence recognized by software that may be handled by the software.

## Event Handler

-  Using `v-on` directive to listen to DOM events and run some JavaScript when they’re triggered.
-  Using `v-on:submit.prevent` to prevent the default behavior of the event.
-  Using `v-on:click.once` to trigger the event only once.
-  Using `v-on:click.stop` to stop the propagation of the event.
-  Using `v-on:keyup.enter` to trigger the event only when the `enter` key is pressed.

## Call Function

-  Using `v-on:click="functionName"` to call a function when the event is triggered.
-  Using `v-on:click="functionName($event)"` to pass the event object to the function.
-  Using `v-on:click="functionName($event, 'value')"` to pass the event object and a value to the function.

## Form

-  v-model is a directive that sets up two-way binding between the form input and the component state.
-  Using `v-model="value"` to bind the input value to the component state.
-  Using `v-model.number="value"` to convert the input value to a number.
-  Using `v-model.trim="value"` to trim the input value.
-  Using `v-model.lazy="value"` to update the value after the change event.

## Computed Property

-  Computed properties are cached based on their reactive dependencies.
-  Using `computed` to create a computed property.
-  Using `computed: { fullName() { return this.firstName + ' ' + this.lastName } }` to create a computed property.
