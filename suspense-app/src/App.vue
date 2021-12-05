<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import {ref, defineAsyncComponent, onErrorCaptured} from "vue"

const error = ref(null)
const Todos = defineAsyncComponent(() => import("./components/Todos.vue"))
const Users = defineAsyncComponent(() => import("./components/Users.vue"))
onErrorCaptured((err) => {
  error.value = err
  return true;
})
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" width="100"/>
  <strong v-if="error">{{ error }}</strong>
  <suspense>
    <template #fallback>
      <div>Loading...</div>
    </template>
    <template #default>
      <div>
        <Todos/>
      </div>
    </template>
  </suspense>
  <suspense>
    <template #fallback>
      <div>Loading...</div>
    </template>
    <template #default>
      <div>
        <hr>
        <Users/>
      </div>
    </template>
  </suspense>
</template>

<style>

</style>
