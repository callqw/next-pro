
"use client"
import React from 'react'
import { Row, Col } from 'antd';
import Image from 'next/image';
import Container from '@/src/components/Container';

export default function Content({ contentData }: any) {
    console.log(contentData.zhonggong, '主页展示数据');
    return (
        <div style={{ padding: "0 32px 0 32px" }}>
            <Row style={{ margin: "24px 0 24px" }}>
                <Col md={7} xs={3}>
                </Col>
                <Col md={10} xs={18}>
                    <Image src={contentData.title[0].url} alt={contentData.title[0].name} width={500} height={500} style={{ width: "auto", margin: "0 auto" }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                </Col>
                <Col md={7} xs={3}>
                </Col>
            </Row>
            <Container>
                <Row gutter={[16, 16]} >
                    {contentData.zhonggong.map((item: any, index: any) => {
                        return (
                            <Col key={index} md={6} xs={12}>
                                <Image style={{ objectFit: "cover", objectPosition: "top", width: "100%", height: "100%" }} alt={item.name}
                                    src={item.url} width={500}
                                    height={500} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw" />
                            </Col>
                        )
                    })}
                </Row>
            </Container>

            {/* 种母展示 */}
            <Row style={{ margin: "44px 0 24px" }}>
                <Col md={7} xs={3}>
                </Col>
                <Col md={10} xs={18}>
                    <Image src={contentData.title[1].url} alt={contentData.title[1].name} width={500} height={500} style={{ width: "auto", margin: "0 auto" }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                </Col>
                <Col md={7} xs={3}>
                </Col>
            </Row>
            <Container>
                <Row gutter={[16, 16]}>
                    {contentData.zhongmu.map((item: any, index: any) => {
                        return (
                            <Col key={index} md={6} xs={12}>
                                <Image style={{ objectFit: "cover", objectPosition: "top", width: "100%", height: "100%" }} alt={item.name}
                                    src={item.url} width="500"
                                    height={50} sizes="(max-width: 768px) 30vw, (max-width: 1200px) 50vw, 23vw" />
                            </Col>
                        )
                    })}
                </Row>
            </Container>


        </div>
    )
}
