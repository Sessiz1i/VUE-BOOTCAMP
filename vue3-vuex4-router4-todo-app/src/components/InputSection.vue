<template>
  <div class="col-12 col-md-8 col-lg-5 mb-4 mx-auto shadow">
    <div class="card">
      <div class="card-body">
        <div class="d-flex justify-content-between">
          <div class="me-1 flex-fill">
            <input @keydown.enter="onSave" v-model="newTodo.title" type="text" class="form-control"
                   placeholder="Enter New Todo..." id="todo">
          </div>
          <div class="d-flex align-items-center">
            <button @click="onSave" class="btn btn-primary">Add&nbsp;Todo</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "InputSection",
  data() {
    return {
      newTodo: {
        title: '',
        completed: false
      }
    }
  },
  methods: {
    onSave() {
      if (this.newTodo.title.length > 4) {
        this.$store.dispatch("todo/addTodo", this.newTodo)
        this.newTodo.title = ''
      }
    }
  },
  computed: {}

}
</script>

<style scoped>

</style>