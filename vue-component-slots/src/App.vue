<template>
  <!--  <modal :onSave="onSave"/>
    -->
  <Modal modal :onSave="onSave">
    <template #title>
      <h3>Slot ile Gelen Title Bilgisi</h3>
    </template>
    <template v-slot:content>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto asperiores
        corporis delectus deleniti dignissimos doloribus ea in magni odio optio perspiciatis
        placeat, quam quidem reprehenderit suscipit tenetur vel veritatis!
        </p>
    </template>
  </Modal>
</template>

<script>
import Modal from "@/components/Modal"

export default {
  name: "App",
  components: {Modal},
  methods: {
    onSave()
    {
      alert("Saved...")
    }
  }
}
</script>

<style scoped>

</style>
