### Getting Started

1. Clone the repo

```sh
git clone
```

## Things to Know

1. data is variable that holds the data from html
2. computed is variable that holds the data from html and can be used to manipulate the data
3. methods is variable that holds the function that can be used to manipulate the data

`but the different between computed and methods is computed is cached and methods is not cached`

# Methods vs Watch vs Computed

## Methods

1. Use with event or data binding
   `(Gunakan dengan pengikatan peristiwa atau data)`
2. Data binding: method is executed for every 're-render' cycle of component
   `(Metode dieksekusi untuk setiap siklus 're-render' komponen)`
3. Use for events / data that really needs to be re-evaluated all the time.
   `(Gunakan untuk peristiwa / data yang benar-benar perlu dievaluasi ulang sepanjang waktu.)`

## Computed

1. Use with data binding `(Gunakan dengan pengikatan data)`
2. Data binding: computed property is only re-evaluated when one of its dependencies has changed
   `(Pengikatan data: properti yang dihitung hanya dievaluasi ulang ketika salah satu dependensinya telah berubah)`
3. use for data that depends on other data
   `(Gunakan untuk data yang bergantung pada data lain)`

## Watch

1. Not used directly in template `(Tidak digunakan secara langsung dalam template)`
2. Allows you to run any code in reaction to some changed data
   `(Memungkinkan Anda menjalankan kode apa pun sebagai reaksi terhadap beberapa data yang berubah)`
3. Use for any non-data update you want to make
   `(Gunakan untuk pembaruan non-data apa pun yang ingin Anda buat)`

## Shorthands

1. `v-bind: => :anyAttribute`
2. `v-on: => @anyEvent`
