<template>
  <div class="col col-lg-8 mx-auto shadow-lg">
    <div class="card">
      <div class="">
        <div class="mt-4 mx-3 table-responsive">
          <router-link :to="{name:'CreateFormPersonal'}"
                       class="btn btn-sm btn-outline-primary mb-2 float-end fw-bold text-uppercase">New Personal
          </router-link>
          <table class="table table-borderless align-middle">
            <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">ID</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-if="!personals.length">
              <td colspan="8">
                <h1 class="text-center align-middle">Personal Not Found</h1>
              </td>
            </tr>
            <tr v-for="(personal,index) in personals" :key="index">
              <th>{{ index + 1 }}</th>
              <td>{{ personal.id }}</td>
              <td>{{ personal.fName }}</td>
              <td>{{ personal.lName }}</td>
              <td>{{ personal.phone }}</td>
              <td>{{ personal.email }}</td>
              <td>{{ personal.address }}</td>
              <td class="py-0 text-end" width="90">
                <i @click="this.$router.push(`/personal/detail/${personal.id}`)" role="button"
                   class="fas fa-file-alt fa-lg me-2 text-secondary" title="Detail"/>
                <i @click="this.$router.push(`/personal/edit/${personal.id}`)" role="button"
                   class="fas fa-pen-square fa-xl me-2 text-primary"
                   title="Edit"/>
                <i @click="this.deletePersonal(personal.id)" role="button" class="fas fa-trash-alt fa-lg text-danger"
                   title="Delete"/>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapState} from "vuex";

export default {
  name: "TablePersonal",
  created() {
    if (!this.personals.length) this.getPersonals()
  },
  update() {
    if (!this.personals.length) this.getPersonals()
  },
  computed: {
    ...mapGetters(['personals']),
    ...mapState(['personals'])
  },
  methods: {
    ...mapActions(['getPersonals', 'deletePersonal'])
  }
}
</script>

<style scoped>

</style>