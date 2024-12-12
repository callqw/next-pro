/**
 * Created by xj on 2019/4/11.
 */
const db = require('./db').config;
const encrypt = require('../controllers/middleware/encrypt')
const moment = require('moment')
var CircularJSON = require('circular-json');
const unicode = require('./unicode')
const address = require('address')
var insert = function (obj) {
    return new Promise(async(resolve, reject)=> {
        var haveUser = await signUpSelect(obj);  //查重
        var lastVisiteTime = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
        var network = address.ip();
        var skey = await encrypt.aesEncryptiv(network + ',' + lastVisiteTime, obj.user, 'match')
        if (haveUser.state === 200) {
            db.query('INSERT INTO `user` (`user`, `pass`, `createTime`, `lastVisiteTime`, `ip`, `skey`) VALUES ("' + obj.user + '","' + obj.pass + '","' + lastVisiteTime + '","' + lastVisiteTime + '","' + network + '","' + skey + '" )', function (err, result) {
                if (err) throw err;
                console.log(result,'reeere')
                if (result.protocol41) {
                    resolve({
                        state: 200,
                        msg: '注册成功,请登录'
                    });
                } else {
                    resolve({
                        state: 404,
                        msg: '注册失败'
                    });
                }
            });
        } else {
            resolve({
                state: 404,
                msg: haveUser.msg
            });
        }

    })
}

const signUpSelect = function (obj) {
    return new Promise(async(resolve, reject)=> {
        db.query('SELECT * FROM `user` WHERE user LIKE "' + obj.user + '"', function (err, result) {
            if (err) throw err;
            if (result.length == 0) {
                resolve({
                    state: 200,
                    msg: 'success'
                });
            } else {
                resolve({
                    state: 404,
                    msg: '帐号已存在'
                });
            }
        });
    })
}
module.exports = {
    insert: insert
}