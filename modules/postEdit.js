/**
 * Created by xj on 2019/4/11.
 */
const db = require('./db').config;
const encrypt = require('../controllers/middleware/encrypt')
const moment = require('moment')
var CircularJSON = require('circular-json');
const unicode = require('./unicode')
const address = require('address')
const randomNum = require('./randomNum')
const baiduAutoPost = require('./baiduAutoPost');
const MapXml = require('../controllers/siteMap');
const config = require('../config');
var insertPostEdit = function (obj, ctx) {
    obj.sendDate = moment(obj.sendDate).format('YYYY-MM-DD HH:mm:ss')
    if (ctx.id != undefined) {
        var user = ctx.id;
    } else {
        var user = ctx.state.$user.data;
    }
    if (obj.sendTime == undefined) {
    } else {
        obj.sendTime = unicode.escapein(CircularJSON.stringify(obj.sendTime));
    }
    if (obj.imgList == undefined) {
    } else {
        obj.imgList = unicode.escapein(CircularJSON.stringify(obj.imgList));
    }
    if (obj.videoList == undefined) {
    } else {
        obj.comfrom = unicode.escapein(CircularJSON.stringify(obj.comfrom));
        obj.videoList = unicode.escapein(CircularJSON.stringify(obj.videoList));
    }
    obj.description = unicode.escapeindescription(obj.description);
    obj.content = unicode.escapein(obj.content);
    obj.class = unicode.escapein(obj.class);
    return new Promise(async(resolve, reject)=> {
        var lastVisiteTime = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
        var pageId = await randomNum.randomNum();
        var mysqlOption;
        switch (obj.type) {
            case 'catsforsalelist':
                mysqlOption = 'INSERT INTO `' + obj.type + '` (`title`, `description`, `keywords`,`label`, `author`, `content`, `imgList`, `videoList`, `createTime`, `userId`, `pageId`, `pv`, `class`,`age`,`saleStatus`,`catsOption`,`sendTime`,`sendDate`) VALUES ("' + obj.title + '","' + obj.description + '","' + obj.keywords + '","' + obj.label + '","' + obj.author + '","' + obj.content + '","' + obj.imgList + '", "' + obj.videoList + '", "' + lastVisiteTime + '" ,"' + user.id + '" ,"' + pageId + '" ,0 ,"' + obj.class + '","' + obj.age + '","' + obj.saleStatus + '","' + obj.catsOption + '","' + obj.sendTime + '","' + obj.sendDate + '")'
                break;
            case 'news':
                mysqlOption = 'INSERT INTO `' + obj.type + '` (`title`, `description`, `keywords`,`label`, `author`, `content`, `imgList`, `createTime`, `userId`, `pageId`, `pv`, `class`,`sendTime`,`sendDate`) VALUES ("' + obj.title + '","' + obj.description + '","' + obj.keywords + '","' + obj.label + '","' + obj.author + '","' + obj.content + '","' + obj.imgList + '","' + lastVisiteTime + '" ,"' + user.id + '" ,"' + pageId + '" ,0 ,"' + obj.class + '", "' + obj.sendTime + '", "' + obj.sendDate + '")'
                break;
            case 'news_await':
                mysqlOption = 'INSERT INTO `' + obj.type + '` (`title`, `description`, `keywords`,`label`, `author`, `content`, `imgList`, `createTime`, `userId`, `pageId`, `pv`, `class`,`sendTime`,`sendDate`) VALUES ("' + obj.title + '","' + obj.description + '","' + obj.keywords + '","' + obj.label + '","' + obj.author + '","' + obj.content + '","' + obj.imgList + '","' + lastVisiteTime + '" ,"' + user.id + '" ,"' + pageId + '" ,0 ,"' + obj.class + '", "' + obj.sendTime + '", "' + obj.sendDate + '")'
                break;
            case 'video':
                mysqlOption = 'INSERT INTO `' + obj.type + '` (`title`, `description`, `keywords`,`label`, `author`, `content`, `imgList`,`videoList`, `comfrom`, `comfromId`, `createTime`, `userId`, `pageId`, `pv`, `class`,`sendTime`,`sendDate`) VALUES ("' + obj.title + '","' + obj.description + '", "' + obj.keywords + '", "' + obj.label + '", "' + obj.author + '", "' + obj.content + '", "' + obj.imgList + '", "' + obj.videoList + '", "' + obj.comfrom + '","' + obj.comfromId + '", "' + lastVisiteTime + '" , "' + user.id + '" , "' + pageId + '", 0 , "' + obj.class + '", "' + obj.sendTime + '", "' + obj.sendDate + '")'
                break;
        }
        db.query(mysqlOption, async function (err, result) {
            if (err) {
                resolve({
                    status: 404,
                    msg: '发布失败:(' + err + ')'
                });
                throw err;
                return false;
            } else {
                if (result.protocol41) {
                    var urls = config.host + '/' + obj.type + '/' + result.insertId;
                    let baiduStatus = {
                        status: 404,
                        msg: '失败（百度推送）'
                    };
                    let mapXmlStatus = {
                        status: 404,
                        msg: '失败（站点地图）'
                    };
                    let baidu =  '等待发送中';   //把文章发送给百度自动推送

                    if (obj.type == 'news_await') {
                    } else {
                         baidu = config.isdev ? await baiduAutoPost.baiduAutoPost(urls) : '';   //把文章发送给百度自动推送
                         // baidu =  '';   //把文章发送给百度自动推送
                    }
                    let mapXml = await MapXml.mapXml(ctx, 'postEdit');//自动生成站点地图

                    if (baidu.status == 200 || mapXml.status == 200) {
                        baiduStatus = baidu
                        mapXmlStatus = mapXml
                    }
                    resolve({
                        status: 200,
                        data: {
                            id: result.insertId,
                            url: urls,
                            title: obj.title,
                            baidu: baiduStatus,
                            mapxml: mapXmlStatus
                        },
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

const deletePostEdit = async function (obj, id) {
    return new Promise(async(resolve, reject)=> {
        db.query('DELETE FROM `' + obj.type + '` WHERE `' + obj.type + '` . `id` = "' + id + '"', function (err, result) {
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

const selectPostEdit = function (obj) {
    return new Promise(async(resolve, reject)=> {
        db.query('SELECT * FROM `' + obj.type + '` ORDER BY id DESC LIMIT 0,1000', function (err, result) {
            if (err) throw err;
            if (result.length != 0) {
                resolve({
                    state: 200,
                    data: result,
                    msg: 'success'
                });
            } else {
                resolve({
                    state: 404,
                    msg: '未查询到相关数据'
                });
            }
        });
    })
}
module.exports = {
    insertPostEdit: insertPostEdit, deletePostEdit: deletePostEdit, selectPostEdit: selectPostEdit
}