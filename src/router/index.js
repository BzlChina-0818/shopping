import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../components/index/index'
import Classify from '../components/home/classify'
import Contact from '../components/home/contact'
import Myperson from '../components/home/myperson'
import Page from '../components/home/page'
import Shopcar from '../components/home/shopcar'
import Search from '../components/search/search'
import Login from '../components/login/login'
import Detail from '../components/detail/detail'
import Register from '../components/register/register'
import { getCookie } from '../until/decode'
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
        }


    ]
})
router.beforeEach((to, from, next) => {

    if (to.name === "shopcar" || to.name == "myperson") {
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