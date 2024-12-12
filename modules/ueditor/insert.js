const db = require('../db').config
var moment = require('moment');
var randomNum = require('../randomNum');
var createTime = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
var CircularJSON = require('circular-json');
var insert = function (ob, skey) {
    skey = skey.split('infi=')[1] //获取cookie里infi的值
    return new Promise((resolve, reject)=> {
        db.query('SELECT * FROM `user` WHERE `skey` LIKE "' + skey + '"', function (err, result) {
            if (err) throw err;
            db.query('INSERT INTO `file` ( `title`, `type`, `guid`, `size`, `createTime`, `userId`) VALUES ("' + ob.title + '", "' + ob.type + '", "' + ob.guid + '", "' + ob.size + '", "' + ob.createTime + '", "' + result[0].id + '")', function (err, result) {
                if (err) throw err;
                resolve(result);
            });
        });

    })
}
const unicode = require('../unicode');
const selectImgList = function (ctx) {
    var UserId = ctx.state.$user
    return new Promise(function (resolve, reject) {
        db.query('SELECT * FROM `imglist` WHERE `userId` LIKE "' + UserId.data.id + '"', function (err, result) {
            if (err) throw err;
            for (var i = 0; i < result.length; i++) {
                result[i].url = CircularJSON.parse(unicode.escapeOut(result[i].imgUrl))
            }
            resolve(result);
        });
    })
}
module.exports = {insert: insert, selectImgList: selectImgList}