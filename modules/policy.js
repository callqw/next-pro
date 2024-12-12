/**
 * Created by xj on 2019/4/14.
 */
const db = require('./db').config;
const encrypt = require('../controllers/middleware/encrypt')
const moment = require('moment')
var CircularJSON = require('circular-json');
const unicode = require('./unicode')
const address = require('address')
var insertPolicy = function (imgMsg, obj) {
    return new Promise(async(resolve, reject)=> {
        var lastVisiteTime = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
        imgMsg.imgUrl = unicode.escapein(CircularJSON.stringify(imgMsg.imgUrl));
        db.query('INSERT INTO `imglist` (`userId`, `createTime`, `name`, `imgUrl`, `size`) VALUES ("' + obj.data.id + '","' + lastVisiteTime + '","' + imgMsg.name + '","' + imgMsg.imgUrl + '","' + imgMsg.size + '" )', function (err, result) {
            if (err) throw err;
            if (result.protocol41) {
                resolve({
                    status: 200,
                    err: '上传成功'
                });
            } else {
                resolve({
                    status: 404,
                    err: '上传失败'
                });
            }
        });


    })
}
module.exports = {
    insertPolicy: insertPolicy
}