<template>
  <h2 class="bg-primary text-white m-0 py-2 pb-3 px-3">Blue Component</h2>
  <input type="text" class="form-control mt-2" placeholder="Input...">
</template>

<script>
export default {
  name: "Blue",
  activated()
  {
    console.log("Active")
  },deactivated()
  {
    console.log("Deactivated")
  }
}
</script>

<style scoped>

</style>
