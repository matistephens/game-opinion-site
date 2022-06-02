<template>
  <div style="width: 100%">
    <div class="alert alert-danger" role="alert" v-if="opinionsExist">
      No existen opiniones por mostrar.
    </div>
    <div class="accordion" id="accordionExample">
      <div class="card">
        <div class="card-header" id="headingOne">
          <h2 class="mb-0">
            <button
              class="btn btn-link btn-block text-left"
              type="button"
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Opinion 1
            </button>
          </h2>
        </div>

        <div
          id="collapseOne"
          class="collapse show"
          aria-labelledby="headingOne"
          data-parent="#accordionExample"
        >
          <div class="card-body">Descripción de la tarea</div>
        </div>
      </div>
    </div>
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
.alert {
  width: 100%;
}
.btn-link {
  color: #000000;
}
.btn-link:hover {
  transform: none;
  color: #007bff;
  text-decoration: none;
}
.btn-link:focus {
  text-decoration: none;
}
</style>
