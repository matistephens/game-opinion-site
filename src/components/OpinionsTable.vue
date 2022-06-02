<template>
  <div style="width: 100%">
    <div class="alert alert-danger" role="alert" v-if="!opinionsAvailable">
      No existen opiniones por mostrar.
    </div>
    <div
      v-for="(opinion, $index) in list"
      :key="$index"
      class="accordion"
      id="accordionExample"
      v-else
    >
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
              Opinión creada por: {{ opinion.opinions }}. Para el juego {{ opinion.name }}
            </button>
          </h2>
        </div>

        <div
          id="collapseOne"
          class="collapse show"
          aria-labelledby="headingOne"
          data-parent="#accordionExample"
        >
          <div class="card-body">{{ opinion.opinions }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('games', ['opinionsAvailable', 'list'])
  }
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
