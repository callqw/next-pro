"use client"
import React, { memo, useMemo } from 'react'
import { Col, Row, Image } from 'antd';
import "./news.scss"
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
                    </Col>
                    <Col span={12}>
                        下个月有山猫纹的宝宝了[耶][耶]
                    </Col>
                    <Col span={6}>
                    </Col>
                </Row>
                <Row>
                    <Col span={6}>
                    </Col>
                    <Col span={12}>
                        neirong
                    </Col>
                    <Col span={6}>
                    </Col>
                </Row>
                <Row>
                    <Col span={6}>
                    </Col>
                    <Col className='newsImageCol' span={3}>
                        <Image.PreviewGroup
                            items={[
                                'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp',
                                'https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp',
                                'https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp',
                            ]}
                        >
                            <div className='newsImageSetter'>
                                <Image className='newsImageSetterItems'
                                    src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
                                />
                            </div>
                        </Image.PreviewGroup>


                    </Col>

                    <Col className='newsImageCol' span={3}>
                        <Image.PreviewGroup
                            items={[
                                'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp',
                                'https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp',
                                'https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp',
                            ]}
                        >
                            <div className='newsImageSetter'>
                                <Image className='newsImageSetterItems'
                                    src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
                                />
                            </div>
                        </Image.PreviewGroup>


                    </Col>

                    <Col className='newsImageCol' span={3}>
                        <Image.PreviewGroup
                            items={[
                                'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp',
                                'https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp',
                                'https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp',
                            ]}
                        >
                            <div className='newsImageSetter'>
                                <Image className='newsImageSetterItems'
                                    src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
                                />
                            </div>
                        </Image.PreviewGroup>


                    </Col>
                    <Col className='newsImageCol' span={3}>
                        <Image.PreviewGroup
                            items={[
                                'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp',
                                'https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp',
                                'https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp',
                            ]}
                        >
                            <div className='newsImageSetter'>
                                <Image className='newsImageSetterItems'
                                    src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
                                />
                            </div>
                        </Image.PreviewGroup>


                    </Col>
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