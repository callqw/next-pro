/**
 * Created by xj on 2019/4/30.
 */
const http = require('http');
//需要推送的网站链接
var baiduAutoPost = function (txtUrl) {
    return new Promise((resolve, reject)=> {
        //对应配置post推送的接口说明
        var options = {
            host: "data.zz.baidu.com",
            path: "/urls?site=https://www.xfragdoll.com&token=cBF6IoaGJLbPYxtu",//接口的调用地址
            method: "post",
            "User-Agent": "curl/7.12.1",
            headers: {
                "Content-Type": "text/plain",
                "Content-Length": txtUrl.length
            }
        };
        var req = http.request(options, function (res) {
            res.setEncoding("utf8");
            res.on("data", function (data) {
                console.log("data:", data); //返回的数据
                resolve({
                    status:200,
                    msg:'成功（百度自动推送）'+data
                })
            });
        });
        req.write(txtUrl);
        req.end;
    })

}

module.exports = {baiduAutoPost:baiduAutoPost}