import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../components/index/index'

import Classify from '../components/home/classify'
import Contact from '../components/home/contact'
import Myperson from '../components/home/myperson'
import Page from '../components/home/page'
const Shopcar = () =>
    import ( /*cart*/ '../components/home/shopcar')
import Search from '../components/search/search'

import Login from '../components/login/login'
import Detail from '../components/detail/detail'
import Register from '../components/register/register'
import { getCookie } from '../until/decode'
import Order from '../components/order/order'
import All from '../components/order/orders/all'
import Obligation from '../components/order/orders/obligation'
import Tosend from '../components/order/orders/tosend'
import Wait from '../components/order/orders/wait'
import After from '../components/order/orders/after'
import Adress from '../components/address/add'
import NewAdd from '../components/address/newadd'
Vue.use(VueRouter)

let router = new VueRouter({
    routes: [{
            path: "/",
            redirect: '/index/page'
        }, {
            path: "/index",
            name: "index",
            component: Index,
            children: [{
                    path: "classify",
                    name: "classify",
                    component: Classify
                },
                {
                    path: "contact",
                    name: "contact",
                    component: Contact
                },
                {
                    path: "myperson",
                    name: "myperson",
                    component: Myperson
                },
                {
                    path: "page",
                    name: "page",
                    component: Page
                },
                {
                    path: "shopcar",
                    name: "shopcar",
                    component: Shopcar
                }
            ]
        },
        {
            name: "search",
            path: "/search",
            component: Search
        }, {
            name: "login",
            path: "/login",
            component: Login
        },
        {
            name: "detail",
            path: "/detail",
            component: Detail
        },
        {
            name: "register",
            path: "/register",
            component: Register
        },
        {
            name: "adress",
            path: "/aderss",
            component: Adress
        },
        {
            name: "newadd",
            path: "/newadd",
            component: NewAdd
        },
        {
            name: "order",
            path: "/order",
            component: Order,
            redirect: "/order/all",
            children: [{
                    name: "all",
                    path: "all",
                    component: All
                },
                {
                    name: "obligation",
                    path: "obligation",
                    component: Obligation
                },
                {
                    name: "tosend",
                    path: "tosend",
                    component: Tosend
                },
                {
                    name: "wait",
                    path: "wait",
                    component: Wait
                },
                {
                    name: "after",
                    path: "after",
                    component: After
                }
            ]
        }


    ]
})
router.beforeEach((to, from, next) => {

    if (to.name === "shopcar" || to.name == "myperson" || to.name == "adress") {
        let islogin = getCookie('token');
        if (islogin) {
            next()
        } else {
            next({ name: "login", query: { url: to.name } })
        }

    } else {
        next()

    }

})
export default router