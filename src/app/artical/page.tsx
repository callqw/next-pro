import React from 'react'
import { config } from "@/src/config"
export default async function Page() {
    const options = {
        method: 'POST',
        headers: {
          "wx":"wx",
          'Content-Type': 'application/json', // 如果发送JSON数据
          // 或者如果是表单数据：
          // 'Content-Type': 'application/x-www-form-urlencoded'
        },
        // body: '', // 如果是JSON格式
        // 或者如果是表单数据：
        // body: new URLSearchParams(formData).toString()
      };
    const aa = await fetch(`${config.url}/api/artical`, options);


    const posts = await aa.json();
    // console.log(posts);
  return (
    <div>
      artical1
    </div>
  )
}
