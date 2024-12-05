import { config } from "@/src/config";
export const dataList = [
  { id: 1, name: "xiaohua", title: "balasdnfljfljlfk" },
  { id: 2, name: "xiaohu", title: "xiaohuxiaohuxiaohu" },
  { id: 3, name: "meimei", title: "meimeimeimei" },
  { id: 4, name: "mingming", title: "mingmingmingming" },
];
export const mainData = async function () {
  const mainData = await fetch(`https://xfragdoll.com`, {
    headers: {
      wx: "wx"
    }
  });
  return await mainData.json();

}
export const getArtical = async function () {
  const mainData = await fetch(`${config.url}:3000/api/artical`, { method: "POST" });
  return await mainData.json();

}