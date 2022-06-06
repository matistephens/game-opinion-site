<template>
  <div style="width: 100%">
    <div class="alert alert-danger" role="alert" v-if="!opinions">
      No existen opiniones por administrar.
    </div>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Persona</th>
          <th scope="col">Juego</th>
          <th scope="col">Opinion</th>
          <th scope="col" class="buttons-column"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(opinion, $index) in opinions" :key="$index">
          <th scope="row">{{ $index }}</th>
          <td>{{ opinion.userName }}</td>
          <td>{{ opinion.gameTitle }}</td>
          <td>{{ opinion.userOpinion }}</td>
          <td class="buttons-table">
            <button @click="deleteOpinion($index)" type="button" class="btn btn-danger">
              Eliminar
            </button>
            <button @click="gameToEdit(opinion.gameTitle)" type="button" class="btn btn-primary">
              <router-link class="edit-button" :to="'/administracion/editar/' + $index"
                >Editar</router-link
              >
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState('opinions', {
      opinions: (state) => state.opinions
    })
  },
  methods: {
    ...mapActions('opinions', ['removeOpinion', 'editGame']),
    deleteOpinion(index) {
      this.removeOpinion(index)
    },
    gameToEdit(game) {
      this.editGame(game)
    }
  }
}
</script>

<style>
.buttons-table {
  display: flex;
  justify-content: space-evenly;
}
.buttons-column {
  width: 200px;
}
.edit-button {
  color: white;
}
.edit-button:hover {
  color: white;
  text-decoration: none;
}
</style>
