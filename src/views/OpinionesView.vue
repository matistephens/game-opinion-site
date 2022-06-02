<template>
  <div class="container">
    <div class="row">
      <h2 class="page-title">Lista de Opiniones</h2>
      <OpinionsTable />
    </div>
  </div>
</template>

<script>
import OpinionsTable from '@/components/OpinionsTable.vue'

export default {
  name: 'OpinionesView',
  components: {
    OpinionsTable
  }
}
</script>
