import {createApp} from 'vue'
import App from './App.vue'
import "./assets/index.css"
import Heading from "./components/Partials/Heading.vue";

createApp(App)
    .component('Heading', Heading)
    .mount('#app')
