# Learn Vue From Udemy

Learn Vue from basics to advanced concepts by creating 4 awesome interactive web apps

![Vue Image](https://github.com/nuhptr/vuejs-udemy/assets/50306963/f52d3f99-669b-4bf1-89a4-2ae4e1b39e87)

## Content

A. Getting Started

-  [x] Vanila javascript
-  [x] Rebuilding the app with Vue

B. Basics & Core Concepts

-  [x](#different-between-watch-computed-and-method) Basics Data Binding
-  [x] Basics Dynamic Styling
-  [x](#event) Basics Event Handling

C. Conditional Rendering & Lists

-  [x] v-if, v-else, v-else-if
-  [x] v-show
-  [x] v-for
-  [x] lists & keys

D. Course Project - The Monster Slayer

-  [x] Project Setup
-  [x] Using Conditionals & Rendering Lists
-  [x] Working with CSS Classes
-  [x] Adding Methods to our App
-  [x] Adding a "Attack Monster" Functionality
-  [x] Adding a "Special Attack" Functionality
-  [x] Adding a "Heal Player" Functionality
-  [x] Finishing the "Attack Player" Functionality
-  [x] Adding a "New Game" Functionality
-  [x] Adding a "Log" Functionality

E. Vue behind the scenes

-  [x] Vue reactivity
-  [x] vue lifecycle
-  [x] working with refs
-  [x] understanding templates

F. Introduction to Components

-  [x] Introducing components
-  [x] The why?
-  [x] Multiple vue apps vs multiple components

G. First Vue App

-  [x](#first-vue-app) Creating a new project
-  [x] Creating a new component `FriendsContact.vue`

H. Component communication

-  [x] Props
-  [x] Custom events
-  [x] Provide & inject

I. Advanced component usage

-  [x](#dynamic-component) Dynamic components & keep-alive
-  [x](#teleport) Teleport

## Shorthands

1. `v-bind: => :anyAttribute`
2. `v-on: => @anyEvent`

## Notes

### Event

An event is an action or occurrence recognized by software that may be handled by the software.

A. [x] Event Handler

1. Using `v-on` directive to listen to DOM events and run some JavaScript when they’re triggered.
2. Using `v-on:submit.prevent` to prevent the default behavior of the event.
3. Using `v-on:click.once` to trigger the event only once.
4. Using `v-on:click.stop` to stop the propagation of the event.
5. Using `v-on:keyup.enter` to trigger the event only when the `enter` key is pressed.

B. [x] Call Function

1. Using `v-on:click="functionName"` to call a function when the event is triggered.
2. Using `v-on:click="functionName($event)"` to pass the event object to the function.
3. Using `v-on:click="functionName($event, 'value')"` to pass the event object and a value to the function.

C. [x] Form

1. v-model is a directive that sets up two-way binding between the form input and the component state.
2. Using `v-model="value"` to bind the input value to the component state.
3. Using `v-model.number="value"` to convert the input value to a number.
4. Using `v-model.trim="value"` to trim the input value.
5. Using `v-model.lazy="value"` to update the value after the change event.

D. [x] Computed Property

1. Computed properties are cached based on their reactive dependencies.
2. Using `computed` to create a computed property.
3. Using `computed: { fullName() { return this.firstName + ' ' + this.lastName } }` to create a computed property.

### Different between Watch, Computed, and Method

A. Methods

1. Use with event or data binding
   -  `Gunakan dengan pengikatan peristiwa atau data`
2. Data binding: method is executed for every 're-render' cycle of component
   -  `Metode dieksekusi untuk setiap siklus 're-render' komponen`
3. Use for events / data that really needs to be re-evaluated all the time.
   -  `Gunakan untuk peristiwa / data yang benar-benar perlu dievaluasi ulang sepanjang waktu.`

B. Computed

1. Use with data binding
   -  `Gunakan dengan pengikatan data`
2. Data binding: computed property is only re-evaluated when one of its dependencies has changed
   -  `Pengikatan data: properti yang dihitung hanya dievaluasi ulang ketika salah satu dependensinya telah berubah`
3. use for data that depends on other data
   -  `Gunakan untuk data yang bergantung pada data lain`

C. Watch

1. Not used directly in template
   -  `Tidak digunakan secara langsung dalam template`
2. Allows you to run any code in reaction to some changed data
   -  `Memungkinkan Anda menjalankan kode apa pun sebagai reaksi terhadap beberapa data yang berubah`
3. Use for any non-data update you want to make
   -  `Gunakan untuk pembaruan non-data apa pun yang ingin Anda buat`

D. Things to Know

1. data is variable that holds the data from html
2. computed is variable that holds the data from html and can be used to manipulate the data
3. methods is variable that holds the function that can be used to manipulate the data

`but the different between computed and methods is computed is cached and methods is not cached`
`tetapi perbedaan antara computed dan methods adalah computed di-cache dan methods tidak di-cache`

### First Vue App

1. Create `pnpm install vue@latest [project-name]`
2. pnpm install
3. pnpm run serve

### Dynamic Component

1. Dynamic component is a component that can be changed dynamically
2. Dynamic component can be used to change the component based on the data
3. Dynamic component can be used to change the component based on the route

### Keep Alive

1. Keep alive is a component that can be used to cache the component
2. Keep alive can be used to cache the component based on the data

### Teleport

1. Teleport is a component that can be used to move the component to another place
