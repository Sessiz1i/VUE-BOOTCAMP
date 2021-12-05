<template>
  <div class="d-flex flex-fill align-content-stretch min-vh-96 flex-1">
    <div class="list-group list-group-flush shadow bg-light w-100">
      <a @click="currentCategory(category.id)" :href="category.name" v-for="(category,index) in categories" :key="index"
         class="list-group-item list-group-item-action ps-4 fw-bolder text-uppercase bg-opacity-75"
         data-bs-toggle="list" role="tab"><i class="fas fa-folder-open fa-lg"/>&nbsp;&nbsp;{{ category.name }}</a>
    </div>
  </div>
</template>
<script setup>
import app from "./composables/app";
import {onMounted} from "vue";

const {categories,fetchCategories,currentCategory} =app()

onMounted(() => !categories.value.length && fetchCategories())

</script>

<style scoped>
.min-vh-96 {
  min-height: 94vh;
  padding: 0;
  margin: 0;
}

.flex-1 {
  flex: 1;
}
</style>