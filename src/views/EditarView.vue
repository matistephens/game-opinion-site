<template>
  <div class="container">
    <div class="row">
      <h2 class="page-title">Editando la opinión de {{ gameToEdit }}</h2>
      <EditOpinion />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import EditOpinion from '@/components/EditOpinion.vue'

export default {
  computed: {
    ...mapState('opinions', {
      gameToEdit: (state) => state.gameToEdit
    })
  },
  components: {
    EditOpinion
  }
}
</script>

<style></style>
