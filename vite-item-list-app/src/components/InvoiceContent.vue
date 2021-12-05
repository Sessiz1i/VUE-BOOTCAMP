<template>
  <section class="bg-gray-900 w-full sm:w-1/3 mx-auto mt-10 p-2 px-5 rounded-md shadow-2xl">
    <!--Title Component-->
    <Heading title="Fatura Bilgileri"/>
    <hr class="invoice-hr mb-2"/>
    <!--ContactSection Component-->
    <div class="overflow-x-auto">
      <label for="client_name" class="flex flex-col text-gray-400 mb-2">
        <small class="mb-1">Müşteri Adı</small>
        <input v-model="state.info.name" autocomplete="off" id="client_name" class="input" type="text"/>
      </label>
      <label for="client_email" class="flex flex-col text-gray-400 mb-2">
        <small class="mb-1">E-posta</small>
        <input v-model="state.info.email" autocomplete="off" id="client_email" class="input" type="email"/>
      </label>
      <div class="grid grid-cols-3 gap-5">
        <label for="city" class="flex flex-col text-gray-400 mb-2">
          <small class="mb-1">Şehir</small>
          <input v-model="state.info.city" autocomplete="off" id="city" class="input" type="text"/>
        </label>
        <label for="zip_code" class="flex flex-col text-gray-400 mb-2">
          <small class="mb-1">Posta Kodu</small>
          <input v-model="state.info.zipcode" autocomplete="off" id="zip_code" class="input" type="text"/>
        </label>
        <label for="country" class="flex flex-col text-gray-400 mb-2">
          <small class="mb-1">Ülke</small>
          <input v-model="state.info.country" autocomplete="off" id="country" class="input" type="text"/>
        </label>
      </div>
    </div>
    <!--Title Component-->
    <Heading title="Fatura Kalemleri"/>
    <hr class="invoice-hr mb-2"/>
    <!--InvoiceItems Component-->
    <div class="overflow-auto">
      <table class="w-full border-separate border-separate">
        <thead>
        <tr>
          <th class="text-left text-sm">Product Name</th>
          <th class="text-sm">Qnty</th>
          <th class="text-sm">Unit Price</th>
          <th class="text-sm">Total Price</th>
          <th class="text-sm"></th>
        </tr>
        </thead>
        <tbody>
        <InvoiceProductListItem v-for="product in state.products" :key="product.id" :product="product"/>
        </tbody>
      </table>
    </div>
    <!--InvoiceTableItem Component-->
    <button @click="addProduct" class="mt-4 add-item-button">
      <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
        <path d="M0 0h24v24H0V0z" fill="none"/>
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
      </svg>
      <span class="text-gray-400">Ekle</span>
    </button>
    <!-- Summary Component -->
    <InvoiceSummary :products="state.products"/>
    <hr class="invoice-hr"/>
    <div class="actionbar text-right my-5">
      <button @click="onSubmit" class="purple-button">Kaydet</button>
    </div>
  </section>
</template>

<script setup>
import InvoiceProductListItem from "./InvoiceProductListItem.vue"
import InvoiceSummary from "./InvoiceSummary.vue";
import {provide, reactive} from "vue";

const {saveInvoice: saveInvoice} = defineProps({saveInvoice: Function})

const state = reactive({
  info: {
    name: null,
    email: null,
    city: null,
    zipcode: null,
    country: null,
  },
  products: []
})
const onSubmit = () => {
  saveInvoice({id: Date.now().toString().slice(-4), ...state, createdAt: Date.now().toString()})
  state.info = {
    name: null,
    email: null,
    city: null,
    zipcode: null,
    country: null,
  }
  state.products = []
}
const addProduct = () => {
  state.products.push({
    id: Date.now().toString().slice(-4),
    name: null, quantity: null, unitPrice: null, totalPrice: null,
  })
  console.log(state)
}
const deleteInvoiceItem = (invoiceItem) => {
  state.products.splice(state.products.findIndex(i => i?.id === invoiceItem.id), 1)
}
provide('DeleteInvoiceItem', deleteInvoiceItem)
</script>
<style scoped>

</style>