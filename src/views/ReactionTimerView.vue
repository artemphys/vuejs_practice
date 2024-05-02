<template>
  <main>
    <div class="timer">
      <h1>Reaction Timer</h1>
      <button @click="start" :disabled="isPlaying">play</button>
      <Results v-if="showResults" :score="score" />
    </div>
    <Block v-if="isPlaying" :delay="delay" @end="endGame" />
  </main>
</template>

<script>
import Block from '../components/ReactTimer/Block.vue'
import Results from '../components/ReactTimer/Results.vue'

export default {
  name: 'ReactionTimer',
  components: { Block, Results },
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: null,
      showResults: false
    }
  },
  methods: {
    start() {
      this.delay = 2000 + Math.random() * 5000
      this.isPlaying = true
      this.showResults = false
    },
    endGame(reactionTime) {
      this.score = reactionTime
      this.isPlaying = false
      this.showResults = true
    }
  }
}
</script>

<style>
.timer {
  text-align: center;
}

button {
  background: #0faf87;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  letter-spacing: 1px;
  cursor: pointer;
  margin: 10px;
}

button[disabled] {
  opacity: 0.2;
  cursor: not-allowed;
}

@media (min-width: 1024px) {
  .timer {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
