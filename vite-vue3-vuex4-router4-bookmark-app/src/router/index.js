import {createRouter, createWebHistory} from 'vue-router';
import store from "../store"


const routes = [
    {
        path: '/',
        name: 'Home',
        meta: {authRequired: true},
        component: () => import('../views/Home.vue')
    },
    {
        path: '/bookmark/create',
        name: 'CreateBookMark',
        meta: {authRequired: true},
        component: () => import('../components/BookMark/NewBookMark.vue')
    },
    {
        path: '/account',
        name: 'Account',
        meta: {authRequired: true},
        component:() => import('../views/Account.vue'),
        children: [
            {
                path: 'information',
                name:'User',
                component: ()=>import('../components/Account/EditAccount.vue')
            },
            {
                path: 'likes',
                name:'Likes',
                component: ()=>import('../components/BookMark/BookmarkList.vue')
            },
            {
                path: 'favorites',
                name:'Books',
                component: ()=>import('../components/BookMark/BookmarkList.vue')
            },
        ]

    },
    {
        path: '/login',
        name: 'Login',
        meta: {authRequired: false},
        component: () => import('../views/Login.vue')
    },
    {
        path: '/register',
        name: 'Register',
        meta: {authRequired: false},
        component: () => import('../views/Register.vue')
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})
router.beforeEach((to, from, next) => {
    const isAuth = store.getters["users/isAuth"];
    const guestRouters = ['Login', 'Register'];


    if (guestRouters.includes(to.name) && isAuth) next({name: from.name || 'Home'})
    if (to?.meta?.authRequired === true && !isAuth) next({name: 'Login'})
    else next()


})

export default router
