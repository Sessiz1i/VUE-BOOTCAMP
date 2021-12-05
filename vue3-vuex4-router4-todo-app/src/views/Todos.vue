<template>
<nav-bar/>
  <div class="container">
    <page-logo/>
    <page-title/>
    <todo-list-section/>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import PageLogo from "@/components/PageLogo";
import PageTitle from "@/components/PageTitle";
import TodoListSection from "@/components/TodoListSection";
export default {
  name: "Todos",
  components: {TodoListSection, PageTitle, NavBar,PageLogo}
}
</script>

<style scoped>

</style>