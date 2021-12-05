import {createStore} from 'vuex'
import todo from "@/store/todoModule"
export default createStore({
    modules: {
        todo
    }
})
