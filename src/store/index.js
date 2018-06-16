import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import { instance } from '../until/http'
let store = new Vuex.Store({
    state: {
        capotorlist: {

        }
    },
    mutations: {
        updatalist(state, data) {

            let newData = {...state.capotorlist }
            newData[data.id] = data.data.secondLevelCategories

            state.capotorlist = newData
            console.log(state.capotorlist)

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




        }
    }

})
export default store