import React from 'react'
import { Card, Space } from 'antd';
import { dataList as data } from "@/data/list"
export default function Page({ param }: { param: { id: string } }) {
    console.log(param, 'pp');
    const item = data.find(item => item.id === +param.id)!   //这里用到非空断言，因为下面的item存在undefined ，我们在这判定这个item不为undefined或null
    return (
        <div>
            <Space direction="vertical" size={16}>
                <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                    <p>{item.name}</p>
                    <p>{item.title}</p>
                </Card>
            </Space>
        </div>
    )
}
