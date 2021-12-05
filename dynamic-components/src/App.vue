<template>
  <div class="container p-5">
    <div class="text-center pb-2">
      <button @click="this.component='Red'" class="btn btn-sm btn-danger">Red</button>
      <button @click="this.component='Green'" class="btn btn-sm btn-success mx-2">Green</button>
      <button @click="this.component='Blue'" class="btn btn-sm btn-primary">Blue</button>
    </div>
    <div class="text-center pb-2">
      <button @click="this.component=''" class="btn btn-sm btn-warning">Reset</button>

    </div>

    <div v-if="component" class="card shadow w-card mx-auto">
      <div class="card-body">
        <keep-alive>
          <component :is="this.component"/>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import Red from '@/components/Red'
import Green from "@/components/Green"
import Blue from "@/components/Blue"

export default {
  name: "App",
  components: {Red, Green, Blue},
  data() {
    return {
      component: null
    }
  }

}
</script>

<style scoped>
.w-card {
  max-width: 500px;
}

</style>
