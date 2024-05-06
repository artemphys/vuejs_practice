<script>
import TheWelcome from './TheWelcome.vue'
import HelloWorld from './HelloWorld.vue'

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
