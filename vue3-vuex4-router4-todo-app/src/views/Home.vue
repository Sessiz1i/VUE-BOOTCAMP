<template>
  <nav-bar/>
  <div class="container">
    <page-logo/>
    <page-title/>
    <input-section/>
    <todo-list-section/>
  </div>
</template>
<script>

import NavBar from "@/components/NavBar";
import PageLogo from "@/components/PageLogo";
import PageTitle from "@/components/PageTitle";
import InputSection from "@/components/InputSection";
import TodoListSection from "@/components/TodoListSection";
export default {
  name: 'Home',
  components: {
    TodoListSection,
    InputSection,
    PageTitle,
    PageLogo,
    NavBar


  }
}
</script>
