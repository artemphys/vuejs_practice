<template>
  <div>
    <div v-if="job">
      <h1>{{ job.title }}</h1>
      <p>The job Id is: {{ id }}</p>
      <p>{{ job.details }}</p>
    </div>
    <div v-else>
      <p>Loading Job details...</p>
    </div>
    <div>
      <button @click="back">Go back</button>
      <button @click="redirect">Home</button>
    </div>
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
  },
  data() {
    return {
      job: null
    }
  },
  mounted() {
    fetch('http://localhost:3000/jobs/' + this.id)
      .then((res) => res.json())
      .then((data) => (this.job = data))
      .catch((err) => console.error(err))
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
