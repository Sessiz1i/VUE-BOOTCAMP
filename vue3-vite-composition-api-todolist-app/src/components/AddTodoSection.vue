<template>
  <section>
    <div class="bg-white mt-4 p-4 sm:w-[500px] mx-auto sm:border sm:border-gray-300 sm:shadow-2xl rounded-none sm:rounded-lg card">
      <h1 class="text-lg font-medium text-gray-500">New Todo</h1>
      <div class="mt-2 mb-2 border-2 py-1 px-3 flex justify-between rounded-md">
        <input @keydown.enter="handleSave" class="flex-grow outline-none text-gray-600" type="text" placeholder="Enter Todo..."/>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400 hover:text-blue-400 transition duration-100 cursor-pointer"
             fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
        </svg>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: "AddTodoSection",
  props: {
    addTodo: Function
  },
  setup(props) {
    const handleSave = (e) => {
      props.addTodo(e.target.value)
      e.target.value =''
    }

    return {handleSave}
  }
}
</script>

<style scoped>

</style>