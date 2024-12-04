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