/**
 * Created by xj on 2017/7/17.
 */
"use strict";
var path = require("path");
var fs = require('fs');
const config = require('./config')
var multer = require('koa-multer');
var img_type = '.jpg .png .gif .ico .bmp .jpeg';
var video_type = '.flv .swf .mkv .avi .rm .rmvb .mpeg .mpg .ogg .ogv .mov .wmv .mp4 .webm .mp3 .wav .mid';
var img_path = '/ueditor/upload/img';
var files_path = '/ueditor/upload/file';
var video_path = '/ueditor/upload/video';
var scrawl_path = '/ueditor/upload/scrawl';
var moment = require('moment');
var createTime = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
const insertUeditor = require('../../modules/ueditor/insert')

var up_list = async function (ctx, next) {            //return options list
    if (ctx.query.action === 'config') {
        ctx.type = 'application/json';
        ctx.body = config
    } else if (ctx.query.action === 'listimage') {
        ctx.body = await ue_pic_list(ctx, ctx.query.start);
    } else if (ctx.query.action === 'listfile') {
        ctx.body = await ue_pic_list(ctx, ctx.query.start);
    }
}
var post_ue = async function (ctx, next) {                //return img or video or files  multer.API

    if (ctx.query.action === 'uploadimage' || ctx.query.action === 'uploadfile' || ctx.query.action === 'uploadvideo') {
        var file = ctx.req.files[0];
        var file_path;
        if (ctx.query.action === 'uploadimage') {
            file_path = path.join(img_path, file.filename);
            console.log('上传图片成功，并返回')
        } else if (ctx.query.action === 'uploadvideo') {
            file_path = path.join(video_path, file.filename);
            console.log('上传视频成功，并返回')
        } else if (ctx.query.action === 'uploadfile') {
            file_path = path.join(files_path, file.filename);
            console.log('上传文件成功，并返回')
        }
        var regeXP = /\\/g;
        var regefile = file_path.replace(regeXP, '/');

        var filename = file.originalname.split('.')[0];
        var ob = {
            'title': filename,
            'type': file.mimetype,
            'guid': regefile,
            'size': file.size,
            'createTime': createTime
        }
        var files = await insertUeditor.insert(ob, ctx);
        if (files.affectedRows > 0) {
            ctx.body = {
                'url': regefile,
                'title': file.filename,
                'original': file.originalname,
                'state': 'SUCCESS'
            }
        } else {
            ctx.body = {
                'state': 'FAIL'
            };
        }
    } else {
        ctx.body = {
            'state': 'FAIL'
        };
    }
}
const policy = require('../policy');
var storage = multer.diskStorage({          //multer options
    destination: async function (req, file, cb) {
        var tmpList = file.originalname.split('.');
        var _filetype = tmpList[tmpList.length - 1];
        if (img_type.indexOf(_filetype.toLowerCase()) >= 0) {
            // var result = await policy.policy();
            // let param = new FormData() // 创建form对象
            // param.append('name', _filetype) // 通过append向form对象添加数据
            // param.append('key', result.startsWith + result.saveName)
            // param.append('policy', result.policy)
            // param.append('OSSAccessKeyId', result.OSSAccessKeyId)
            // param.append('success_action_status', 200)
            // param.append('signature', result.signature)
            // param.append('file', file, _filetype) // 通过append向form对象添加数据
            // console.log(param.get('file')) // FormData私有类对象，访问不到，可以通过get判断值是否传进去
            // let config = {
            //     headers: {'Content-Type': 'multipart/form-data'}
            // }


            cb(null, path.join(__dirname, '../../public' + img_path))
            // await policy.policy()
        } else if (video_type.indexOf(_filetype.toLowerCase()) >= 0) {
            cb(null, path.join(__dirname, '../../public' + video_path))
        }
        else {
            cb(null, path.join(__dirname, '../../public' + files_path))
        }
    },
    filename: function (req, file, cb) {
        var temp = file.originalname.split('.');
        var _temp = temp[temp.length - 1];
        var filename = temp[temp.length - 2];
        cb(null, Date.now() + '.' + _temp)
    }
});
const selectImgList = require('../../modules/ueditor/insert');
function ue_pic_list(ctx, start) {                  //resolve listimage and listfiles
    console.log(start)
    return new Promise(async(resolve, reject)=> {
        if (reject) {
            console.log(reject);
        }
        var str = '';
        var i = 0;
        var list = [];
        var res = await selectImgList.selectImgList(ctx)
        resolve({
            "state": "SUCCESS",
            "list": res,
            "start": start,
            "total": res.length
        });

    })
}
module.exports = {up_list: up_list, post_ue: post_ue, storage: storage,};
