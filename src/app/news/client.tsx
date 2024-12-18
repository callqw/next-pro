"use client"
import React, { memo, useMemo } from 'react'
import { Col, Row, Image } from 'antd';
interface ClientProps {
    news: any
}
const Client: React.FC<ClientProps> = function ({ news }) {
    console.log(news, 'client');
    const News = useMemo(() => {
        return (
            <div>
                <Row>
                    <Col span={6}>
                        <Image.PreviewGroup
                            items={[
                                'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp',
                                'https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp',
                                'https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp',
                            ]}
                        >
                            <Image
                                width={100}
                                src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
                            />
                        </Image.PreviewGroup>
                    </Col>
                    <Col span={6}>   <Image.PreviewGroup
                        items={[
                            'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp',
                            'https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp',
                            'https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp',
                        ]}
                    >
                        <Image
                            width={100}
                            src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
                        />
                    </Image.PreviewGroup></Col>
                    <Col span={6}>   <Image.PreviewGroup
                        items={[
                            'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp',
                            'https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp',
                            'https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp',
                        ]}
                    >
                        <Image
                            width={100}
                            src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
                        />
                    </Image.PreviewGroup></Col>
                    <Col span={6}>   <Image.PreviewGroup
                        items={[
                            'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp',
                            'https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp',
                            'https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp',
                        ]}
                    >
                        <Image
                            width={100}
                            src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
                        />
                    </Image.PreviewGroup></Col>
                </Row>
            </div>
        )
    }, [])
    return (
        <div>
            {News}
        </div>
    )
}
export default memo(Client)