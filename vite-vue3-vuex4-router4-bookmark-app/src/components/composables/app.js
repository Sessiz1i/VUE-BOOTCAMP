import moment from "moment";

moment.locale('tr')

import {mapActions} from '../../store/storeLib.js'
import {computed, inject, reactive, ref} from "vue";
import {useStore} from "vuex";
import {useRoute, useRouter} from "vue-router";
import bcrypt from "bcryptjs"

export default (book) => {
    /** Book Mark List */
    const {getters, dispatch} = useStore()
    const userLikes = computed(() => getters['users/userLikes'])
    const userBooks = computed(() => getters['users/userBooks'])
    const likeActive = computed(() => userLikes?.value?.includes(book.id))
    const bookActive = computed(() => userBooks?.value?.includes(book.id))

    const handleLikes = (bookId) => dispatch('users/addLikes', bookId)
    const handleBooks = (bookId) => dispatch('users/addBooks', bookId)
    const dateTime = (date) => moment(date, "DD.MM.YYYY HH:mm:ss", 'tr').fromNow()
    /** New BookMark */
    const router = useRouter()
    const route = useRoute()
    const socket = inject('socket')
    const bookMarkData = reactive({
        title: null,
        url: null,
        categoryId: 0,
        description: null,
    })
    const categories = computed(() => getters['categories/categories'])
    const currentUser = computed(() => getters['users/currentUser'])
    const {fetchCategories} = mapActions('categories')
    const {saveBookMark} = mapActions('bookmarks')
    const onSave = () => {
        bookMarkData.userId = currentUser.value.id
        bookMarkData.created_at = new Date().toLocaleString()
        saveBookMark(bookMarkData).then(({status, data}) => {
            if (status === 201) {
                //todo Yeni eklenen BookMark Data'sını socket.io server'ine NEW_BOOKMARK_EVENT'i ile bildiriyor
                socket.emit("NEW_BOOKMARK_EVENT", data)
                router.push({name: 'Home'})
                alert("Kayıt işlemi başarılı")
            } else alert("Kayıt işleminde beklenmeyen bir hata oluştu. ")
        })
    }
    /** Edit Account */
    const {updateUser} = mapActions('users')
    const onUpdate = async () => {
        const hashPassword = await bcrypt.hash(currentUser.value.password, 10)
        updateUser({...currentUser.value, password: hashPassword}).then((status) => {
            if (status === 200) alert('Update Account Success')
        })
    }

    /** Categories */
    const {fetchSelectedCategoryBookMark} = mapActions('bookmarks')
    const currentCategory = (id) => fetchSelectedCategoryBookMark(id)
    /** NavBar */
    const logoutUser = () => dispatch('users/logoutUser')
    const onLogout = () => logoutUser().then((res) => !res && router.replace({name: 'Login'}))
    /** Account */
    const message = ref('')
    const myLikes = computed(() => getters['myLikes'])
    const myBooks = computed(() => getters['myBooks'])
    const {fetchBookMark} = mapActions('bookmarks')
    const socketMessage = (data) => message.value = data
// todo socket server'a yayın mesaj gönderme
    const SEND_SOCKET_MESSAGE = (e) => {
        socket.emit("SEND_MESSAGE", e.target.value)
    }
    /** Home Page */
    const bookmarks = computed(() => getters['bookmarks/bookmarks'])
    /** Login */
    const loginData = reactive({
        username: null,
        password: null,
    })
    const {loginUser} = mapActions('users')
    const onLogin = () => {
        if (loginData.username && loginData.password) {
            loginUser(loginData).then(res => {
                (res?.error)
                    ? alert(res?.error)
                    : router.push({name: 'Home'})
            })
        }
    }
    /** Register */
    const userData = reactive({
        fullName: null,
        username: null,
        password: null,
        likes: [],
        bookmarks: [],
    })
    const {registerUser} = mapActions('users')
    const handleRegister = async () => {
        const hashPassword = await bcrypt.hash(userData.password, 10)
        registerUser({...userData, password: hashPassword})
            .then((status) => status === 201 && router.push({name: 'Home'}))
    }
    /** Return */
    return {
        /** Book Mark List */
        likeActive, bookActive, handleLikes, handleBooks, dateTime,
        /** New BookMark */
        bookMarkData, categories, currentUser, fetchCategories, saveBookMark, onSave,
        /** Edit Account */
        userData, onUpdate,
        /** Categories */
        currentCategory,
        /** NavBar */
        onLogout,
        /** Account */
        message, myLikes, myBooks, fetchBookMark, socketMessage, SEND_SOCKET_MESSAGE, socket, route,
        /** Home Page */
        bookmarks,
        /** Login */
        loginData,onLogin,
        /** Register */
        handleRegister,
    }
}