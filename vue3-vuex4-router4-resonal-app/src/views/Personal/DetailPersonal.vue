<template>
  <div class="col col-lg-6 mx-auto shadow-lg position-absolute top-50 start-50 translate-middle">
    <div class="card">
      <div class="card-body mx-3">
        <div class="card-title fs-3">Detail Personal</div>
        <div class="row g-3 mb-2">
          <div class="col-lg-6">
            <label for="fName" class="form-label mb-1">First Name</label><br>
            <div id="fName" class="border-bottom border-primary">
              <label class="form-label mb-0">{{ personal?.fName }}</label>
            </div>
          </div>
          <div class="col-lg-6">
            <label for="lName" class="form-label mb-1">Last Name :</label>
            <div id="lName" class="border-bottom border-primary">
              <label class="form-label mb-0">{{ personal?.lName }}</label>
            </div>
          </div>
          <div class="col-lg-6">
            <label for="phone" class="form-label mb-1">Phone :</label>
            <div id="phone" class="border-bottom border-primary">
              <label class="form-label mb-0">{{ personal?.phone }}</label>
            </div>
          </div>
          <div class="col-lg-6">
            <label for="email" class="form-label mb-1">Email :</label>
            <div id="email" class="border-bottom border-primary">
              <label class="form-label mb-0">{{ personal?.email }}</label>
            </div>
          </div>
          <div class="col-12">
            <label for="address" class="form-label mb-1">Address</label>
            <div id="address" class="border-bottom border-primary">
              <label class="form-label mb-0">{{ personal?.address }}</label>
            </div>
          </div>
          <div class="col-12">
            <label for="description" class="form-label mb-1">Description</label>
            <div id="description" class="border-bottom border-primary">
              <label class="form-label mb-0">{{ personal?.description }}</label>
            </div>
          </div>
          <div class="col-12 text-end">
            <button @click="this.$router.back()" class="btn btn-outline-secondary">Back to Personals</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {mapGetters} from "vuex";

export default {
  name: "DetailPersonal",
  created() {
    if (!this.personal?.id) {
      this.$router.replace('/')
    }
  },
  computed: {
    ...mapGetters(['findOnePersonal']),
    personal() {
      return this.findOnePersonal(this.$route.params.id)
    }
  }

}
</script>

<style scoped>

</style>