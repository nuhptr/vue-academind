const { ref, computed } = Vue

export default {
    setup() {
        const counter = ref(0)
        const name = ref("")
        const confirmedName = ref("")

        const fullNameComputed = computed(() => {
            console.log("Running...")
            if (name.value === "") return ""
            return name.value + " " + "Doe"
        })

        const confirmInput = () => {
            confirmedName.value = name.value
        }

        const resetInput = () => {
            name.value = ""
        }

        const submitForm = () => {
            alert("Submitted!")
        }

        const setName = (event, lastName) => {
            name.value = event.target.value + " " + lastName
        }

        const add = (num) => {
            counter.value += num
        }

        const reduce = (num) => {
            counter.value -= num
            if (counter.value < 0) counter.value = 0
        }

        return {
            counter,
            name,
            fullNameComputed,
            confirmInput,
            resetInput,
            submitForm,
            setName,
            add,
            reduce,
        }
    },
}
