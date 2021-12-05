<template>
  <div class="d-flex flex-fill align-content-stretch min-vh-96 flex-1">
    <div class="list-group list-group-flush shadow bg-light w-100">

      <router-link to="/account/likes" active-class="active"
                   class="list-group-item list-group-item-action ps-4 fw-bolder text-uppercase bg-opacity-75">
        <i role="button" class="far fa-thumbs-up fa-xl"/>&nbsp;&nbsp;Likes</router-link>
      <router-link to="/account/favorites" active-class="active"
                   class="list-group-item list-group-item-action ps-4 fw-bolder text-uppercase bg-opacity-75">
        <i role="button" class="far fa-bookmark fa-xl"/>&nbsp;&nbsp;Favorites</router-link>
      <router-link to="/account/information" active-class="active"
                   class="list-group-item list-group-item-action ps-4 fw-bolder text-uppercase bg-opacity-75">
        <i role="button" class="far fa-user fa-xl"/>&nbsp;&nbsp; My Account</router-link>

    </div>
  </div>
</template>
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