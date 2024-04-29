<script>
import TheWelcome from '../components/TheWelcome.vue'
import ModalComponent from '@/components/ModalComponent.vue'

export default {
  name: 'HomeView',
  components: { TheWelcome, ModalComponent },
  data() {
    return {
      showModal: false,
      showSaleModal: false
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    },
    toggleSaleModal() {
      this.showSaleModal = !this.showSaleModal
    }
  }
}
</script>

<template>
  <main>
    <TheWelcome />
    <div v-if="showModal">
      <ModalComponent theme="not-sale" @close="toggleModal">
        <template v-slot:links>
          <a href="#">sign up</a>
          <a href="#">more info</a>
        </template>
        <h1>Modal header text</h1>
        <p>Modal body</p>
      </ModalComponent>
    </div>
    <div v-if="showSaleModal">
      <ModalComponent theme="sale" @close="toggleSaleModal">
        <template v-slot:links>
          <a href="#">sign up</a>
          <a href="#">more info</a>
        </template>
        <h1>Sale Modal header text</h1>
        <p>Modal body</p>
      </ModalComponent>
    </div>
    <button @click.alt="toggleModal">open modal(alt)</button>
    <button @click="toggleSaleModal">open sale modal</button>
  </main>
</template>
