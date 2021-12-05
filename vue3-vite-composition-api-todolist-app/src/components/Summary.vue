<template>
  <div class="flex justify-between pt-1 pb-0">
    <span class="text-success">{{completedTodo}} Completed</span>
    <span class="text-error">{{ unCompletedTodo }} Uncompleted</span>
  </div>
</template>

<script>
import {computed} from "vue";

export default {
  name: "Summary",
  props: {todoList: Array},
  setup({todoList}){
    const completedTodo = computed(()=>todoList.filter(i => i.completed).length)
    const unCompletedTodo = computed(()=>todoList.filter(i => !i.completed).length)
    return{
      completedTodo,
      unCompletedTodo
    }
  }
}
</script>

<style scoped>

</style>