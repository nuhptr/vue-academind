<script setup>
import { ref, inject } from "vue"

import BaseButton from "../ui/BaseButton.vue"
import BaseCard from "../ui/BaseCard.vue"
import BaseDialog from "../ui/BaseDialog.vue"
import StoredResource from "./StoredResource.vue"

const inputIsInvalid = ref(false)

const enteredTitle = ref("")
const enteredDescription = ref("")
const enteredLink = ref("")

const addResource = inject("addResource")
const selectedTab = inject("selectedTab")

const submitData = () => {
    let title = enteredTitle.value
    let description = enteredDescription.value
    let link = enteredLink.value

    if (title.trim() === "" || description.trim() === "" || link.trim() === "") {
        inputIsInvalid.value = true
        return
    }

    addResource(title, description, link)
    selectedTab.value = StoredResource
}

const confirmError = () => {
    inputIsInvalid.value = false
}
</script>

<style>
/* Style goes here */
</style>

<template>
    <BaseDialog v-if="inputIsInvalid" title="Invalid Input" @close="confirmError">
        <template #default>
            <p>Unfornately, at least one input value is invalid.</p>
            <p class="leading-[200%]">
                Please check all inputs and make sure you enter at least a few characters into each
                input field active
            </p>
        </template>

        <template #action>
            <BaseButton @click="confirmError">Confirm</BaseButton>
        </template>
    </BaseDialog>

    <BaseCard>
        <form @submit.prevent="submitData">
            <div class="mx-0 my-4">
                <label for="title" class="font-bold block mb-[0.5rem]">Title</label>
                <input
                    id="title"
                    name="title"
                    type="text"
                    v-model="enteredTitle"
                    class="block w-full p-[0.15rem] border border-zinc-300 focus:outline-none focus:border-[#3a0061] focus:bg-[#f7ebff"
                />
            </div>

            <div class="mx-0 my-4">
                <label for="description" class="font-bold block mb-[0.5rem]">Description</label>
                <textarea
                    name="description"
                    id="description"
                    rows="3"
                    v-model="enteredDescription"
                    class="block w-full p-[0.15rem] border border-zinc-300"
                ></textarea>
            </div>

            <div class="mx-0 my-4">
                <label for="link" class="font-bold block mb-[0.5rem]">Link</label>
                <input
                    id="link"
                    name="link"
                    type="url"
                    v-model="enteredLink"
                    class="block w-full p-[0.15rem] border border-zinc-300"
                />
            </div>

            <div>
                <BaseButton type="submit">Add Resource</BaseButton>
            </div>
        </form>
    </BaseCard>
</template>
