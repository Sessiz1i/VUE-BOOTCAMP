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
    <div class="mt-2 overflow-x-auto">
      <div class="table-body">
        <div class="table-body flex">
          <table class="border-separate border border-green-800 ...">
            <thead>
            <tr>
              <th class="border border-green-600 ...">
                <label class="text-left p-1 w-[320px] mr-2">Ürün Adı</label>
              </th>
              <th class="border border-green-600 ...">
                <label class="text-left p-1 w-[50px] mr-2">Adet</label>
              </th>
              <th class="border border-green-600 ...">
                <label class="text-left p-1 w-[80px] mr-2">Fiyat</label>
              </th>
              <th class="border border-green-600 ...">
                <label class="text-left p-1 w-[80px]">Toplam</label>
              </th>
              <th class="border border-green-600 ...">
                <label class="text-left p-1 w-[80px]">Toplam</label>
              </th>
            </tr>
            </thead>
            <tbody>
            <tr>


              
              <InvoiceProductListItem v-for="product in state.products" :key="product.id" :product="product"/>
            </tr>
            <tr>
              <td class="border border-green-600 ...">Ohio</td>
              <td class="border border-green-600 ...">Columbus</td>
            </tr>
            </tbody>
          </table>
        </div>
        <!--InvoiceTableItem Component-->
      </div>
    </div>
    <button @click="addProduct" class="mt-4 add-item-button">
      <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
        <path d="M0 0h24v24H0V0z" fill="none"/>
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
      </svg>
      <span class="text-gray-400">Ekle</span>
    </button>
    <!-- Summary Component -->
    <div class="summary mt-5 flex justify-end items-end">
      <div class="text-right mr-2">
        <div class="text-gray-500">Ara Toplam :</div>
        <div class="text-gray-400">KDV Toplam :</div>
        <div class="text-gray-300">Genel Toplam :</div>
      </div>
      <div class="text-right">
        <div class="text-gray-500">100,00</div>
        <div class="text-gray-400">18,00</div>
        <div class="text-gray-300">118,00</div>
      </div>
    </div>
    <hr class="invoice-hr"/>
    <div class="actionbar text-right my-5">
      <button @click="onSave" class="purple-button">Kaydet</button>
    </div>
  </section>
</template>

<script setup>
import InvoiceProductListItem from "./InvoiceProductListItem.vue"
import {computed, reactive} from "vue";

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
const onSave = () => {
  console.log(state)
}
const addProduct = () => {
  state.products.push({
    id: Date.now().toString().slice(-4),
    name: null,
    quantity: 1,
    unitPrice: 0.0,
    totalPrice: 0.0,
  })
  console.log(state)
}
</script>

<style scoped>

</style>