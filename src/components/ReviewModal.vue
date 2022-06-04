<template>
  <modal name="opinion" height="auto">
    <div>
      <div class="window-header">
        <h5>Escribe tu opinion para el juego: {{ gameTitle }}</h5>
        <div slot="top-right">
          <button class="btn btn-link" @click="$modal.hide('opinion')">❌</button>
        </div>
      </div>
      <form class="window-body" @submit.prevent="addOpinionToStore">
        <div class="window-body-data">
          <div class="input-component">
            <label for="nombre">Nombre</label>
            <input
              id="nombre"
              type="text"
              class="form-control"
              placeholder="Tu nombre"
              v-model="userName"
            />
          </div>
          <div class="input-component">
            <label for="opinion">Opiniones</label>
            <textarea
              id="opinion"
              class="form-control"
              type="text"
              placeholder="Tu opinion debe ir aquí..."
              v-model="userOpinion"
            />
          </div>
        </div>

        <div class="window-bottom d-grid gap-2 d-md-flex justify-content-md-end">
          <button type="button" class="btn btn-secondary" @click="$modal.hide('opinion')">
            Cerrar
          </button>
          <button type="submit" class="btn btn-primary" @click="$modal.hide('opinion')">
            Guardar
          </button>
        </div>
      </form>
    </div>
  </modal>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'MyComponent',
  data: () => ({
    userName: '',
    userOpinion: ''
  }),
  methods: {
    ...mapActions('opinions', ['addOpinion']),
    addOpinionToStore() {
      this.addOpinion({
        gameTitle: this.gameTitle,
        userOpinion: this.userOpinion,
        userName: this.userName
      })
      this.userName = ''
      this.userOpinion = ''
    },
    show() {
      this.$modal.show('my-first-modal')
      this.userName = ''
      this.userOpinion = ''
    },
    hide() {
      this.$modal.hide('my-first-modal')
      this.userName = ''
      this.userOpinion = ''
    }
  },
  mount() {
    this.show()
  },
  props: {
    gameTitle: String
  }
}
</script>

<style>
.btn-link {
  text-decoration: none;
}
.btn-link:hover {
  text-decoration: none;
  transform: scale(1.2);
}
.window-body-data {
  padding: 12px 24px;
  border-bottom: 2px solid #eaecef;
}
.window-bottom {
  padding: 12px 24px;
}
.window-bottom .btn-secondary {
  margin-right: 0.5rem;
}
.input-component {
  margin: 12px 0px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
}
.window-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #eaecef;
  padding: 16px 24px;
}
</style>
