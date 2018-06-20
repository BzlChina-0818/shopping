import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import { instance } from '../until/http'
import router from '../router/index'
import { getCookie } from '../until/decode'
let store = new Vuex.Store({
    state: {
        capotorlist: {

        },
        shoplist: [

        ]

    },
    mutations: {
        updatalist(state, data) {

            let newData = {...state.capotorlist }
            newData[data.id] = data.data.secondLevelCategories

            state.capotorlist = newData
            console.log(state.capotorlist)
        },
        upshoplist(state, data) {
            state.shoplist = data
        }
    },
    actions: {
        fetchList({ state, commit }, playload) {
            //onsole.log(state.capotorlist)
            if (!state.capotorlist[playload]) {
                instance.get(`http://localhost:3200/classify?cid=${playload}`).then((res) => {
                    commit('updatalist', {
                        id: playload,
                        data: res
                    })

                })
            }
        },
        fetchShopList({ state, commit }, playload) {
            instance.post('http://localhost:3200/api/goodlist', { token: getCookie('token') }).then((res) => {
                if (res.code === 10001) {
                    commit('upshoplist', res.info)

                    // console.log('1')
                } else {
                    router.push({ name: "login", query: { url: "shopcar" } })
                }
                // console.log(res)
            })
        }
    }

})
export default store