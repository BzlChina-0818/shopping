module.exports = (url) => {
    const http = require('http')
    console.log('Promise')
    return new Promise((resolve, reject) => {
        const options = {
            hostname: 'm.gome.com.cn',
            port: 80,
            path: url,
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
                    // 'Content-Length': Buffer.byteLength(postData)
            }
        };
        console.log(url)

        const req = http.request(options, (res) => {

            //console.log(`状态码: ${res.statusCode}`);
            //console.log(`响应头: ${JSON.stringify(res.headers)}`);
            res.setEncoding('utf8');
            //let data 
            let str = '';
            res.on('data', (chunk) => {
                str += chunk;
                // console.log(`响应主体: ${chunk}`);
            });
            res.on('end', () => {
                // console.log('2')
                resolve(str)

                // console.log('响应中已无数据。');
            });

        });

        req.on('error', (e) => {
            reject(e.message)
                //console.error(`请求遇到问题: ${e.message}`);
        });
        req.end()

    })
}