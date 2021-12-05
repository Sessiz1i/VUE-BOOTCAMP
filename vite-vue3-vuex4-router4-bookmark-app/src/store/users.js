import {appAxios} from "../Axios";
import bcrypt from "bcryptjs";

export default {
    namespaced: true,
    state: {
        user: null,
    },
    getters: {
        isAuth: state => state.user !== null,
        currentUser({user}) {
            delete user?.password
            return user
        },
        userLikes: (state) => {
            if (state?.user) return state?.user.likes
        },
        userBooks: (state) => {
            if (state?.user) return state.user.bookmarks
        }
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload
        },
        logout(state) {
            state.user = null
        },
        setUserLikes(state, bookId) {
            const findIndexLike = state.user.likes.indexOf(bookId)
            findIndexLike > -1
                ? state.user.likes.splice(findIndexLike, 1)
                : state.user.likes.push(bookId)
        },
        setUserBooks(state, bookId) {
            const findIndexLike = state.user.bookmarks.indexOf(bookId)
            findIndexLike > -1
                ? state.user.bookmarks.splice(findIndexLike, 1)
                : state.user.bookmarks.push(bookId)
        }
    },
    actions: {
        addLikes({commit, state}, bookId) {
            commit('setUserLikes', bookId)
            return appAxios.patch(`/users/${state.user.id}`, state.user)
        },
        addBooks({commit, state}, bookId) {
            commit('setUserBooks', bookId)
            return appAxios.patch(`/users/${state.user.id}`, state.user)
        },
        registerUser({commit}, registerUser) {
            return appAxios.post('/users', registerUser).then(({status, data}) => {
                if (status === 201)
                    return status
            }).catch(err => alert(err))
        },
        updateUser({commit}, updateUser) {
            return appAxios.patch(`users/${updateUser.id}`, updateUser).then(({status, data}) => {
                console.log(status, data)
                if (status === 200) commit('setUser', data)
                return status
            }).catch(err => alert(err))
        },
        loginUser({commit}, loginUser) {
            return appAxios.get(`/users?username=${loginUser.username}`).then(({data}) => {
                if (data[0]) {
                    const user = data[0]
                    return bcrypt.compare(loginUser.password, user.password).then(res => {
                        if (res) commit('setUser', user)
                        else return {error: "Hatalı şifre."}
                    })
                } else return {error: "Kulanıcı yok"}
            }).catch(err => alert(err))
        },
        logoutUser({commit}) {
            return commit('logout')
        }
    }
}
