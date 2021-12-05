<template>
  <div class="col-md-8 col-lg-4 mx-auto mt-5">
    <div style="height: 56px;"/>
    <div class="card shadow">
      <div class="card-body">
        <h1>Login</h1>
        <div class="mb-2">
          <label for="email" class="form-label">Email address</label>
          <input v-model="loginData.username" type="email" class="form-control" id="email" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input v-model="loginData.password" type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <div class="mb-2 d-grid">
          <button @click="onLogin" class="btn btn-primary">Login</button>
        </div>
        <div class="text-center nav-item">
          <router-link :to="{name:'Register'}" class="nav-link text-black">Üye değilim, Üye olmak istiyorum!
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import app from "../components/composables/app";

const {loginData,onLogin,}=app()
</script>

<style scoped>

</style>