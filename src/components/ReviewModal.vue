<template>
  <modal name="opinion" height="auto">
    <div>
      <div class="window-header">
        <h5>Escribe tu opinion para el juego: Juego</h5>
        <div slot="top-right">
          <button class="btn btn-link" @click="$modal.hide('opinion')">❌</button>
        </div>
      </div>
      <form class="window-body">
        <div class="window-body-data">
          <div class="input-component">
            <label for="nombre">Nombre</label>
            <input id="nombre" type="text" class="form-control" placeholder="Tu nombre" />
          </div>
          <div class="input-component">
            <label for="opinion">Opiniones</label>
            <textarea
              id="opinion"
              class="form-control"
              type="text"
              placeholder="Tu opinion debe ir aquí..."
            />
          </div>
        </div>

        <div class="window-bottom d-grid gap-2 d-md-flex justify-content-md-end">
          <button type="button" class="btn btn-secondary" @click="$modal.hide('opinion')">
            Cerrar
          </button>
          <button type="submit" class="btn btn-primary">Guardar</button>
        </div>
      </form>
    </div>
  </modal>
</template>

<script>
export default {
  name: 'MyComponent',
  methods: {
    show() {
      this.$modal.show('my-first-modal')
    },
    hide() {
      this.$modal.hide('my-first-modal')
    }
  },
  mount() {
    this.show()
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
