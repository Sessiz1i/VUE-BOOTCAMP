import {createStore} from 'vuex'
import {appAxios} from "@/Utils/appAxios";

export default createStore({
    state() {
        return {
            personals: []
        }
    },
    getters: {
        personals(state) {
            return state.personals
        },
        findOnePersonal: (state) => (id) => {
            return state.personals.find(i => i.id === parseInt(id))
        }
    },
    mutations: {
        setStatePersonals(state, payload) {
            (payload.length)
                ? state.personals = [...payload]
                : state.personals = [...state.personals, payload]
        },
        updateStatePersonal(state, updatePersonal) {
            state.personals = state.personals.map((i) => {
                if (i.id === updatePersonal.id) i = {...updatePersonal}
                return i
            })
        },
        removeStatePersonal(state,removePersonalID){
            state.personals = state.personals.filter(item => item.id !== removePersonalID)
        }
    },
    actions: {
        getPersonals({commit}) {
            appAxios.get('/personals').then(({data}) => {
                if (data.length) {
                    commit('setStatePersonals', data)
                }
            })
        },
        createPersonal({commit}, addPersonal) {
            appAxios.post('http://localhost:3000/personals', addPersonal).then(res => {
                if (res) commit('setStatePersonals', res.data)
            }).catch(err => alert(err))
            return true
        },
        updatePersonal({commit}, editPersonal) {
            appAxios.put(`/personals/${editPersonal.id}`, editPersonal).then(async res => {
                if (res) commit('updateStatePersonal', res.data)
            }).catch(err => alert(err))
            return true
        },
        deletePersonal({commit}, personalID) {
            appAxios.delete(`/personals/${personalID}`).then(({status}) => {
                if (status === 200) {
                    commit('removeStatePersonal',personalID)
                }
            })
        },

    },
    modules: {}
})
