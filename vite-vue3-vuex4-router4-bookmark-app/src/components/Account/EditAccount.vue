<template>
  <div class="col-md-8 col-lg-4 mx-auto mt-5">
    <div style="height: 56px;"/>
    <div class="card shadow">
      <div class="card-body">
        <h3>User Information</h3>
        <div class="mb-2">
          <label for="fName" class="form-label">Full Name</label>
          <input v-model="currentUser?.fullName" type="text" class="form-control" id="fName"
                 aria-describedby="emailHelp">
        </div>
        <div class="mb-2">
          <label for="email" class="form-label">Email address</label>
          <input v-model="currentUser?.username" type="email" class="form-control" id="email"
                 aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input v-model="currentUser?.password" type="password" class="form-control" id="password">
        </div>
        <div class="mb-2 d-grid">
          <button @click="onUpdate" class="btn btn-primary">Update</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import app from "../composables/app";

const {onUpdate, currentUser} = app()
</script>

<style scoped>

</style>