<template>
  <div class="mb-2 py-1 px-2 border border-gray-300 rounded-lg flex justify-between align-middle">
    <div class="flex flex-row justify-center align-middle mt-0.5 ml-1">
      <input v-model="todo.completed" type="checkbox" :id="`todo-${todo.id}`" :checked="todo.completed" class="checkbox checkbox-accent checkbox-sm mt-1">
      <label :for="`todo-${todo.id}`" class="cursor-pointer ml-2 text-lg font-medium">{{ todo.title }}</label>
    </div>
    <div @click="deleteTodo" class="mt-1 text-error" role="button">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    todo: Object,
  },
  name: "TodoListItem",
  setup({todo}, {emit}) {
    const deleteTodo = () => {
      emit("removeTodo", todo)
    }
    return {deleteTodo}
  }
}
</script>

<style scoped>

</style>