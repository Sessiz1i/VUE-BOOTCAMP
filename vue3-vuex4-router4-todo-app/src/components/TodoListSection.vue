<template>
  <div v-if="getTodos.length >0" class="col-12 col-md-8 col-lg-5 mx-auto shadow">
    <div class="card">
      <div class="card-body my-2 px-2">
        <h4 class="ms-3 pb-1">Todo List</h4>
        <ul class="list-group">
          <li v-for="(item,index) in getTodos" :key="index"
              class="list-group-item d-flex justify-content-between align-items-center">
            <div class="ms-1 me-auto">
              <span class="fw-bold">{{ `${index + 1} . ` }}</span>
              <span :class="item.completed ?'text-success  text-decoration-line-through' :''"
                    class="fw-bold">{{ item.title }}</span>
            </div>
            <div class="form-check form-switch d-flex gap-2 justify-content-between align-items-center">
              <input @change="this.updateTodo(item)"
                     :checked="item.completed "
                     :class="item.completed ?  'is-valid':'is-invalid'"
                     class="form-check-input fs-5" type="checkbox" role="switch">
                <font-awesome-icon icon="pen-to-square" class="text-primary fa-lg" />
                <font-awesome-icon @click="this.deleteTodo(item.id)" role="button"
                    icon="trash-can" class="text-danger fa-lg" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "TodoListSection",
  created() {
    if (this.getTodos.length < 1) this.$store.dispatch('todo/getTodos')
  },
  methods: {
    ...mapActions({
      updateTodo: 'todo/updateTodo',
      deleteTodo: 'todo/deleteTodo'
    })
  },
  computed: {
    ...mapGetters({
      getTodos: "todo/getTodos"
    })
  }
}
</script>

<style scoped>

</style>