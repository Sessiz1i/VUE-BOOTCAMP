import {appAxios} from "../Axios";

export default {
    namespaced: true,
    state: {
        categories: []
    },
    getters: {
        categories(state) {
            return state.categories
        },
        category:(state) => (id) => {
            return state.categories.find(i => i.id === parseInt(id))
        }

    },
    actions: {
        fetchCategories({commit}) {
            return appAxios.get('/categories').then(({data}) => {
                if (data.length) {
                    commit('setCategories', data)
                }
            }).catch(err => alert(err))
        },
    },
    mutations: {
        setCategories(state, payload) {
            state.categories = payload
        },
    }
}