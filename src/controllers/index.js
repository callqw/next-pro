/**
 * Created by xj on 2019/3/24.
 */
const fs = require('mz').fs;
const path = require('path');
const moment = require('moment');
const Link = require('../modules/link');
const News = require('../modules/news')
const CatTemplate = require('../modules/catTemplate');
const video = require('../modules/video');
const ossPrivie = require('./ali-oss/privite');
const circular = require('circular-json');

var indexHtml = async function (ctx, next) {
    let title = [{
        name: '种公展示', url: 'https://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/banner/xfRagdoll/1592404359854'
    }, {
        name: '种母展示', url: 'https://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/banner/xfRagdoll/1592404683114'
    }, {
        name: '幼猫展示', url: 'https://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/banner/xfRagdoll/1593230110365'
    }, {
        name: '猫舍展示', url: 'https://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/banner/xfRagdoll/1592405156738'
    }]

    // 种公
    let zhonggong = [
        { address: 'qilin', name: '麒麟', url: 'https://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/banner/xfRagdoll/1592386939610' },
        { address: 'tanke', name: '坦克', url: 'https://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/banner/xfRagdoll/1592403667230' },
        { address: 'daxiong', name: '大熊', url: 'https://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/banner/xfRagdoll/1592385660231' },
        { address: 'qilin', name: '麒麟', url: 'https://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/banner/xfRagdoll/1593594334996' },
    ];


    //种母
    let zhongmu = [
        { address: 'keke', name: '可可', url: 'https://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/banner/xfRagdoll/1592403703894' },
        { address: 'lina', name: '丽娜', url: 'https://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/banner/xfRagdoll/1592403703900' },
        { address: 'aoli', name: '奥莉', url: 'https://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/banner/xfRagdoll/1593227549330' },
        { address: 'aisha', name: '爱莎', url: 'https://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/banner/xfRagdoll/1592540488706' },
        { address: 'lisha', name: '丽莎', url: 'https://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/banner/xfRagdoll/1592542283224' },
        { address: 'mifei', name: '米菲', url: 'https://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/banner/xfRagdoll/1593529379927' },
        { address: 'tuanrong', name: '团绒', url: 'https://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/banner/xfRagdoll/1593506714100' },
        { address: 'xiaoheimei', name: '小黑妹', url: 'https://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/banner/xfRagdoll/1593506817846' },
        { address: 'mianhuatang', name: '棉花糖', url: 'https://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/banner/xfRagdoll/1593227781583' },
        { address: 'beila', name: '贝拉', url: 'https://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/banner/xfRagdoll/1593506942603' },
    ];

    //幼猫
    let youmao = [
        { address: 'xiaomi', name: '小米', url: 'https://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/banner/xfRagdoll/1593228454997' },
        { address: 'yueyue', name: '月月', url: 'https://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/banner/xfRagdoll/1593229199069' },
        { address: 'bubu', name: '布布', url: 'https://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/banner/xfRagdoll/1593229028159' },
        { address: 'doudou', name: '豆豆', url: 'https://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/banner/xfRagdoll/1593229035186' },
    ];

    //猫舍展示
    let maoshezhanshi = [
        { address: 'keting', name: '客厅', url: 'https://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/banner/xfRagdoll/1592457907080' },
        { address: 'beilaaoli', name: '贝拉奥利', url: 'https://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/banner/xfRagdoll/1592474348205' },
        { address: 'tongtianzhu', name: '通天柱', url: 'https://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/banner/xfRagdoll/1592475000034' },
        { address: 'xiaoligui', name: '小立柜', url: 'https://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/banner/xfRagdoll/1592480006643' },
        { address: 'qilinfangjian', name: '麒麟房间', url: 'https://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/banner/xfRagdoll/1592479875782' },
        { address: 'mianhuatangfangjian', name: '棉花糖房间', url: 'https://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/banner/xfRagdoll/1592479875775' },
        { address: 'kekelinafangjian', name: '可可丽娜房间', url: 'https://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/banner/xfRagdoll/1592480285110' },
        { address: 'qilinfangjian', name: '麒麟房间紫外线杀菌', url: 'https://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/banner/xfRagdoll/1592482112134' },
        { address: 'beila', name: '客厅贝拉', url: 'https://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/banner/xfRagdoll/1593593775149' },
    ];
    let script = require('./publicStore');
    script = script.script();
    title = ossPrivie.privie(title);
    zhonggong = ossPrivie.privie(zhonggong);
    zhongmu = ossPrivie.privie(zhongmu);
    youmao = ossPrivie.privie(youmao);
    maoshezhanshi = ossPrivie.privie(maoshezhanshi);
    var login = ctx.cookies.get('login');
    var dateVal = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
    let data = {
        seo: {
            title: '[幸福布偶猫舍]-纯种布偶猫喂养知识分享',
            keywords: '纯种布偶猫,海双布偶猫,顶级布偶猫舍,布偶猫推荐,布偶猫价格,成都布偶猫舍,布偶猫哪家靠谱,哪里可以买到布偶猫',
            description: '幸福布偶猫舍于2015年开始创立，坐落于美丽的天府之国——成都，为家庭式猫舍。专注繁育纯种的布偶猫！美国CFA&FIFE注册。。。',
            author: '幸福布偶猫舍'
        },
        login: login,
        date: {
            val: dateVal
        },
        link: await Link.linkSelect(ctx),
        news: await News.SelectAllNews({ page: 1 }),
        awaitSale: await CatTemplate.SelectAllCatTemplate({ page: 1 }),
        video: await video.SelectAllNews({ page: 1 }),
        title: title,
        zhonggong: circular.stringify(zhonggong),
        zhongmu: circular.stringify(zhongmu),
        youmao: circular.stringify(youmao),
        maoshezhanshi: circular.stringify(maoshezhanshi),
        script: script
    }
    switch (ctx.header.wx) {
        case 'wx':
            ctx.body = data;
            break
        default:
            await ctx.render('index', data);
    }

}
module.exports = {
    indexHtml: indexHtml
}