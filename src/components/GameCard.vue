<template>
  <div class="gridCards">
    <div v-for="(game, $index) in games" :key="$index" class="card" style="width: 18rem">
      <img :src="game.background_image" class="card-img-top" alt="Game image" />
      <div class="card-body">
        <h5 class="card-title">{{ game.name }}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Rating: {{ game.rating }}</li>
        <li class="list-group-item">Released: {{ game.released }}</li>
        <li class="list-group-item">Updated: {{ game.updated }}</li>
      </ul>
      <div class="card-body d-flex justify-content-center">
        <button @click="showModal(game.name)" type="button" class="btn btn-primary">Opinar</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'GameCard',
  methods: {
    showModal(value) {
      this.$emit('showModal')
      this.$emit('gameName', value)
    }
  },
  computed: {
    ...mapState('games', {
      games: (state) => state.list
    })
  }
}
</script>

<style>
.card-img-top {
  height: 160px;
}
.gridCards {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.card {
  margin: 12px 24px;
}
</style>
