/**
 * Created by xj on 2019/4/11.
 */
const db = require('@/modules/db').config;
// const encrypt = require('../controllers/middleware/encrypt')
const moment = require('moment')
var CircularJSON = require('circular-json');
const unicode = require('./unicode')
const address = require('address')
const randomNum = require('./randomNum')
const config = require('../config');

var linkInsert = function (obj, ctx) {
    const user = ctx.state.$user.data;
    return new Promise(async (resolve, reject) => {
        var lastVisiteTime = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
        db.query('INSERT INTO `link` (`userId`, `linkName`, `linkUrl`, `createTime`) VALUES ("' + user.id + '","' + obj.linkName + '","' + obj.linkUrl + '","' + lastVisiteTime + '")', function (err, result) {
            if (err) {
                resolve({
                    status: 404,
                    msg: '发布失败:(' + err + ')'
                });
                throw err;
                return false;
            } else {
                if (result.protocol41) {
                    resolve({
                        status: 200,
                        msg: '发布成功'
                    });
                } else {
                    resolve({
                        status: 404,
                        msg: '发布失败'
                    });
                }
            }
        });


    })
}

const linkSelect = function () {

    return new Promise(async (resolve, reject) => {
        const connection = await db.getConnection();
       const [rows,fields] =  await connection.query('SELECT * FROM `link` ORDER BY id DESC');
       console.log('查询数据',rows);
       
        if (rows.length != 0) {
            resolve({
                status: 200,
                data: rows,
                msg: '友链查询成功'
            });
        } else {
            resolve({
                status: 404,
                msg: '友链查询错误'
            });
        }
    })
}
const linkDel = function (ctx, obj) {
    const user = ctx.state.$user.data;
    const id = ctx.request.body.id;
    return new Promise(async (resolve, reject) => {
        db.query('DELETE FROM `link` WHERE `link` . `id` = "' + id + '"', function (err, result) {
            if (err) throw err;
            if (result.protocol41) {
                resolve({
                    status: 200,
                    msg: '删除成功'
                });
            } else {
                resolve({
                    status: 404,
                    msg: '删除失败'
                });
            }
        });
    })
}
module.exports = {
    linkInsert: linkInsert, linkSelect: linkSelect, linkDel: linkDel
}