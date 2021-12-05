<script setup>
import {ref} from "vue";

const todos = ref([])
fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => todos.value = json)
</script>

<template>
  <ul>
    <li v-for="(todo,index) in todos" :key="index+1">{{ todo.title }}</li>
  </ul>
</template>

<script>
export default {
  name: "Todos"
}
</script>

<style scoped>

</style>