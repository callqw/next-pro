/**
 * Created by xj on 2019/4/19.
 */
const db = require('./db').config;
const encrypt = require('../controllers/middleware/encrypt')
const moment = require('moment')
var CircularJSON = require('circular-json');
const unicode = require('./unicode');
const address = require('address');
const config = require('../config')
//根据用户查询
const map = function (obj) {
    return new Promise((resolve, reject)=> {
        var map = [{name: '首页', url: config.host,cteateTime: '2019-04-20'},
            {name: '猫舍简介',
                url:  config.host+'/aboutus'
                ,cteateTime: '2019-04-19'
            },
            {name: '待售猫咪', url: config.host+'/catsforsale',cteateTime: '2019-04-19'},
            {name: '猫咪视频',
                url:  config.host+'/video'
                ,cteateTime: '2019-04-19'
            },
            {name: '购猫须知',
                url:  config.host+'/cattoknow'
                ,cteateTime: '2019-04-19'
            },
            {name: '最新动态', url: config.host+'/news',cteateTime: '2019-04-21'}, {name: '写文章',
                url:  config.host+'/postedit'
                ,cteateTime: '2019-04-19'
            },  {name: '友链',
                url:  config.host+'/link'
                ,cteateTime: '2019-04-19'
            },{
                name: '登录',
                url: config.host+'/login',cteateTime: '2019-04-22'
            }, {
                name: '注册',
                url: config.host+'/signup',cteateTime: '2019-04-23'
            }, {
                name: '404',
                url: config.host+'/404',cteateTime: '2019-04-19'
            }];
        db.query('SELECT * FROM `catsforsalelist` ORDER BY id DESC', async function (err, result) {
            if (err) throw err;
            if (result[0] != undefined) {
                for (let i = 0; i < result.length; i++) {
                    let obj = {};
                    obj.name = result[i].title;
                    obj.url = config.host+'/catsforsalelist/' + result[i].id;
                    obj.cteateTime =  moment(result[i].createTime).format('YYYY-MM-DD');
                    map.push(obj);
                }

                db.query('SELECT * FROM `news` ORDER BY id DESC', async function (err, result) {
                    if (err) throw err;
                    if (result[0] != undefined) {
                        for (let i = 0; i < result.length; i++) {
                            let obj = {};
                            obj.name = result[i].title;
                            obj.url = config.host+'/news/' + result[i].id;
                            obj.cteateTime =  moment(result[i].createTime).format('YYYY-MM-DD');
                            map.push(obj);
                        }
                        db.query('SELECT * FROM `video` ORDER BY id DESC', async function (err, result) {
                            if (err) throw err;
                            if (result[0] != undefined) {
                                for (let i = 0; i < result.length; i++) {
                                    let obj = {};
                                    obj.name = result[i].title;
                                    obj.url = config.host+'/video/' + result[i].id;
                                    obj.cteateTime =  moment(result[i].createTime).format('YYYY-MM-DD');
                                    map.push(obj);
                                }
                                resolve({
                                    status: 200,
                                    data: map,
                                    err: 'success'
                                })
                            } else {
                                resolve({
                                    status: 404,
                                    err: 'undefined'
                                })
                            }
                        });
                    } else {
                        resolve({
                            status: 404,
                            err: 'undefined'
                        })
                    }
                });

            } else {
                resolve({
                    status: 404,
                    err: 'undefined'
                })
            }
        });
    })
}
module.exports = {
    map: map
}