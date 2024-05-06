<template>
  <div>
    <h1>Job Details</h1>
    <p>The job Id is: {{ id }}</p>
    <button @click="back">Go back</button>
    <button @click="redirect">Home</button>
  </div>
</template>

<script>
export default {
  props: ['id'],
  /*By adding props: true to the route we're passing the id as a props.
  Another way to get an id is to go to route params*/
  //   data() {
  //     return {
  //       id: this.$route.params.id
  //     }
  //   }
  methods: {
    back() {
      this.$router.go(-1)
    },
    redirect() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
button {
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
}
</style>
