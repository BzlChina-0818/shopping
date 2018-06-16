import Vue from 'vue'
import App from './App'
import router from './router/index'
import './assets/resect.css'
import './assets/fonts/iconfont.css'
import axios from 'axios'
import http from './until/http'
import lazyload from 'vue-lazyload'
import store from './store/index'
Vue.use(http)
Vue.use(lazyload, {
    loading: '/src/assets/abc.jpg',
})

new Vue({
    el: '#app',
    template: "<App />",
    components: {
        App
    },
    store,
    router
})