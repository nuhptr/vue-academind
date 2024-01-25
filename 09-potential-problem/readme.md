# 08-potential-problem

This is a component communication problem. When you passing props to parent to one child and then to another child, it is called **prop drilling**. It is a problem because it is hard to maintain and it is not scalable.

## Solution

-  [Provide Inject](https://vuejs.org/v2/api/#provide-inject)
-  [Vuex](https://vuex.vuejs.org/)
-  [Event Bus](https://alligator.io/vuejs/global-event-bus/)

## Create project

pnpm create vue@latest [project-name]
