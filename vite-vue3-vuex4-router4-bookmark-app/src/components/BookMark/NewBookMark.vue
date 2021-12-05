<template>
  <div class="col-md-8 col-lg-4 mx-auto mt-5">
    <div style="height: 56px;"/>
    <div class="card shadow">
      <div class="card-body">
        <h2 class="mb-3 card-title">New Bookmark</h2>
        <div class="mb-3">
          <input v-model="bookMarkData.title" type="text" class="form-control" placeholder="Enter Title...">
        </div>
        <div class="mb-3">
          <input v-model="bookMarkData.url" type="text" class="form-control" placeholder="Enter URL...">
        </div>
        <div class="mb-3">
          <select v-model="bookMarkData.categoryId" class="form-select">
            <option :value="0">Open this select menu, select category</option>
            <option v-for="(category,index) in categories" :key="index" :value="category.id">{{
                category.name
              }}
            </option>
          </select>
        </div>
        <div class="mb-3">
          <textarea v-model="bookMarkData.description" class="form-control" placeholder="Enter description..."
                    rows="3"></textarea>
        </div>
        <div class="mb-1 text-md-end">
          <button class="btn btn-sm btn-outline-secondary me-2 text-uppercase fw-bold">cancel</button>
          <button @click="onSave" class="btn btn-sm btn-outline-success text-uppercase fw-bold">submit</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import app from "../composables/app";
import {onMounted} from "vue";

const {bookMarkData, categories, fetchCategories,onSave} = app()
onMounted(() => !categories.value.length && fetchCategories())
</script>

<style scoped>

</style>