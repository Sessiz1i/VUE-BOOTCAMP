<template>
  <div class=" bg-gray-800 flex flex-col sm:flex-row text-white items-start justify-center">
    <SideBar :invoiceList="invoiceList"/>
    <InvoiceContent :saveInvoice="saveInvoice"/>
  </div>
</template>
<script setup>
import SideBar from "./components/SideBar.vue";
import InvoiceContent from "./components/InvoiceContent.vue";
import {ref} from "vue";

const invoiceList = ref([])
const saveInvoice = (invoice) => {
  invoiceList.value.push(invoice)
  console.log(invoiceList.value)
}
</script>