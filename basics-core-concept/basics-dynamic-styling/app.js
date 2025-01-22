const { ref, computed } = Vue

export default {
   setup() {
      const boxASelected = ref(false)
      const boxBSelected = ref(false)
      const boxCSelected = ref(false)

      const boxAClassesComputed = computed(() => {
         return boxASelected.value ? "active" : ""
      })

      const boxBClassesComputed = computed(() => {
         return boxBSelected.value ? "active" : ""
      })

      const boxCClassesComputed = computed(() => {
         return boxCSelected.value ? "active" : ""
      })

      const boxSelected = (box) => {
         if (box === "A") {
            boxASelected.value = !boxASelected.value
         } else if (box === "B") {
            boxBSelected.value = !boxBSelected.value
         } else if (box === "C") {
            boxCSelected.value = !boxCSelected.value
         }
      }

      return { boxAClassesComputed, boxBClassesComputed, boxCClassesComputed, boxSelected }
   },
}
