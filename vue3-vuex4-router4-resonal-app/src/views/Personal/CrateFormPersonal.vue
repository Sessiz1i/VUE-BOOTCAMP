<template>
  <div class="col col-lg-6 mx-auto shadow-lg">
    <div class="card">
      <div class="card-body mx-4">
        <div class="card-title fs-3">Create Personal</div>
        <div class="row g-3 mb-2">
          <div class="col-lg-6">
            <label for="fName" class="form-label">First Name</label>
            <input v-model="formData.fName" minlength="3" maxlength="20" required
                   type="text" class="form-control" id="fName" placeholder="Enter first name...">
          </div>
          <div class="col-lg-6">
            <label for="lName" class="form-label">Last Name</label>
            <input v-model="formData.lName" minlength="3" maxlength="20" required
                   type="text" class="form-control" id="lName" placeholder="Enter last name...">
          </div>
          <div class="col-lg-6">
            <label for="phone" class="form-label">Phone</label>
            <input v-model="formData.phone" required
                   type="tel" name="phone" class="form-control" id="phone" pattern="[0-9]{11}"
                   placeholder="Enter phone number...">
          </div>
          <div class="col-lg-6">
            <label for="email" class="form-label">Email</label>
            <input v-model="formData.email" required
                   type="email" class="form-control" id="email" placeholder="Enter Email...">
          </div>

          <div class="col-12">
            <label for="address" class="form-label">Address</label>
            <input v-model="formData.address" maxlength="200" required
                   type="text" class="form-control" id="address" placeholder="Enter address...">
          </div>
          <div class="col-12">
            <label for="description" class="form-label">Description</label>
            <input v-model="formData.description" maxlength="200"
                   type="text" class="form-control" id="description" placeholder="Enter description...">
          </div>
          <div class="col-12 text-end">
            <button @click="onSave" class="btn btn-sm btn-outline-success float-end fw-bold text-uppercase">create
            </button>
            <button @click="this.$router.push({name:'TablePersonal'})" class="btn btn-sm btn-outline-secondary me-1 fw-bold text-uppercase">Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {mapActions} from "vuex";

export default {
  name: "CreateFormPersonal",
  data() {
    return {
      formData: {
        fName: '',
        lName: '',
        phone: '',
        email: '',
        address: '',
        description: ''
      }
    }
  },
  methods: {
    ...mapActions(['createPersonal']),
    onSave() {
      this.createPersonal(this.formData).then(res=>{
        if (res){
          Object.keys(this.formData).forEach(key => this.formData[key] ='')
          this.$router.push('/')
        }
      })
    },
  }
}
</script>

<style scoped>

</style>