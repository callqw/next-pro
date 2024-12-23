
"use client"
import React from 'react'
import { Card, Row, Col, Divider } from 'antd';
import Image from 'next/image'
const { Meta } = Card;
export default function Content({ contentData }: any) {
    console.log(contentData.zhonggong, 'cc');
    return (
        <div style={{ padding: "0 32px 0 32px" }}>
            <Row style={{ margin: "24px 0 24px" }}>
                <Col md={7} xs={3}>
                </Col>
                <Col md={10} xs={18}>
                    <Image style={{ width: "100%" }} src={contentData.title[0].url} alt={contentData.title[0].name} />
                </Col>
                <Col md={7} xs={3}>
                </Col>
            </Row>
            <Row gutter={[16, 16]}>
                {contentData.zhonggong.map((item: any, index: any) => {
                    return (
                        <Col key={index} md={6} xs={12}>
                            <Card
                                hoverable
                                style={{ width: "100%", margin: "0 auto", }}
                                cover={
                                    <div style={{ width: "100%", height: "220px" }}>
                                        <Image style={{ objectFit: "cover", objectPosition: "top", width: "100%", height: "100%" }} alt={item.name}
                                            src={item.url} />
                                    </div>

                                }
                            >
                                <Meta title={item.name} description={item.name} />
                            </Card>
                        </Col>
                    )
                })}
            </Row>
            {/* 种母展示 */}
            <Row style={{ margin: "44px 0 24px" }}>
                <Col md={7} xs={3}>
                </Col>
                <Col md={10} xs={18}>
                    <Image style={{ width: "100%" }} src={contentData.title[1].url} alt={contentData.title[1].name} />
                </Col>
                <Col md={7} xs={3}>
                </Col>
            </Row>
            <Row gutter={[16, 16]}>
                {contentData.zhongmu.map((item: any, index: any) => {
                    return (
                        <Col key={index} md={6} xs={12}>
                            <Card
                                hoverable
                                style={{ width: "100%", margin: "0 auto", }}
                                cover={
                                    <div style={{ width: "100%", height: "220px" }}>
                                        <Image style={{ objectFit: "cover", objectPosition: "top", width: "100%", height: "100%" }} alt={item.name}
                                            src={item.url} />
                                    </div>

                                }
                            >
                                <Meta title={item.name} description={item.name} />
                            </Card>
                        </Col>
                    )
                })}
            </Row>

        </div>
    )
}
