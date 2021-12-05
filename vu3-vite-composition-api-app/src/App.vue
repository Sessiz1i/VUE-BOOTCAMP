<template>
  <div class="container mx-5">
    <h3 class="title is-1">{{ title }}</h3>
    {{ titleLength }}
    <input v-model="title" class="input column is-2 mb-2" type="text" placeholder="Text input">
    <div class="text-end">
      <button @click="toggleIt" :class="{'is-success' :!show,'is-danger' :show, }" class="button is-success is-outlined">{{ show ? "Hide" : "Show" }}</button>
    </div>
    <p v-if="show" class="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Ab accusamus accusantium ad aliquid, assumenda atque et id
      maxime minus modi natus nemo nisi quaerat quas quisquam
      quos sint vel vitae.</p>
    <div class="dropdown-divider"/>
    <h5 class="title is-5">{{ counter }} - {{ oddOrEven }}</h5>
    <div class="is-justify-content-end">
      <button @click="counter++" class="button is-success mb-2">Counter</button>
    </div>
    <div class="dropdown-divider mb-1"/>
    <input v-model="searchText" class="input column is-2 mb-2 mt-5" type="search" placeholder="Search Text">
    <p v-if="isTyping">Şu an yazıyorum...</p>
    <div class="dropdown-divider"/>
  </div>
</template>

<script>
import Counter from "./composables/Counter";
import Header from "./composables/Header";
import Search from "./composables/Search";
import Toggle from "./composables/Toggle";

export default {
  setup() {
    const {counter, oddOrEven} = Counter()
    const {title, titleLength} = Header()
    const {searchText, isTyping, stop} = Search()
    const {show, toggleIt} = Toggle()


    return {
      title,
      show,
      toggleIt,
      titleLength,
      counter,
      oddOrEven,
      searchText,
      isTyping
    }
  },
  mounted() {
    console.log("mounted()")
  }
}
</script>
<style>

</style>
