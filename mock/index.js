var list = require('./list.json');
let userList = [{ user: "zhangsan", pwd: "123" }]
let url = require('url');
module.exports = function(app) {

    app.get('/api/list', function(req, res) {
        res.json(list);
    });


}