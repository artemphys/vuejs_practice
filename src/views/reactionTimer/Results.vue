<template>
  <div>
    <p>Your reaction time: {{ this.score }} ms</p>
    <p class="rank">Rank: {{ rank }}</p>
  </div>
</template>

<script>
export default {
  props: ['score'],
  data() {
    return {
      rank: null
    }
  },
  mounted() {
    if (this.score < 250) {
      this.rank = 'Ninja fingers'
    } else if (this.score < 400) {
      this.rank = 'Rapid'
    } else {
      this.rank = 'Snale pace...'
    }
  }
}
</script>

<style>
.rank {
  font-size: 1.4em;
  color: #0faf87;
  font-weight: bold;
}
</style>
