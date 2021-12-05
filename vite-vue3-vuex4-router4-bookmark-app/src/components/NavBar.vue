<template>
  <nav class="shadow navbar navbar-expand-lg navbar-light bg-light border-bottom ">
    <div class="container">
      <router-link :to="{name:'Home'}" class="navbar-brand" aria-current="page">Book Like</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link :to="{name:'CreateBookMark'}" class="nav-link active" aria-current="page">New Bookmark
            </router-link>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li v-if="!currentUser" class="nav-item">
            <router-link :to="{name:'Login'}" class="nav-link active" aria-current="page"><i
                class="fas fa-sign-in-alt"/>&nbsp;Login
            </router-link>
          </li>
          <li v-if="!currentUser" class="nav-item">
            <router-link :to="{name:'Register'}" class="nav-link active" aria-current="page"><i
                class="far fa-registered"/>&nbsp;Register
            </router-link>
          </li>
          <li v-if="currentUser" class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
               aria-expanded="false">
              <i role="button" class="far fa-user"/>&nbsp;{{ currentUser?.fullName }}
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <router-link to="/account/likes" class="dropdown-item" aria-current="page"><i role="button"
                                                                                              class="far fa-user"/>&nbsp;Account
                </router-link>
              </li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li>
                <a @click="onLogout" role="button" class="dropdown-item" aria-current="page"><i
                    class="fas fa-sign-out-alt"/>&nbsp;Logout</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script setup>
import app from "./composables/app";

const {onLogout,currentUser} = app()
</script>

<style scoped>

</style>