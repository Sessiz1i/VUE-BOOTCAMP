import 'bootstrap/dist/css/bootstrap.css'
import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {faUserSecret, faPenToSquare, faTrashCan} from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret,faPenToSquare,faTrashCan)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.config.productionTip = false

app.use(store).use(router).mount('#app')
