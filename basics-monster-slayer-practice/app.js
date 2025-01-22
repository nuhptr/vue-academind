const getRandomValue = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min
}

const { ref, computed, watch } = Vue

export default {
    setup() {
        const playerHealth = ref(100)
        const monsterHealth = ref(100)
        const currentRound = ref(0)

        const winner = ref("")
        const logMessages = ref([])

        const monsterBarStyles = computed(() => {
            if (monsterHealth.value < 0) return { width: "0%" }
            return { width: monsterHealth.value + "%" }
        })

        const playerBarStyles = computed(() => {
            if (playerHealth.value < 0) return { width: "0%" }
            return { width: playerHealth.value + "%" }
        })

        const mayUseSpecialAttack = computed(() => {
            return currentRound.value % 3 !== 0
        })

        watch(playerHealth, (value) => {
            if (value <= 0 && monsterHealth.value <= 0) winner.value = "draw"
            else if (value <= 0) winner.value = "monster"
        })

        watch(monsterHealth, (value) => {
            if (value <= 0 && playerHealth.value <= 0) winner.value = "draw"
            else if (value <= 0) winner.value = "player"
        })

        const startGame = () => {
            playerHealth.value = 100
            monsterHealth.value = 100
            winner.value = null
            currentRound.value = 0
            logMessages.value = []
        }

        const attackMonster = () => {
            currentRound.value++
            const attackValue = getRandomValue(5, 12)
            monsterHealth.value -= attackValue

            addLogMessage("player", "attack", attackValue)
            attackPlayer()
        }

        const attackPlayer = () => {
            const attackValue = getRandomValue(8, 15)
            playerHealth.value -= attackValue

            addLogMessage("monster", "attack", attackValue)
        }

        const specialAttackMonster = () => {
            currentRound.value++
            const attackValue = getRandomValue(10, 25)
            monsterHealth.value -= attackValue

            addLogMessage("player", "special attack", attackValue)
            attackPlayer()
        }

        const healPlayer = () => {
            currentRound.value++
            const healValue = getRandomValue(8, 20)
            if (playerHealth.value + healValue > 100) playerHealth.value = 100
            else playerHealth.value += healValue

            addLogMessage("player", "heal", healValue)
            attackPlayer()
        }

        const surrender = () => {
            winner.value = "monster"
        }

        const addLogMessage = (who, what, value) => {
            logMessages.value.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value,
            })
        }

        return {
            playerHealth,
            monsterHealth,
            currentRound,
            winner,
            logMessages,
            monsterBarStyles,
            playerBarStyles,
            mayUseSpecialAttack,
            startGame,
            attackMonster,
            specialAttackMonster,
            healPlayer,
            surrender,
        }
    },
}
