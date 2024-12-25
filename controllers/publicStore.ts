/**
 * Created by xj on 2020/9/6.
 */
import ossPrivie from '@/controllers/ali-oss/privite'
function script() {
    let scriptArr = [{
        num: '0', name: 'mui', url: 'https://yxcx.oss-cn-beijing.aliyuncs.com/mui.min.js'
    }, {
        num: '1', name: 'previewimage', url: 'https://yxcx.oss-cn-beijing.aliyuncs.com/mui.previewimage.js'
    }, {
        num: '2', name: 'mui.zoom.js', url: 'https://yxcx.oss-cn-beijing.aliyuncs.com/mui.zoom.js'
    }, {
        num: '3', name: 'lazyload', url: 'https://yxcx.oss-cn-beijing.aliyuncs.com/mui.lazyload.js'
    }, {
        num: '4', name: 'lazyload.img', url: 'https://yxcx.oss-cn-beijing.aliyuncs.com/mui.lazyload.img.js'
    }, {
        num: '5', name: 'jquery', url: 'https://yxcx.oss-cn-beijing.aliyuncs.com/jquery.min.js'
    }, {
        num: '6', name: 'bootstrap', url: 'https://yxcx.oss-cn-beijing.aliyuncs.com/bootstrap.min.css'
    }, {
        num: '7', name: 'animate', url: 'https://yxcx.oss-cn-beijing.aliyuncs.com/animate.css'
    }, {
        num: '8', name: 'bootstrap.min', url: 'https://yxcx.oss-cn-beijing.aliyuncs.com/bootstrap.min.js'
    }, {
        num: '9', name: 'wow.min', url: 'https://yxcx.oss-cn-beijing.aliyuncs.com/wow.min.js'
    }, {
        num: '10', name: 'logo2.png', url: 'https://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/banner/xfRagdoll/logo2.png'
    }, {
        num: '11', name: 'mui.min.css', url: 'https://yxcx.oss-cn-beijing.aliyuncs.com/mui.min.css'
    }, {
        num: '12', name: 'loading.gif', url: 'https://yxcx.oss-cn-beijing.aliyuncs.com/loading.gif'
    }, {
        num: '13', name: '微信', url: 'https://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/banner/xfRagdoll/1593656489178'
    }, {
        num: '14', name: '小程序', url: 'https://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/banner/xfRagdoll/1562120551580'
    }, {
        num: '15', name: 'top', url: 'https://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/banner/xfRagdoll/1593426813800'
    }, {
        num: '16', name: 'code', url: 'https://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/banner/xfRagdoll/1562061821339'
    }, {
        num: '17', name: '弹窗微信', url: 'https://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/banner/xfRagdoll/1593420957816'
    }, {
        num: '18', name: '介绍背景图', url: 'https://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/banner/xfRagdoll/1593425234662'
    }, {
        num: '19', name: 'logo', url: 'https://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/banner/xfRagdoll/logo2.png'
    }, {
        num: '20', name: 'wechat', url: 'https://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/banner/xfRagdoll/wechatLogo.png'
    }, {
        num: '21', name: '购猫须知', url: 'https://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/banner/xfRagdoll/1560828004479'
    }, {
        num: '22', name: '全国空运', url: 'https://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/banner/xfRagdoll/1560830070941'
    }, {
        num: '23', name: '联系我们', url: 'https://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/banner/xfRagdoll/1562042453187'
    }, {
        num: '24', name: '待售猫咪', url: 'https://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/banner/xfRagdoll/1560760851509'
    }, {
        num: '25', name: '关于我们', url: 'https://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/banner/xfRagdoll/1560507020628'
    }, {
        num: '26', name: '商务咨询', url: 'https://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/banner/xfRagdoll/1562907572728'
    }];
    return ossPrivie.privie(scriptArr);
}
module.exports = {
    script
}