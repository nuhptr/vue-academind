# Animation Notes

Notes for the animation transition.

## Animation

In vue, we can use the `transition` component to animate elements when they are added or removed from the DOM. The `transition` component takes a `name` prop, which is used to define the CSS classes that will be applied to the element during the transition.

```html
<transition name="fade">
   <div v-if="show">Hello</div>
</transition>
```

```css
.fade-enter-active,
.fade-leave-active {
   transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
   opacity: 0;
}
```

In the example above, the `fade-enter-active` and `fade-leave-active` classes define the transition effect, while the `fade-enter` and `fade-leave-to` classes define the initial and final states of the element.

## Transition Modes

The `transition` component supports different modes for the transition effect. The default mode is `in-out`, which means that the new element is added to the DOM before the old element is removed. Other modes include `out-in`, which means that the old element is removed before the new element is added, and `mode`, which allows you to define custom transition modes.

```html
<transition name="fade" mode="out-in">
   <div v-if="show">Hello</div>
</transition>
```

## Transition Events

The `transition` component emits several events during the transition process, such as `before-enter`, `enter`, `after-enter`, `before-leave`, `leave`, and `after-leave`. You can use these events to trigger custom animations or perform other actions during the transition.

```html
<transition name="fade" @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
   <div v-if="show">Hello</div>
</transition>
```

```js
const beforeEnter = (el) => {
   console.log("before enter")
}

const enter = (el, done) => {
   console.log("enter")
   done()
}

const afterEnter = (el) => {
   console.log("after enter")
}
```
