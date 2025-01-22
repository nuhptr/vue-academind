// App part 2
const { ref } = Vue

export default {
    template: `
      <p>{{ favoriteMeal }}</p>
    `,
    setup() {
        const favoriteMeal = ref("Pizza")

        return { favoriteMeal }
    },
}
