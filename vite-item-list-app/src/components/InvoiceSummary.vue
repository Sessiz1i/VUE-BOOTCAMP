<template>
  <div class="summary mt-5 flex justify-end items-end">
    <div class="text-right mr-2">
      <div class="text-gray-500">Ara Toplam :</div>
      <div class="text-gray-400">KDV Toplam :</div>
      <div class="text-gray-300">Genel Toplam :</div>
    </div>
    <div class="text-right">
      <div class="text-gray-500">{{ subTotal }}</div>
      <div class="text-gray-400">{{ taxTotal }}</div>
      <div class="text-gray-300">{{  total }}</div>
    </div>
  </div>
</template>

<script setup>
import {computed} from "vue";

const props = defineProps({products: Array})
const subTotal = computed(() => props.products.reduce((total, item) => total + item.totalPrice, 0))
const taxTotal = computed(() => parseFloat(subTotal.value * 0.18).toFixed(2))
const total = computed(() => parseInt(subTotal.value) + parseInt(taxTotal.value))
</script>

<style scoped>

</style>