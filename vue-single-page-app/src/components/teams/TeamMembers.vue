<script setup>
import { ref, inject, onMounted, watch } from "vue"
import { useRouter } from "vue-router"

import UserItem from "@/components/users/UserItem.vue"

const teamName = ref("")
const members = ref([])

const router = useRouter()

const users = inject("users")
const teams = inject("teams")

const loadTeamMembers = () => {
    const teamId = router.currentRoute.value.params.teamId

    const selectedTeam = teams.value.find((team) => team.id === teamId)
    const selectedMembers = selectedTeam.members
    console.log("members", selectedMembers)

    const teamMembers = []
    for (const member of selectedMembers) {
        const user = users.value.find((user) => user.id === member)
        teamMembers.push(user)
    }
    console.log("teamMembers deep", teamMembers)

    const mappingUserTeam = teamMembers.map((member) => {
        return { id: member.id, fullName: member.fullName, role: member.role }
    })
    console.log("mappingUserTeam", mappingUserTeam)

    members.value = mappingUserTeam
    teamName.value = selectedTeam.name
}

onMounted(() => {
    loadTeamMembers()
})

watch(
    () => router.currentRoute.value.params,
    () => {
        loadTeamMembers()
    }
)
</script>

<style scoped>
/* Style goes here */
</style>

<template>
    <section class="max-w-[40rem] rounded-md p-4 mx-auto my-[2rem] shadow-md">
        <h2 class="mx-0 my-2">{{ teamName }}</h2>
        <ul class="p-0 m-0 list-none">
            <UserItem
                v-for="member in members"
                :key="member.id"
                :name="member.fullName"
                :role="member.role"
            />
        </ul>
    </section>
</template>
