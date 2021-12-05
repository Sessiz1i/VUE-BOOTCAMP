import {createApp} from 'vue'
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import App from './App.vue'
import router from './router'
import store from './store'
import {appAxios} from "@/Utils/appAxios";



const app = createApp(App);

app.config.globalProperties.$appAxios = appAxios;
app.use(BootstrapVue3);
app.use(store);
app.use(router);
app.mount('#app');
