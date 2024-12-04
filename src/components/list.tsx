"use client"
import React from 'react'
import { dataList as data } from "@/src/data/list"
import { Avatar, List } from 'antd';
import Link from "next/link"
export default function list() {
    return (
        <div>
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item, index) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
                            title={<Link href={`/blog/${item.id}`}>{item.title}</Link>}
                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                        />
                    </List.Item>
                )}
            />
        </div>
    )
}
