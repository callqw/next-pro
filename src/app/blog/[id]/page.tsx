import React from 'react'
import { Card, Space } from 'antd';
import { dataList as data } from "@/src/data/list"
import type { Metadata, ResolvingMetadata } from 'next'
 
type Props = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}
 
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
//   const id = (await params).id
 
  // fetch data
  const options = {
    headers:{
        "wx": "wx"
    }
  }
  const product = await fetch(`http://localhost:3001`,{headers:{
    wx:"wx"
  }})
  let posts = await product.json();
 
  // optionally access and extend (rather than replace) parent metadata
//   const previousImages = (await parent).openGraph?.images || []
 
  return {
    // title: product.title,
    // openGraph: {
    //   images: ['/some-specific-page-image.jpg', ...previousImages],
    // },
  }
}
export default function Page({ params }: { params: { id: string } }) {
    console.log(params, 'pp');
    const item = data.find(item => item.id === +params.id)!   //这里用到非空断言，因为下面的item存在undefined ，我们在这判定这个item不为undefined或null
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
