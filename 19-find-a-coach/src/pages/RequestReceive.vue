<script>
import BaseCard from "@/components/BaseCard.vue"
import BaseDialog from "@/components/BaseDialog.vue"
import BaseSpinner from "@/components/BaseSpinner.vue"
import RequestItem from "@/components/RequestItem.vue"

export default {
    components: { BaseCard, RequestItem, BaseDialog, BaseSpinner },
    data() {
        return {
            isLoading: false,
            error: null,
        }
    },
    computed: {
        receiveRequests() {
            return this.$store.getters["requests/requests"]
        },
        hasRequests() {
            return this.$store.getters["requests/hasRequests"]
        },
    },
    methods: {
        async loadRequests() {
            this.isLoading = true
            try {
                await this.$store.dispatch("requests/fetchRequests")
            } catch (error) {
                this.error = error.message || "Something failed!"
            }
            this.isLoading = false
        },
        handleError() {
            this.error = null
        },
    },
}
</script>

<style scoped>
/* Add your styles here */
</style>

<template>
    <div>
        <BaseDialog :show="!!error" title="An error occurred!" @close="handleError">
            <p>{{ error }}</p>
        </BaseDialog>
        <section>
            <BaseCard>
                <header class="text-center">
                    <h2>Requests Received</h2>
                </header>
                <BaseSpinner v-if="isLoading" />
                <ul
                    class="list-none mx-auto my-8 p-0 max-w-[30rem]"
                    v-if="hasRequests && !isLoading"
                >
                    <RequestItem
                        v-for="req in receiveRequests"
                        :key="req.id"
                        :email="req.userEmail"
                        :message="req.message"
                    ></RequestItem>
                </ul>
                <h3 class="text-center" v-else>You haven't received ay requests yet!</h3>
            </BaseCard>
        </section>
    </div>
</template>
