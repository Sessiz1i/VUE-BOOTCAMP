<script setup>
import {computed, watch} from "vue";
const emit = defineEmits()
const props = defineProps({counter: Number})
const result = computed(() => props.counter % 2 === 0 ? 'Çift' : 'Tek')


watch(result,(result)=>{
  if (result === "Tek") emit("odd-event",true)
})
</script>
<template>
  <div class="w-[30rem] mx-auto mb-2 flex justify-center">
    <button :class="{'btn-success' : result === 'Çift','btn-error' : result === 'Tek'}" class="btn w-24 text-2xl">{{ result }}</button>
  </div>
</template>
<style scoped>

</style>