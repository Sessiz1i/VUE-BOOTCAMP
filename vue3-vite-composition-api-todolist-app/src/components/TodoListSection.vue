<template>
  <div class="bg-white sm:mt-14 sm:w-[500px] mx-auto sm:border sm:border-gray-300 sm:shadow-2xl rounded-none sm:rounded-lg card">
    <div class="card-body pb-3">
      <div class="divider text-success"><span class="text-xl">Todo List</span></div>
      <TodoListItem @removeTodo="$emit('removeTodo',$event)" v-for="(todo,index) in todoList" :todo="todo" :key="index"/>
      <small class="text-info flex justify-end">{{todoCount}} adet Todo Vardır...</small>
      <Summary :todoList="todoList"/>
    </div>
  </div>
</template>

<script>
import TodoListItem from "./TodoListItem.vue";
import Summary from "./Summary.vue";
import {computed} from "vue";
export default {
  props:['todoList'],
  name: "TodoListSection",
  components: {Summary, TodoListItem},
  setup(props){
    const todoCount = computed(()=> props.todoList.length)
    return{todoCount}
  }
}
</script>

<style scoped>

</style>