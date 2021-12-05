import {appAxios} from "../Axios";

export default {
    namespaced: true,
    state: {
        bookmarks: []
    },
    getters: {
        bookmarks(state){
            return state.bookmarks
        },
    },
    actions: {
        fetchSelectedCategoryBookMark({commit},selectedCategory){
            return appAxios.get(`/bookmarks?categoryId=${selectedCategory}&_expand=category&_expand=user`).then(({status,data})=>{
                if (status === 200) commit('setStateBookMarks', data)
                return status
            })
        },
        fetchBookMark({commit}) {
            return appAxios.get('/bookmarks?_expand=category&_expand=user').then(({status, data}) => {
                if (status === 200) commit('setStateBookMarks', data)
                return status
            }).catch(err =>alert(err))
        },
        saveBookMark({dispatch}, bookMarkData) {
            return appAxios.post('/bookmarks', bookMarkData).then(({status,data}) => {
                if (status === 201) {
                    dispatch('fetchBookMark')
                    return {status,data}
                } else return false
            })
        }
    },
    mutations: {
        setStateBookMarks(state, bookMark) {
            const filteredData = bookMark.map(i => {
                delete i.user.password
                return i
            })
            if (bookMark) state.bookmarks = filteredData
        }
    }
}