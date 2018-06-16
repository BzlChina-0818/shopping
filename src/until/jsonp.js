function jsonp(url, callbackName) {
    return new Promise((resolve, reject) => {
        window[callbackName] = (data) => {
            resolve(data)
        }

        let script = document.createElement('script');
        script.src = url
        document.body.appendChild(script)

    })
}
export default jsonp