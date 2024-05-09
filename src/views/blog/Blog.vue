<template>
  <div>
    <h2>Refs</h2>
    <p ref="p">{{ user1.name }} - {{ user1.age }}</p>
    <button @click="updateUser1">Increase age</button>
    <input type="text" v-model="user1.name" />

    <h2>Reactive</h2>
    <p ref="p">{{ user2.name }} - {{ user2.age }}</p>
    <button @click="updateUser2">Increase age</button>

    <h2>Computed</h2>
    <input type="text" v-model="search" />
    <p>Search term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">{{ name }}</div>
    <button @click="handleStopEffects">Stop watching</button>
  </div>
</template>

<script>
import { ref, reactive, computed, watch, watchEffect } from 'vue'

export default {
  name: 'BlogView',
  // setup function runs before all licecycle hooks
  setup() {
    const user1 = ref({ name: 'Artem', age: 35 })
    const user2 = reactive({ name: 'Alex', age: 34 })
    const names = ref(['mario', 'yoshi', 'luigi', 'toad', 'bowser', 'peach'])
    const search = ref('')

    const updateUser1 = () => user1.value.age++
    const updateUser2 = () => user2.age++

    const stopWatch = watch(search, () => {
      console.log('watch function ran')
    })

    // watchEffect runs on setup first run and when search value changes. Uses more often
    const stopEffect = watchEffect(() => {
      console.log('watchEffect function ran', search.value)
    })

    const handleStopEffects = () => {
      stopWatch()
      stopEffect()
    }

    const matchingNames = computed(() => names.value.filter((name) => name.includes(search.value)))

    return {
      user1,
      user2,
      updateUser1,
      updateUser2,
      matchingNames,
      names,
      search,
      handleStopEffects
    }
  }
}
</script>

<style></style>
