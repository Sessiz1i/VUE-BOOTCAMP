<template>
  <div class="col col-lg-6 mx-auto shadow-lg">
    <div class="card">
      <div class="card-body mx-4">
        <div class="card-title fs-3">Edit Personal</div>
        <div class="row g-3 mb-2">
          <div class="col-lg-6">
            <label for="fName" class="form-label">First Name</label>
            <input v-model="personal.fName" minlength="3" maxlength="20" required
                   type="text" class="form-control" id="fName" placeholder="Enter first name...">
          </div>
          <div class="col-lg-6">
            <label for="lName" class="form-label">Last Name</label>
            <input v-model="personal.lName" minlength="3" maxlength="20" required
                   type="text" class="form-control" id="lName" placeholder="Enter last name...">
          </div>
          <div class="col-lg-6">
            <label for="phone" class="form-label">Phone</label>
            <input v-model="personal.phone" required
                   type="tel" name="phone" class="form-control" id="phone" pattern="[0-9]{11}"
                   placeholder="Enter phone number...">
          </div>
          <div class="col-lg-6">
            <label for="email" class="form-label">Email</label>
            <input v-model="personal.email" required
                   type="email" class="form-control" id="email" placeholder="Enter Email...">
          </div>

          <div class="col-12">
            <label for="address" class="form-label">Address</label>
            <input v-model="personal.address" maxlength="200" required
                   type="text" class="form-control" id="address" placeholder="Enter address...">
          </div>
          <div class="col-12">
            <label for="description" class="form-label">Description</label>
            <input v-model="personal.description" maxlength="200"
                   type="text" class="form-control" id="description" placeholder="Enter description...">
          </div>
          <div class="col-12 text-end">
            <button @click="onSave" type="submit"
                    class="btn btn-sm btn-outline-success float-end fw-bold text-uppercase">Update
            </button>
            <button @click="this.$router.push({name:'TablePersonal'})"
                    class="btn btn-sm btn-outline-secondary me-1 fw-bold text-uppercase">Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "EditFormPersonal",
  data(){
    return{
      personal:''
    }
  },
  created() {
    if (this.$route.params.id){
      this.personal = {...this.getPersonal} || {}
    }
    if (!this.personal.id){
      this.$router.replace('/')
    }
  },
  computed: {
    ...mapGetters(['findOnePersonal']),
    getPersonal() {
      return this.findOnePersonal(this.$route.params.id)
    }
  },
  methods: {
    ...mapActions(['updatePersonal']),
    onSave() {
      this.updatePersonal(this.personal).then(() => {
        this.$router.push('/')
      })
    }
  }
}
</script>

<style scoped>

</style>