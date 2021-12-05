<template>
  <div class="container pt-5">
    <div class="card shadow-lg col-10 mx-auto p-2">
      <div class="card-body">
        <div class="header">
         <slot name="title"/>
        </div>
        <hr>
        <div class="content">
        <slot name="content"/>
        </div>
        <hr>
        <div class="footer">
          <div class="text-end">
            <button type="button" class="btn btn-sm btn-danger text-uppercase me-2">Kapat</button>
            <button @click="onSave" type="button" class="btn btn-sm btn-success text-uppercase">kaydet</button>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props:["onSave"]
}
</script>

<style scoped>

</style>
