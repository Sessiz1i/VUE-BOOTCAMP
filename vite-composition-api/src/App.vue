<template>
  <div class="container mx-auto">
    <div class="img">
      <img alt="Vue logo" src="./assets/logo.png" class=" w-40 h-40 mx-auto mt-4"/>
    </div>
    <div class="font-sans mb-10">
      <h3 class="text-shadow font-bold text-5xl text-blue-500 text-center capitalize">{{ title }}</h3>
    </div>
    <div class="w-[30rem] mx-auto mb-2">
      <div class="form-control">
        <input v-model="title" type="text" placeholder="username"
               class="text-lg font-medium input input-primary input-bordered">
      </div>
    </div>
    <div class="w-[30rem] mx-auto mb-2 flex justify-between">
      <button @click="dec" class="btn btn-error w-24">decrease</button>
      <button :class="{'btn-success' : counter > 0,'btn-error' : counter < 0}" class="btn w-24 text-2xl">{{
          counter
        }}
      </button>
      <button @click="inc" class="btn btn-success w-24">increase</button>
    </div>
    <OddOrEven :counter="counter" @odd-event="alertMe"/>
  </div>
  <hr>
  <div class="font-sans my-10">
    <h3 class="text-shadow font-bold text-5xl text-blue-500 text-center capitalize">User App</h3>
  </div>
  <div class="font-sans my-10 w-[30rem] mx-auto mb-2 flex justify-between">
    <h3 class="text-shadow font-bold text-xl text-blue-500 capitalize">
      First Name : {{ state.personal.fName }}</h3>
  </div>
  <div class="font-sans w-[30rem] mx-auto mb-2 flex justify-between">
    <h3 class="text-shadow font-bold text-xl text-blue-500 capitalize">
      Last Name : {{ state.personal.lName }}</h3>
  </div>
  <div class="w-[30rem] mx-auto mb-2">
    <div class="form-control mb-3">
      <input v-model="state.personal.fName" type="text" placeholder="Firs Name..."
             class="text-lg font-medium input input-primary input-bordered">
    </div>
    <div class="form-control">
      <input v-model="state.personal.lName" type="text" placeholder="Last Name..."
             class="text-lg font-medium input input-primary input-bordered">
    </div>
  </div>

</template>
<script setup>
/** beforeCreate() created() ve date() */
// ! /
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import OddOrEven from "./components/OddOrEven.vue"
import Utils from "./composables/Utils.js";
import {reactive, ref, watch} from "vue";

const {title, counter, inc, dec, alertMe} = Utils()
/** UserApp */
const state = reactive({
  personal: {
    fName: null,
    lName: null
  }
})
/** Object'nin Tamamı */
watch(() => ({...state.personal}), (state, prevState) => {
  console.log(state, prevState)
})
/** Object'nin Bir Elemanı */
watch(() => ({fName: state.personal.fName}), (state, prevState) => {
  console.log(state, prevState)
})
</script>

<style>
.text-shadow {
  text-shadow: 4px 4px 3px #a4a4a4;
}
</style>
