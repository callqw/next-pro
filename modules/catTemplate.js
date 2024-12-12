/**
 * Created by xj on 2019/4/10.
 */
const db = require('./db').config;
const unicode = require('./unicode')
var CircularJSON = require('circular-json');
const moment = require('moment');
const middleware = require('./middleware');
const ossPrivie = require('../controllers/ali-oss/privite');
var SearchCatTemplate = function (obj) {
    return new Promise((resolve, reject)=> {
        db.query('SELECT * FROM `catsforsalelist` WHERE `id` LIKE "' + obj.id + '" ORDER BY id', async function (err, result) {
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
                            result[i].imgList = CircularJSON.parse(unicode.escapeOut(result[i].imgList));
                            result[i].imgList =ossPrivie.privie(result[i].imgList);
                        }
                        if (result[i].videoList != 'undefined' && result[i].videoList != '') {
                            result[i].videoList = CircularJSON.parse(unicode.escapeOut(result[i].videoList).replace(/^\"|\"$/g, ''))
                            result[i].videoList =ossPrivie.privie(result[i].videoList);
                        }
                        result[i].content = unicode.escapeOut(result[i].content)
                        result[i].pv = result[i].pv + 1
                    }
                    var res = await middleware.pv('catsforsalelist', result[0]);
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

var SelectAllCatTemplate = function (obj) {
    return new Promise((resolve, reject)=> {
        var from = (Number(obj.page) - 1) * 8, to = 50;
        db.query('SELECT * FROM `catsforsalelist` ORDER BY id DESC LIMIT ' + from + ',' + to + '', async function (err, result) {
            if (err) throw err;
            for (var i = 0; i < result.length; i++) {
                result[i].createTime = moment(result[i].createTime).format('YYYY-MM-DD HH:mm:ss');
                if (result[i].imgList != 'undefined') {
                    result[i].imgList = CircularJSON.parse(unicode.escapeOut(result[i].imgList));
                    result[i].imgList =ossPrivie.privie(result[i].imgList);
                }
                result[i].content = unicode.escapeOut(result[i].content)
            }

            resolve({
                status: 200,
                data: result
            });
        });
    })
}


var insertCatTemplate = function (obj) {
    var urlList = [{url: 'https://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/banner/xfRagdoll/hss01.jpg'}, {url: 'https://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/banner/xfRagdoll/hss02.jpg'}, {url: 'https://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/banner/xfRagdoll/hss03.jpg'}, {url: 'https://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/banner/xfRagdoll/hss04.jpg'}]
    urlList = unicode.escapein(CircularJSON.stringify(urlList));
    return new Promise((resolve, reject)=> {
        db.query('UPDATE `catsforsalelist` SET `imgList` = "' + urlList + '" WHERE `pageId` = "0"', async function (err, result) {
            if (err) throw err;
            resolve({
                state: 'CATSFORSALE_STATE.SUCCESS',
                data: result
            });
        });
    })
}

module.exports = {
    SearchCatTemplate: SearchCatTemplate,
    insertCatTemplate: insertCatTemplate,
    SelectAllCatTemplate: SelectAllCatTemplate
}