<template>
  <div class="col-md-8 col-lg-4 mx-auto mt-5">
    <div style="height: 56px;"/>
    <div class="card shadow">
      <div class="card-body">
        <h1>Register</h1>
        <div class="mb-2">
          <label for="fName" class="form-label">Full Name</label>
          <input v-model="userData.fullName" type="text" class="form-control" id="fName" aria-describedby="emailHelp">
        </div>
        <div class="mb-2">
          <label for="email" class="form-label">Email address</label>
          <input v-model="userData.username" type="email" class="form-control" id="email" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input v-model="userData.password" type="password" class="form-control" id="password">
        </div>
        <div class="mb-2 d-grid">
          <button @click="handleRegister" class="btn btn-primary">Register</button>
        </div>
        <div class="mb-2 text-center nav-item">
          <router-link :to="{name:'Login'}" class="nav-link text-black">Üyeyim giriş yapmak istiyorum</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import app from "../components/composables/app";

const {userData, handleRegister,} = app()
</script>
<style scoped>

</style>