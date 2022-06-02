<template>
  <div class="container">
    <div class="row">
      <h2 class="page-title">Lista de Juegos Disponibles</h2>
      <div>
        <GameCard @showModal="showModal()" />
      </div>
      <ReviewModal />
    </div>
  </div>
</template>

<script>
import Store from '@/store'

import GameCard from '@/components/GameCard.vue'
import ReviewModal from '@/components/ReviewModal.vue'

export default {
  name: 'HomeView',
  methods: {
    showModal() {
      this.$modal.show('opinion')
    }
  },
  components: {
    GameCard,
    ReviewModal
  },
  beforeRouteEnter(to, from, next) {
    Store.dispatch('games/getAllJuegos')
    next()
  }
}
</script>

<style>
.page-title {
  margin: 24px 0px;
}
</style>
