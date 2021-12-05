<template>
  <div id="nav" class="bg-white shadow d-flex justify-content-center align-items-center">
    <router-link :to="{name:'Home'}" class="nav-link fs-5">Home</router-link>|
    <router-link to="/todos" class="nav-link fs-5">Todos</router-link>
  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>

</style>