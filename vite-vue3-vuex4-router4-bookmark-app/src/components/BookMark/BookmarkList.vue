<template>
  <div v-if="!book" class="position-absolute top-50 start-50 translate-middle">
    <h1 class="text-center align-middle display-1 text-center">Bookmark Not Found</h1>
  </div>
  <div v-else class="card shadow">
    <div style="font-size: 12px" class="me-1 text-end text-capitalize text-secondary text-opacity-75 fst-italic"
         :title="book?.created_at">{{ dateTime(book?.created_at) }}
    </div>
    <div class="card-body py-1">
      <div class="pb-4">
        <a :href="book.url" target="_blank" class="list-group-item border-0 p-0">
          <h6 class="card-title fw-bold text-center">{{ book.title || '-' }}</h6></a>
      </div>
      <div class="d-flex gap-5 justify-content-center pb-4">
        <i @click="handleLikes(book.id)" role="button" class="far fa-thumbs-up fa-xl"
           :class="likeActive ? 'fas fa-thumbs-up text-danger' : 'far fa-thumbs-up'"></i>
        <!--<i @click="handleLikes(book.id)" role="button" class="far fa-thumbs-up fa-xl" :class="{'text-danger' : likeActive}"></i>-->
        <i @click="handleBooks(book.id)" role="button" class="far fa-bookmark fa-xl "
           :class="bookActive ? 'text-danger' : ''"></i>
        <i role="button" :title="`${book?.description}`" data-bs-toggle="tooltip" data-bs-placement="left"
           class="far fa-comment-dots fa-xl text-black"></i>
      </div>
      <div class="">
        <div class="text-start">{{ book.user.fullName }}</div>
      </div>
    </div>
    <div class="py-1 fw-bold card-footer text-center text-black bg-danger bg-opacity-25">
      {{ book.category.name }}
    </div>
  </div>
</template>
<script setup>
import app from "../composables/app";

const props = defineProps({book: Object})
const {likeActive, bookActive, handleLikes, handleBooks, dateTime} = app(props.book)

</script>

<style scoped>

</style>