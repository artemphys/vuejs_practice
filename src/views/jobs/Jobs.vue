<template>
  <div>
    <h1>Jobs</h1>
    <div v-for="job in jobs" :key="job.id" class="job">
      <RouterLink :to="{ name: 'JobDetails', params: { id: job.id } }">
        <h2>{{ job.title }}</h2>
      </RouterLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JobsView',
  data() {
    return {
      jobs: [
        { title: 'Web Developer', id: 1, details: 'Web Developer position description' },
        { title: 'Backend Developer', id: 2, details: 'Backend Developer position description' },
        { title: 'UX Designer', id: 3, details: 'UX Designer position description' }
      ]
    }
  }
}
</script>

<style>
.job h2 {
  background: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: #444;
}

.job h2:hover {
  background: #ddd;
}

.job a {
  text-decoration: none;
}
</style>
