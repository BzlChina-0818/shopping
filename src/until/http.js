import axios from 'axios'



let instance = axios.create({

    // headers: {
    //     "Access-Control-Allow-Origin": "*"
    //         // "Access-Control-Request-Headers": "content-type"
    // }

    // baseURL: process.env.NODE_ENV == "development" ? 'http://localhost:3200' : "http://mjd.com"

})

instance.interceptors.request.use((config) => {


    return config
}, () => {
    return Promise.reject(err)
})
instance.interceptors.response.use((response) => {

    if (response.status === 200) {

        return response.data
    }


}, (err) => {
    return Promise.reject(err)
})
export { instance }
let httpPlugin = {
    install(Vue) {
        Object.defineProperty(Vue.prototype, '$http', { value: instance })
    }
}
export default httpPlugin