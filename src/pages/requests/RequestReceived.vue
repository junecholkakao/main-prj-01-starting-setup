<template>
  <section>
    <BaseCard>
    <header>
      <h2>Requests Received</h2>
    </header>
    <ul v-if="hasRequests">
      <RequestItem v-for="request in receivedRequests" 
        :key="request.id" 
        :email="request.userEmail" 
        :message="request.message"
        />
    </ul>
    <h3 v-else>You haven't received any request yet!</h3>
    </BaseCard>
  </section>
</template>

<script>
import RequestItem from '../../components/requests/RequestItem.vue'

export default {
  components: { RequestItem },
  computed: {
    receivedRequests() {
      console.log(this.$store.getters['requests/requests'])
      return this.$store.getters['requests/requests']
    },
    hasRequests() {
      return this.$store.getters['requests/hasRequests']
    }
  }
}
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>