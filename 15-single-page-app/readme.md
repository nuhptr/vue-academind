# Single Page Using Vue-Router

Learn how to create a single page application using Vue-Router.

## Taking Notes

### Init Vue App

`pnpm create vue@latest ./` - Init Vue App

### 1. Install Vue-Router

`pnpm add vue-router` - Install Vue-Router

### Navigation Guard

-  `beforeEach` - Called before each route is visited. There are in global route ('./src/router/index.js'')
-  `beforeEnter` - Called before the route is entered. There are in global route but in route scope ('./src/router/index.js'')
-  `beforeR outeEnter` - Called before the route is entered. There are in specific route file ('./src/components/users/UserList.vue')
