<template>
  <div style="width: 100%">
    <div class="alert alert-danger" role="alert" v-if="!opinions">
      No existen opiniones por mostrar.
    </div>
    <div
      v-for="(opinion, $index) in opinions"
      :key="$index"
      class="accordion"
      id="accordionExample"
    >
      <div class="card">
        <div class="card-header" id="headingOne">
          <h2 class="mb-0">
            <button
              class="btn btn-link btn-block text-left"
              type="button"
              data-toggle="collapse"
              :data-target="'#opinion' + $index"
              aria-expanded="true"
              :aria-controls="'opinion' + $index"
            >
              Opinión creada por: <span style="font-weight: bold">{{ opinion.userName }} </span>.
              Para el juego
              <span style="font-weight: bold">{{ opinion.gameTitle }} </span>
            </button>
          </h2>
        </div>

        <div
          :id="'opinion' + $index"
          class="collapse"
          aria-labelledby="headingOne"
          data-parent="#accordionExample"
        >
          <div class="card-body">{{ opinion.userOpinion }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('opinions', {
      opinions: (state) => state.opinions
    })
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
