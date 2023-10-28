# Conditional Rendering and List

## Conditional Content

1. v-if, v-else-if, v-else
   this approach is ideal when the condition is unlikely to change at runtime or you want to optimize for initial render cost. `(pendekatan ini ideal ketika kondisinya tidak mungkin berubah saat runtime atau Anda ingin mengoptimalkan biaya render awal.)`

-  v-if (and v-show) allows you to render content `only if a certain condition is met`
   `memungkinkan Anda merender konten hanya jika kondisi tertentu terpenuhi`
-  v-if can be combined with v-else and v-else-if (only on direct sibling elements)
   `v-if dapat digabungkan dengan v-else dan v-else-if (hanya pada elemen saudara langsung)`

2. v-show
   this approach is ideal when the condition is more likely to change at runtime, or you want to maximize the render cost. `(pendekatan ini ideal ketika kondisinya lebih mungkin berubah saat runtime, atau Anda ingin memaksimalkan biaya render.)` because this method add `style display none` to the element

## v-for Variations

1. v-for
   looping data in vuejs
   `(v-for="item in items")` `(v-for="(item, index) in items")` `(v-for="(value, key) in object")` `(v-for="(value, key, index) in object")`

-  You can extract `values`, values and `indexes` or values, `keys` and indexes
-  if you need v-for and v-if, `Don't use them on the same element`.
   Use a wrapper with v-if instead.

## Lists

-  v-for can be used to render multiple elements dynamically
-  v-for can be used with arrays, objects and ranges (numbers)

## Keys

-  Vue `re-uses DOM Elements` to optimize performance -> This can
   lead to bugs if elements contain state
-  Bind the `key` attribute to a unique value to help Vue identify elements
   that belong to list content
