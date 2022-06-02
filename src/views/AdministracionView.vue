<template>
  <div class="container">
    <div class="row">
      <h2 class="page-title">Administrando la lista de Opiniones</h2>
      <OpinionsAdmin />
      <EditOpinion />
    </div>
  </div>
</template>

<script>
import OpinionsAdmin from '@/components/OpinionsAdmin.vue'
import EditOpinion from '@/components/EditOpinion.vue'

export default {
  name: 'AdministracionView',
  components: {
    OpinionsAdmin,
    EditOpinion
  }
}
</script>
