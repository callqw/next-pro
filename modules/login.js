/**
 * Created by xj on 2019/4/11.
 */
const db = require('./db').config;
const encrypt = require('../controllers/middleware/encrypt')
const moment = require('moment')
var CircularJSON = require('circular-json');
const unicode = require('./unicode');
const address = require('address')
//根据用户查询
const login = function (obj) {
    return new Promise((resolve, reject)=> {
        db.query('SELECT * FROM `user` WHERE `user` LIKE "' + obj.user + '"', async function (err, result) {
            if (err) throw err;
            if (result.length == 0) {
                resolve({
                    status: 404,
                    err: '无此用户'
                });
            } else {
                if (result[0].pass === obj.pass) {
                    var res = await insert(obj, result[0])
                    if (res.status == 200) {
                        resolve(res);
                    } else {
                        resolve(res);
                    }
                } else {
                    resolve({
                        status: 404,
                        err: '登录信息录入错误'
                    });
                }
            }
        });
    })
}

const insert = function (obj, userData) {
    return new Promise(async(resolve, reject)=> {
        var lastVisiteTime = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
        var network = address.ip();
        var skey = await encrypt.aesEncryptiv(network + ',' + lastVisiteTime, obj.user, 'match')
        db.query('UPDATE `user` SET `lastVisiteTime` = "' + lastVisiteTime + '",`ip` = "' + network + '",`skey` = "' + skey + '" WHERE `id` = "' + userData.id + '"', function (err, result) {
            if (err) throw err;
            if (result.changedRows == 1) {
                db.query('INSERT INTO `ip` (`ip`, `userId`, `createTime`) VALUES ("' + network + '","' + userData.id + '","' + lastVisiteTime + '" )', function (err, result) {
                    if (err) throw err;
                    if (result.protocol41) {
                        resolve({
                            status: 200,
                            skey: skey,
                            err: '登录成功'
                        });
                    } else {
                        resolve({
                            status: 404,
                            err: '登录失败'
                        });
                    }
                });
            } else {
                resolve({
                    status: 404,
                    skey: 'error',
                    err: '登录失败'
                });
            }
        });
    })
}

const Skey = function (obj) {
    return new Promise((resolve, reject)=> {
        var lastVisiteTime = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
        db.query('SELECT * FROM `user` WHERE `skey` LIKE "' + obj + '"', function (err, result) {
            if (err) throw err;
            if (result.length != 0) {
                resolve({
                    status: 200,
                    data: result[0]
                });
            } else {
                resolve({
                    status: 404,
                    data: 'error'
                });
            }
        });
    })
}
module.exports = {
    login: login, Skey: Skey
}