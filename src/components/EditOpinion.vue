<template>
  <form @submit.prevent="editUserOpinion" style="width: 100%">
    <div class="input-component">
      <label for="nombre">Nombre</label>
      <input
        v-model="editName"
        id="nombre"
        type="text"
        class="form-control"
        :placeholder="opinions[$route.params.id].userName"
      />
    </div>
    <div class="input-component">
      <label for="opinion">Opiniones</label>
      <textarea
        v-model="editOpinion"
        id="opinion"
        class="form-control"
        type="text"
        :placeholder="opinions[$route.params.id].userOpinion"
      ></textarea>
    </div>
    <div class="window-bottom d-grid gap-2 d-md-flex justify-content-md-start">
      <button type="button" class="btn btn-secondary">
        <router-link class="edit-button" to="administracion">Editar</router-link>
      </button>
      <button type="submit" class="btn btn-primary">Guardar</button>
    </div>
  </form>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data: () => ({
    editName: '',
    editOpinion: ''
  }),
  computed: {
    ...mapState('opinions', {
      opinions: (state) => state.opinions,
      nameToEdit: (state) => state.gameToEdit
    })
  },
  methods: {
    ...mapActions('opinions', ['editOpinions']),
    editUserOpinion() {
      this.editOpinions([
        { index: this.$route.params },
        {
          gameTitle: this.nameToEdit,
          userName: this.editName,
          userOpinion: this.editOpinion
        }
      ])
      this.$router.push('/administracion')
    }
  }
}
</script>

<style scoped>
.input-component {
  margin: 24px 0px;
}
.btn {
  margin: 0px 16px;
}
.window-bottom button {
  margin-left: 0;
}
</style>
