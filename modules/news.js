/**
 * Created by xj on 2019/4/18.
 */
const db = require('./db').config;
const unicode = require('./unicode')
var CircularJSON = require('circular-json');
const moment = require('moment');
// const middleware = require('./middleware');
const ossPrivie = require('../controllers/ali-oss/privite');
//查询单个页面
var selectNewsTemplate = function (obj) {
    return new Promise(async (resolve, reject) => {
        db.query('SELECT * FROM `' + obj.type + '` WHERE `id` LIKE "' + obj.id + '" ORDER BY id', async function (err, result) {
            if (err) {
                resolve({
                    status: 400,
                    msg: err
                });
                throw err;
            } else {
                if (result.length == 1) {
                    console.log('aaaa')
                    for (var i = 0; i < result.length; i++) {
                        result[i].createTime = moment(result[i].createTime).format('YYYY-MM-DD HH:mm:ss');
                        result[i].imgList = unicode.escapeOut(result[i].imgList).replace(/^\"|\"$/g, '')
                        if (result[i].imgList != 'undefined') {
                            result[i].imgList = CircularJSON.parse(result[i].imgList)
                            result[i].imgList = ossPrivie.privie(result[i].imgList);
                        }
                        result[i].content = unicode.escapeOut(result[i].content)
                        result[i].pv = result[i].pv + 1
                        let newContent = result[i].content.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/gi, function (match, capture) {
                            let arr = [{
                                url: capture
                            }];
                            let str = '<img src="' + ossPrivie.privie(arr)[0].url + '" alt="" />'
                            return str;
                        })
                        result[i].content = newContent;
                    }
                    // var res = await middleware.pv('news', result[0]);
                    // if (res.status == 200) {
                    //     resolve({
                    //         status: 200,
                    //         data: result,
                    //         msg: '查询成功'
                    //     });
                    // } else {
                    //     resolve(res);
                    // }
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
    return new Promise((resolve, reject) => {
        var from = (Number(obj.page) - 1) * 8, to = 50;
        db.query('SELECT * FROM `news` ORDER BY id DESC LIMIT ' + from + ',' + to + '', async function (err, result) {
            if (err) throw err;
            for (var i = 0; i < result.length; i++) {
                result[i].createTime = moment(result[i].createTime).format('YYYY-MM-DD HH:mm:ss');
                result[i].imgList = unicode.escapeOut(result[i].imgList).replace(/^\"|\"$/g, '')
                if (result[i].imgList != 'undefined') {
                    result[i].imgList = CircularJSON.parse(result[i].imgList);
                    result[i].imgList = ossPrivie.privie(result[i].imgList);
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
var insertNewsTemplate = function (obj) {
    var urlList = [{ url: 'https://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/banner/xfRagdoll/hss01.jpg' }, { url: 'https://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/banner/xfRagdoll/hss02.jpg' }, { url: 'https://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/banner/xfRagdoll/hss03.jpg' }, { url: 'https://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/banner/xfRagdoll/hss04.jpg' }]
    urlList = unicode.escapein(CircularJSON.stringify(urlList));
    return new Promise((resolve, reject) => {
        db.query('UPDATE `news` SET `imgList` = "' + urlList + '" WHERE `pageId` = "0"', async function (err, result) {
            if (err) throw err;
            resolve({
                state: 'CATSFORSALE_STATE.SUCCESS',
                data: result
            });
        });
    })
}
module.exports = {
    selectNewsTemplate: selectNewsTemplate,
    insertNewsTemplate: insertNewsTemplate,
    SelectAllNews: SelectAllNews
}