<script setup>
import {ref} from "vue";
const users = ref([])
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => users.value = json)
</script>
<template>
  <ul>
    <li v-for="(user,index) in users" :key="index+1">{{ user.name }}</li>
  </ul>
</template>
<style scoped>

</style>