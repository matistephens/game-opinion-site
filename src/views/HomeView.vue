<template>
  <div class="container">
    <h1>Lista de Juegos Disponibles</h1>
    <div>
      <GameCard />
    </div>
  </div>
</template>

<script>
import Store from '@/store'

import GameCard from '@/components/GameCard.vue'

export default {
  name: 'HomeView',
  components: {
    GameCard
  },
  beforeRouteEnter(to, from, next) {
    Store.dispatch('games/getAllJuegos')
    next()
  }
}
</script>

<style></style>
