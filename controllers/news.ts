/**
 * Created by xj on 2019/3/24.
 */
const fs = require('mz').fs;
const path = require('path');
const moment = require('moment');
var CircularJSON = require('circular-json');
const news = require('@/modules/news');
const unicode = require('@/modules/unicode');
const Link = require('@/modules/link');
// const err = require('./404');

export const newsHtml = function (ctx) {
    return new Promise(async (resolve, reject) => {


        var dateVal = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
        var page = ctx.query;
        if (JSON.stringify(page) == '{}' || page.page == '0') {
            page.page = 1;
        }
        var res = await news.SelectAllNews(page);

        if (res.data[0] != undefined) {
            res = res.data;
            let data = {
                seo: {
                    title: '最新动态-幸福布偶猫舍',
                    keywords: '最新发布|布偶猫最新发布',
                    description: '幸福布偶猫舍最新发布。。。',
                    author: '幸福布偶猫舍'
                },
                date: {
                    val: dateVal
                },
                // login: ctx.cookies.get('login'),
                data: res,
                link: await Link.linkSelect(ctx)
            }

            resolve(data)

        } else {
            resolve({ err: 1, msg: "没查询到数据" })
        }
    })


}