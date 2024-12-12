/**
 * Created by xj on 2019/4/18.
 */
const db = require('./db').config;
const unicode = require('./unicode')
var CircularJSON = require('circular-json');
const moment = require('moment');
const middleware = require('./middleware');
const ossPrivie = require('../controllers/ali-oss/privite');
//查询单个页面
var selectVideoTemplate = function (obj) {
    return new Promise(async(resolve, reject)=> {
        db.query('SELECT * FROM `' + obj.type + '` WHERE `id` LIKE "' + obj.id + '" ORDER BY id', async function (err, result) {
            if (err) {
                resolve({
                    status: 400,
                    msg: err
                });
                throw err;
            } else {
                if (result.length == 1) {
                    for (var i = 0; i < result.length; i++) {
                        result[i].createTime = moment(result[i].createTime).format('YYYY-MM-DD HH:mm:ss');
                        if (result[i].imgList != 'undefined') {
                            result[i].imgList = CircularJSON.parse(unicode.escapeOut(result[i].imgList).replace(/^\"|\"$/g, ''))
                            result[i].imgList =ossPrivie.privie(result[i].imgList);
                        }
                        if (result[i].videoList != 'undefined') {
                            result[i].videoList = CircularJSON.parse(unicode.escapeOut(result[i].videoList).replace(/^\"|\"$/g, ''))
                            result[i].videoList =ossPrivie.privie(result[i].videoList);
                        }
                        result[i].content = unicode.escapeOut(result[i].content)
                        result[i].comfrom = CircularJSON.parse(unicode.escapeOut(result[i].comfrom).replace(/^\"|\"$/g, ''))
                        result[i].pv = result[i].pv + 1
                    }
                    var res = await middleware.pv('video', result[0]);
                    if (res.status == 200) {
                        resolve({
                            status: 200,
                            data: result,
                            msg: '查询成功'
                        });
                    } else {
                        resolve(res);
                    }
                } else {
                    resolve({
                        status: 404,
                        msg: '未找到相关文章'
                    });
                }

            }
        });
    })
}
//查询所有新闻动态
var SelectAllNews = function (obj) {
    return new Promise((resolve, reject)=> {
        var from = (Number(obj.page) - 1) * 8, to = 50;
        db.query('SELECT * FROM `video` ORDER BY id DESC LIMIT ' + from + ',' + to + '', async function (err, result) {
            if (err) throw err;
            for (var i = 0; i < result.length; i++) {
                result[i].createTime = moment(result[i].createTime).format('YYYY-MM-DD HH:mm:ss');

                if (result[i].imgList != 'undefined') {
                    result[i].imgList = CircularJSON.parse(unicode.escapeOut(result[i].imgList).replace(/^\"|\"$/g, ''))
                    result[i].imgList =ossPrivie.privie(result[i].imgList);
                }

                if (result[i].videoList != 'undefined') {
                    result[i].videoList = CircularJSON.parse(unicode.escapeOut(result[i].videoList).replace(/^\"|\"$/g, ''))
                    result[i].videoList =ossPrivie.privie(result[i].videoList);
                }

                result[i].content = unicode.escapeOut(result[i].content);
                result[i].comfrom = CircularJSON.parse(unicode.escapeOut(result[i].comfrom).replace(/^\"|\"$/g, ''))
            }

            resolve({
                status: 200,
                data: result
            });
        });
    })
}
let selectById = function (id) {
    return new Promise(async(resolve, reject)=> {
        db.query('SELECT * FROM `video` WHERE `comfromId` LIKE "' + id + '" ORDER BY id', async function (err, result) {
            if (err) {
                resolve({
                    status: 400,
                    msg: err
                });
                throw err;
            } else {
                if (result.length > 0) {
                    for (var i = 0; i < result.length; i++) {
                        result[i].createTime = moment(result[i].createTime).format('YYYY-MM-DD HH:mm:ss');
                        if (result[i].imgList != 'undefined') {
                            result[i].imgList = CircularJSON.parse(unicode.escapeOut(result[i].imgList).replace(/^\"|\"$/g, ''))
                            result[i].imgList =ossPrivie.privie(result[i].imgList);
                        }
                        if (result[i].videoList != 'undefined') {
                            result[i].videoList = CircularJSON.parse(unicode.escapeOut(result[i].videoList).replace(/^\"|\"$/g, ''))
                            result[i].videoList =ossPrivie.privie(result[i].videoList);
                        }
                        result[i].content = unicode.escapeOut(result[i].content)
                        result[i].comfrom = CircularJSON.parse(unicode.escapeOut(result[i].comfrom).replace(/^\"|\"$/g, ''))
                    }
                        resolve({
                            status: 200,
                            data: result,
                            msg: '查询成功'
                        });

                } else {
                    resolve({
                        status: 404,
                        msg: '未找到相关文章'
                    });
                }

            }
        });
    })
}
module.exports = {
    selectById: selectById,
    selectVideoTemplate: selectVideoTemplate,
    SelectAllNews: SelectAllNews
}