<template>
  <div class="container">
    <div class="row">
      <h2 class="page-title">Lista de Juegos Disponibles</h2>
      <div>
        <GameCard @showModal="displayModal()" @gameName="getName" />
      </div>
      <ReviewModal :gameTitle="game" />
    </div>
  </div>
</template>

<script>
import Store from '@/store'

import GameCard from '@/components/GameCard.vue'
import ReviewModal from '@/components/ReviewModal.vue'

export default {
  name: 'HomeView',
  data: () => ({
    game: ''
  }),
  methods: {
    displayModal() {
      this.$modal.show('opinion')
    },
    getName(value) {
      this.game = value
      console.log(this.game)
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
