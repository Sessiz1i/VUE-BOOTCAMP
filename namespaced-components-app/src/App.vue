<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import Label from "./components/FormElements/Label.vue";
// import Input from "./components/FormElements/Input.vue";
// import Select from "./components/FormElements/Select.vue";
import * as Form from "./components/FormElements/form-elements"

</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" /> <br>
  <Form.Label>
    Başlık
    <br>
    <Form.Input/>
  </Form.Label>
  <br>
  <Form.Select/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
