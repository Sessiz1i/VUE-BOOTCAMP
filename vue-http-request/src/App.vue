<template>
  <div class="container p-5">
    <div class="card shadow">
      <div class="card-body">
        <h3>Alışveriş Listesi</h3>
        <div>
          <input @keydown.enter="onSave" v-model="item" type="text" class="form-control my-2" placeholder="Birşeyler Ekle...">
        </div>
        <h5>Listem</h5>
        <ul class="list-group">
          <li v-for="item in items" :key="item.id" class="list-group my-1">
            <div class="d-flex justify-content-between align-items-center">
              <strong>{{ item.title }}</strong>
                <small>Tarih : {{ item.createdAt }}</small>
              <button @click="onDelete(item)" class="btn btn-sm btn-danger text-uppercase">sil</button>
            </div>
          </li>
        </ul>
        <div class="text-end text-danger fw-bold">
          <small>{{itemCount}} Adet Malzeme Var</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: "App",
  data(){
    return{
      item:null,
      items: []
    }
  },
  mounted()
  {
    axios.get("http://localhost:3000/items")
    .then(req =>{
      this.items = req.data
    })
  },
  methods:{
    onSave(e){
      const saveObject = {
        title:e.target.value,
        createdAt:new Date(),
        completed:false
      }
      axios.post("http://localhost:3000/items",saveObject)
      .then(() =>{
        axios.get("http://localhost:3000/items")
        .then(req =>{
          this.items = req.data
        })
      })
      this.item = null
    },
    onDelete(item){
      console.log(item)

      axios.delete(`http://localhost:3000/items/${item.id}`)
      .then(() =>{
        axios.get("http://localhost:3000/items")
        .then(req =>{
          this.items = req.data
        })
      })

    }
  },
  computed:{
    itemCount(){
      return this.items.length || 0
    }
  }
}
</script>

<style scoped>

</style>
