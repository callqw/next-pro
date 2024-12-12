/**
 * Created by xj on 2019/4/19.
 */
const db = require('./db').config;
const unicode = require('./unicode')
var CircularJSON = require('circular-json');
const moment = require('moment');
var countPv = function (table,obj) {
    return new Promise(async(resolve, reject)=> {
        db.query('UPDATE `'+table+'` SET `pv` = "' + obj.pv + '" WHERE `pageId` = "'+obj.pageId+'"', async function (err, result) {
            if (err) throw err;
            if(result.changedRows ==1){
                resolve({
                    status: 200,
                    msg: 'pv++成功'
                });
            }else {
                resolve({
                    status: 404,
                    msg: 'pv++失败'
                });
            }

        });
    })
}
module.exports = {
    pv: countPv
}