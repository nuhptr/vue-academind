# Getting Started

1. Clone the repo

```sh
git clone
```

## Things to Know

1. data is variable that holds the data from html
2. computed is variable that holds the data from html and can be used to manipulate the data
3. methods is variable that holds the function that can be used to manipulate the data

`but the different between computed and methods is computed is cached and methods is not cached`
`tetapi perbedaan antara computed dan methods adalah computed di-cache dan methods tidak di-cache`

# Methods vs Watch vs Computed

## Methods

```sh
1. Use with event or data binding
   `Gunakan dengan pengikatan peristiwa atau data`
2. Data binding: method is executed for every 're-render' cycle of component
   `Metode dieksekusi untuk setiap siklus 're-render' komponen`
3. Use for events / data that really needs to be re-evaluated all the time.
   `Gunakan untuk peristiwa / data yang benar-benar perlu dievaluasi ulang sepanjang waktu.`
```

## Computed

```sh
1. Use with data binding
   `Gunakan dengan pengikatan data`
2. Data binding: computed property is only re-evaluated when one of its dependencies has changed
   `Pengikatan data: properti yang dihitung hanya dievaluasi ulang ketika salah satu dependensinya telah berubah`
3. use for data that depends on other data
   `Gunakan untuk data yang bergantung pada data lain`
```

## Watch

```sh
1. Not used directly in template `Tidak digunakan secara langsung dalam template`
2. Allows you to run any code in reaction to some changed data
   `Memungkinkan Anda menjalankan kode apa pun sebagai reaksi terhadap beberapa data yang berubah`
3. Use for any non-data update you want to make
   `Gunakan untuk pembaruan non-data apa pun yang ingin Anda buat`
```

## Shorthands

1. `v-bind: => :anyAttribute`
2. `v-on: => @anyEvent`

# Conditional Rendering and List

## Conditional Content

```sh
1. v-if, v-else-if, v-else
   this approach is ideal when the condition is unlikely to change at runtime or you want to optimize for initial render cost. `(pendekatan ini ideal ketika kondisinya tidak mungkin berubah saat runtime atau Anda ingin mengoptimalkan biaya render awal.)`

   -  v-if (and v-show) allows you to render content `only if a certain condition is met`
      `memungkinkan Anda merender konten hanya jika kondisi tertentu terpenuhi`
   -  v-if can be combined with v-else and v-else-if (only on direct sibling elements)
      `v-if dapat digabungkan dengan v-else dan v-else-if (hanya pada elemen saudara langsung)`
```

```sh
2. v-show
   this approach is ideal when the condition is more likely to change at runtime, or you want to maximize the render cost. `(pendekatan ini ideal ketika kondisinya lebih mungkin berubah saat runtime, atau Anda ingin memaksimalkan biaya render.)` because this method add `style display none` to the element
```

## v-for Variations

1. v-for
   looping data in vuejs
   `(v-for="item in items")` `(v-for="(item, index) in items")` `(v-for="(value, key) in object")` `(v-for="(value, key, index) in object")`

   -  You can extract `values`, values and `indexes` or values, `keys` and indexes
   -  if you need v-for and v-if, `Don't use them on the same element`.
      Use a wrapper with v-if instead.
