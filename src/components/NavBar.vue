<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link class="navbar-brand" to="/"
      ><i class="fa fa-gamepad" aria-hidden="true"></i>Games Opinion</router-link
    >
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="true"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/">
            <i class="fa fa-home" aria-hidden="true"></i>Home</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/opiniones"
            ><i class="fa fa-commenting-o" aria-hidden="true"></i>Opiniones</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/administracion"
            ><i class="fa fa-cog" aria-hidden="true"></i>Administración</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style>
.fa {
  margin-right: 4px;
}
</style>
