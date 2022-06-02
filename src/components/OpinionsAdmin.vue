<template>
  <div style="width: 100%">
    <div class="alert alert-danger" role="alert" v-if="opinionsExist">
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
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td class="buttons-table">
            <button type="button" class="btn btn-danger">Eliminar</button>
            <button type="button" class="btn btn-primary">Editar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data: () => ({
    opinionsExist: true
  })
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
</style>
