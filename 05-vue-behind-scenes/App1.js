// App part 1
const {
    ref,
    onBeforeCreate,
    onCreated,
    onBeforeMount,
    onMounted,
    onBeforeUpdate,
    onUpdated,
    onBeforeUnmount,
    onUnmounted,
} = Vue

export default {
    setup() {
        const currentUserInput = ref("")
        const message = ref("Vue is great!")

        const userText = ref("")

        const saveInput = (event) => {
            currentUserInput.value = event.target.value
        }

        const setText = () => {
            message.value = userText.value
        }

        onBeforeCreate(() => {
            console.log("Before create lifecycle")
        })

        onCreated(() => {
            console.log("Created lifecycle")
        })

        onBeforeMount(() => {
            console.log("Before mount lifecycle")
        })

        onMounted(() => {
            console.log("Mounted lifecycle")
        })

        onBeforeUpdate(() => {
            console.log("Before update lifecycle")
        })

        onUpdated(() => {
            console.log("Updated lifecycle")
        })

        onBeforeUnmount(() => {
            console.log("Before unmount lifecycle")
        })

        onUnmounted(() => {
            console.log("Unmounted lifecycle")
        })

        return {
            currentUserInput,
            message,
            userText,
            saveInput,
            setText,
        }
    },
}
