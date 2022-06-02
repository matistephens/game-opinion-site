<template>
  <div>
    <NavBar />
    <div class="container-fluid">
      <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  components: {
    NavBar
  }
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;
}
.alignContent {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.row {
  justify-content: center;
}
</style>
