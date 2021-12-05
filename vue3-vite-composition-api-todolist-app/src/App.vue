<template>
  <logo-section/>
  <add-todo-section :addTodo="addTodo"/>
  <todo-list-section @removeTodo="deleteTodo" :todoList="todoList"/>
</template>
<script>
import LogoSection from "./components/LogoSection.vue";
import AddTodoSection from "./components/AddTodoSection.vue";
import TodoListSection from "./components/TodoListSection.vue";
import {ref} from "vue";

export default {
  name: "App",
  components: {
    LogoSection,
    AddTodoSection,
    TodoListSection
  },
  setup() {
    const todoList = ref([])

    const addTodo = (todo) => todoList.value.push({id: Date.now().toString().slice(-4),title: todo,completed: false})

    const deleteTodo = (todo) => todoList.value.splice(todoList.value.findIndex(i => i?.id === todo.id), 1)
    return {
      todoList,
      addTodo,
      deleteTodo
    }
  }
}

</script>
<style>

</style>
