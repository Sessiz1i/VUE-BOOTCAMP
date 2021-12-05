import {createStore} from 'vuex'
import users from "./users";
import categories from "./categories";
import bookMarks from "./bookMarks";
import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";

const ls = new SecureLS({isCompression: false});

export default createStore({
    modules: {
        users: users,
        categories: categories,
        bookmarks: bookMarks
    },
    plugins: [createPersistedState({
        paths: ['users'],
        storage: {
            getItem: (key) => ls.get(key),
            setItem: (key, value) => ls.set(key, value),
            removeItem: (key) => ls.remove(key),
        },
    })],
    getters: {
        myLikes(state) {
            return state.bookmarks.bookmarks.filter(b => state.users.user.likes.includes(b.id))
        },
        myBooks(state) {
            return state.bookmarks.bookmarks.filter(b => state.users.user.bookmarks.includes(b.id))
        }
    },
    mutations: {},
})
