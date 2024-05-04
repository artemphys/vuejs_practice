<script>
import TheWelcome from '../components/TheWelcome.vue'
import HelloWorld from '../components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: { TheWelcome, HelloWorld }
}
</script>

<template>
  <main>
    <HelloWorld msg="You did it!" />
    <TheWelcome />
  </main>
</template>
