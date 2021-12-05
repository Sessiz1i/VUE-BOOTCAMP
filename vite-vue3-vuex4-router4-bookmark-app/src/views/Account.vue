<template>
  <div class="container-fluid px-0">
    <nav-bar/>
    <div class="d-flex flex-shrink-1 ">
      <AccountSideBar/>
      <div class="flex-4">
        <div v-if="route.name === 'Likes'"
             class="d-flex flex-row gap-3 flex-wrap ms-md-3 mt-md-3">
          <router-view v-for="(book,index) in myLikes" :book="book" :key="`b-${index}`"/>
        </div>
        <div v-else-if="route.name === 'Books'"
             class="d-flex flex-row gap-3 flex-wrap ms-md-3 mt-md-3">
          <router-view v-for="(book,index) in myBooks" :book="book" :key="`b-${index}`"/>
        </div>
        <div v-else-if="route.name === 'User'" class="d-flex flex-row gap-3 flex-wrap ms-md-3 mt-md-3">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import AccountSideBar from "../components/Account/AccountSideBar.vue";
import {onMounted} from "vue";
import app from "../components/composables/app";
const {myLikes,myBooks,fetchBookMark,socketMessage,socket,route}=app()
onMounted(() => {
  // todo socket server dinleme
  socket.on("WELCOME_MESSAGE", socketMessage)
  socket.on("NEW_BOOKMARK_ADDED", socketMessage)
  fetchBookMark()
})
</script>


<style scoped>
.flex-4 {
  flex: 5;
}

</style>