import {createRouter, createWebHistory} from 'vue-router'
import NavBar from "@/components/NavBar";
import PageLogo from "@/components/PageLogo";
import TablePersonal from '../views/Personal/TablePersonal.vue'
import NotFound from "@/views/NotFound";
import DetailPersonal from "@/views/Personal/DetailPersonal";
import CreateFormPersonal from "@/views/Personal/CrateFormPersonal";
import EditFormPersonal from "@/views/Personal/EditFormPersonal";


const routes = [
    {
        path: '/',
        name: 'TablePersonal',
        components: {default: TablePersonal, NavBar, PageLogo},
    },
    {
        path: '/personal/create/',
        name: 'CreateFormPersonal',
        components: {default: CreateFormPersonal, NavBar, PageLogo,},
    },
    {
        path: '/personal/edit/:id',
        name: 'EditFormPersonal',
        components: {default: EditFormPersonal, NavBar, PageLogo,},
    },
    {
        path: '/personal/detail/:id',
        name: 'DetailPersonal',
        components: {default: DetailPersonal, NavBar, PageLogo,},
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('@/views/About')
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        components: {default: NotFound, NavBar},
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router

export class dispatch {
}