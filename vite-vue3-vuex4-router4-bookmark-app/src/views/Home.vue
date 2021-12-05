<template>
  <div class="container-fluid px-0">
    <nav-bar/>
    <div class="d-flex flex-shrink-1 ">
      <Categories/>
      <div class="flex-4">
        <div v-if="bookmarks.length < 1" class="position-absolute top-50 start-50 translate-middle">
          <h1 class="text-center align-middle display-1 text-center">Bookmark Not Found</h1>
        </div>
        <div v-else class="d-flex flex-row gap-3 flex-wrap ms-md-3 mt-md-3">
          <BookMarkList v-for="(book,index) in bookmarks" :book="book" :key="`b-${index}`"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Categories from "../components/Categories.vue";
import app from "../components/composables/app";
import {onMounted} from "vue";

const {socket,fetchBookMark,bookmarks}= app()
onMounted(() => {
  if (!bookmarks) fetchBookMark()
  socket.on("NEW_BOOKMARK_ADDED", fetchBookMark())
})
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

.flex-4 {
  flex: 5;
}

</style>