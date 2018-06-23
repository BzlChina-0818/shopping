let fs = require('fs')
let express = require('express')
let httpReq = require('./request.js')
let app = express()
let bodyParse = require('body-parser')
let jwt = require('jsonwebtoken')
app.use(bodyParse.json())
app.all("*", function(req, res, next) {
    // Access-Control-Allow-Headers
    res.header({
        //  "Access-Control-Allow-Headers"
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-type",
        "Accept-Content": "application/json,plan-text"
    })
    next()
})
app.get('/index/recommend', function(req, res, next) {

    let page = req.query.page

    if (page > 4) {

    } else {

        let list = fs.readFileSync(`./list${page}.json`, 'utf-8')
        res.json(list)
        next()
    }

    //fs.readFileSync(`./list${page}.json`,'utf-8')

})
let url = require('url');
app.get('/classify', function(req, res, next) {
    console.log(req.url)

    let cid = url.parse(req.url, true).query.cid
    console.log(url.parse(req.url, true))
        // console.log(req.body)

    httpReq(`/index.php?ctl=goods_class&act=ajaxGetClassList&cid=${cid}`).then((result) => {

        res.end(result)
        next()
    })



})
app.post('/api/register', function(req, res, next) {
    console.log('1')
    let userlist = JSON.parse(fs.readFileSync('./userlist.json', 'utf-8'))
    let state = userlist.every((v) => {
        console.log(v.username, req.body.username)
        if (v.username == req.body.username) {
            return false
        } else {
            return true
        }
    })
    console.log(state)
    if (state) {
        userlist.push(req.body)
        res.json({
            msg: "注册成功",
            code: 1
        })
    } else {
        res.json({
            msg: "注册失败",
            code: 2
        })
    }

    fs.writeFileSync('./userlist.json', JSON.stringify(userlist))



    next()
})

app.post('/api/login', function(req, res, next) {
    let query = req.body
        // console.log(req.user, req.pwd)
    let userList = JSON.parse(fs.readFileSync('./userlist.json', 'utf-8'))
    console.log(query)
    let state = userList.some((i, index) => {
        if (i.username == query.username && i.password == query.password) {
            return true
        } else {
            return false
        }
    })
    if (state) {
        res.send({ code: 0, msg: "登录成功", token: jwt.sign(query, 'bzl', { expiresIn: 60 * 60 }) })
    } else {
        res.send({ code: 1, msg: "登录失败" })
    }
    next()
})
app.post('/api/goodlist', function(req, res, next) {
    jwt.verify(req.body.token, 'bzl', function(err, decode) {
        console.log(decode)
        if (err) {
            console.log(err)
            res.send({ code: 10000, msg: "超时" })
        } else {
            let shopinfo = JSON.parse(fs.readFileSync('./shopinfo.json', 'utf-8'));
            res.send({ code: 10001, info: shopinfo[decode.username] })
                // res.send({ code: 10001, msg: "没有超时" })
        }
    })

    next()
})
app.post('/api/shopinfo', function(req, res, next) {
    let info = req.body.info;
    //console.log(info);
    console.log(req.body.token)
    let token = jwt.verify(req.body.token, 'bzl', function(err, decode) {
        if (err) {
            res.send({ code: 0 })
        } else {
            let shopinfo = JSON.parse(fs.readFileSync('./shopinfo.json', 'utf-8'));
            console.log(decode)
            let o = {
                ...info,
                count: 1
            }

            if (shopinfo[decode.username]) {
                let flag = shopinfo[decode.username].some((item, index) => {
                        if (item.wname === info.wname) {
                            ++item.count
                            return true
                        } else {
                            return false
                        }
                    })
                    // console.log(flag)
                if (!flag) {
                    shopinfo[decode.username].push(o)
                }

            } else {
                shopinfo[decode.username] = [o]
            }
            fs.writeFileSync('./shopinfo.json', JSON.stringify(shopinfo))

            res.send({ msg: shopinfo })
        }
    })

    //  console.log(info)

    next()
        //console.log(info)
})
app.post('/api/add', function(req, res, next) {
    let info = req.body;
    //console.log(info);
    console.log(req.body.token)
    let token = jwt.verify(req.body.token, 'bzl', function(err, decode) {
        if (err) {
            res.send({ code: 0 })
        } else {
            let shopinfo = JSON.parse(fs.readFileSync('./shopinfo.json', 'utf-8'));

            console.log('222')

            let shoplist = shopinfo[decode.username].map((item, index) => {
                if (info.type == "add") {
                    if (item.wareId === info.id) {
                        ++item.count
                        return item
                    } else {
                        return item
                    }

                } else {
                    if (item.wareId === info.id) {
                        --item.count
                        return item
                    } else {
                        return item
                    }
                }

            })
            console.log(shoplist)
            shopinfo[decode.username] = shoplist
                // console.log(flag)


            fs.writeFileSync('./shopinfo.json', JSON.stringify(shopinfo))

            res.send({ msg: shopinfo[decode.username], code: 1 })
        }
    })

    next()
})
app.post('/api/deleinfo', function(req, res, next) {
    let info = req.body;
    //console.log(info);
    // console.log(req.body.token)
    let token = jwt.verify(req.body.token, 'bzl', function(err, decode) {
        if (err) {
            res.send({ code: 0 })
        } else {
            let shopinfo = JSON.parse(fs.readFileSync('./shopinfo.json', 'utf-8'));
            let arr = info.id;
            let newArr = []
            let shopinfoArr = shopinfo[decode.username]
            shopinfoArr.forEach((item, index) => {
                newArr.push(item.wareId)
            })
            newArr.forEach((item, index) => {
                arr.forEach((v, ind) => {
                    let con = newArr.indexOf(v)
                    console.log(con)
                    if (con > -1) {
                        shopinfoArr.splice(con, 1)
                        newArr.splice(con, 1)
                    }
                })
            })

            console.log(shopinfoArr.length)
                // console.log(arr)
                // shopinfo[decode.username].forEach((item, index) => {
                //         arr.forEach((v, ind) => {
                //             if (item.wareId === v) {
                //                 newArr.push(item)
                //             }
                //         })
                //     })
                //     //console.log(arr)
                // console.log(newArr.length)

            // shopinfo[decode.username].forEach((item, index) => {
            //         console.log(item.wareId)
            //         newArr.forEach((v, ind) => {
            //             // let spliceInd;
            //             if (item.wareId == v.wareId) {
            //                 // console.log(true)
            //                 // spliceInd = index
            //                 //console.log(spliceInd)
            //                 shopinfo[decode.username].splice(index, 1)
            //             }
            //             // let con = shopinfo[decode.username].indexOf(v)



            //         })
            //     })
            // console.log(shopinfo[decode.username].length)


            // let shoplist = shopinfo[decode.username].map((item, index) => {

            //     if (item.wareId === info.id) {
            //         ++item.count
            //         return item
            //     } else {
            //         return item
            //     }

            // })


            //nsole.log(shoplist)
            // shopinfo[decode.username] = shoplist
            // console.log(flag)


            fs.writeFileSync('./shopinfo.json', JSON.stringify(shopinfo))
            res.send({ msg: "成功" })

            //res.send({ msg: shopinfo[decode.username], code: 1 })
        }
    })
    next()
})
app.post('/api/adress', function(req, res, next) {
    let info = req.body;
    //console.log(info);

    let token = jwt.verify(req.body.token, 'bzl', function(err, decode) {
        if (err) {
            res.send({ code: 0 })
        } else {
            let adress = JSON.parse(fs.readFileSync('./adress.json', 'utf-8'));
            console.log('1')

            let o = {
                name: req.body.username,
                phone: req.body.phone,
                address: req.body.adress,
                city: req.body.city,
                citys: req.body.citys,
                area: req.body.area,
            }


            if (adress[decode.username]) {
                adress[decode.username].push(o)


            } else {
                adress[decode.username] = [o]
            }
            fs.writeFileSync('./adress.json', JSON.stringify(adress))

            res.send({ msg: adress })
                //  res.send({ msg: "成功" })
        }
    })
    next()
})
app.post('/api/info', function(req, res, next) {
    let token = jwt.verify(req.body.token, 'bzl', function(err, decode) {
        if (err) {
            res.send({ code: 0 })
        } else {
            let adress = JSON.parse(fs.readFileSync('./adress.json', 'utf-8'));
            adressinfo = adress[decode.username]
            console.log(decode.username)
            console.log(adressinfo)
            res.send({ msg: adressinfo })
        }

    })

    next()
})
app.listen(3200, function() {
    console.log('我是端口3000')
})