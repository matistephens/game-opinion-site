<template>
  <form style="width: 100%">
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
    <div class="window-bottom d-grid gap-2 d-md-flex justify-content-md-start">
      <button type="button" class="btn btn-secondary">Cerrar</button>
      <button type="submit" class="btn btn-primary">Guardar</button>
    </div>
  </form>
</template>

<script>
export default {}
</script>

<style scoped>
.window-bottom {
  padding-left: 0px;
}
</style>
