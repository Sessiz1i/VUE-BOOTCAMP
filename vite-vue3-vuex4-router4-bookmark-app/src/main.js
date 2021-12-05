import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap"
import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import NavBar from "./components/NavBar.vue";
import {appAxios} from "./Axios";
import BookMarkList from "./components/BookMark/BookmarkList.vue"

// todo socket.io main.js settings
import io from "socket.io-client"
const socket = io("http://localhost:3131")

const app = createApp(App)

app.component("NavBar", NavBar)
app.component('BookMarkList',BookMarkList)
/*
app.config.globalProperties.$appAxios = appAxios
app.config.globalProperties.$socket = socket
*/
app.provide("socket",socket)
app.provide("appAxios",appAxios)

app.use(store).use(router).mount('#app')
