# Conditional Rendering and List

This note talks about conditional rendering and list in VueJS

## Conditional Content

### v-if, v-else-if, v-else

this approach is ideal when the condition is unlikely to change at runtime or you want to optimize for initial render cost.

-   v-if (and v-show) allows you to render content conditionally
-   v-if can be combined with v-else and v-else-if (only on direct sibling elements)

### v-show

this approach is ideal when the condition is more likely to change at runtime, or you want to maximize the render cost. because this method add `style display none` to the element

## v-for Variations

### v-for

looping data in vuejs has a lot of variations, here are some of them:

-   `(v-for="item in items")`
-   `(v-for="(item, index) in items")`
-   `(v-for="(value, key) in object")`
-   `(v-for="(value, key, index) in object")`

You can extract `values`, values and `indexes` or values, `keys` and indexes

if you need v-for and v-if, `Don't use them on the same element`. Use a wrapper with v-if instead.

## Lists

-   v-for can be used to render multiple elements dynamically
-   v-for can be used with arrays, objects and ranges (numbers)

Here are some examples:

```html
<ul>
    <li v-for="item in items" :key="item.id">{{ item.text }}</li>
</ul>
```

```html
<ul>
    <li v-for="(value, key) in object" :key="key">{{ key }}: {{ value }}</li>
</ul>
```

```html
<ul>
    <li v-for="n in 10" :key="n">{{ n }}</li>
</ul>
```

`Re-uses DOM Elements` to optimize performance

This can lead to bugs if elements contain state. Bind the `key` attribute to a unique value to help Vue identify elements that belong
to list content
