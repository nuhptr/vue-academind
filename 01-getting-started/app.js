const { ref } = Vue

export default {
    setup() {
        const enteredValue = ref("")
        const goals = ref([])

        const addGoal = () => {
            goals.value.push(enteredValue.value)
            enteredValue.value = ""
        }

        return { enteredValue, goals, addGoal }
    },
}
