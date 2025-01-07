"use client"
import React from 'react'
import { Row, Col } from 'antd'
import "./index.scss"
import Link from 'next/link'
import Image from 'next/image'

export default function Footer({ allData }: any) {
    console.log(allData, 'footer');

    return (
        <div className='Footer' style={{ margin: "40px 0 20px 0", color: "white", }}>
            <Row >
                <Col className='footerCol' xs={24} md={6} style={{ paddingLeft: "40px" }}>

                    <div className='fotterMargin'><h1 className='fotterMarginH1' >幸福布偶猫舍</h1></div>
                    <div className='fotterMargin'><p>版权所有：© 幸福布偶猫舍</p></div>
                    <div className='fotterMargin'><p>备案：蜀ICP备2022011533号</p></div>
                    <div className='fotterMargin'>站点地图：<p><Link target="_blank" style={{ color: "#fff", marginRight: "1rem", textDecoration: "none" }}
                        href="/robots.txt">robots</Link><Link target="_blank"
                            style={{ color: "#fff", marginRight: "1rem", textDecoration: "none" }} href="/map">map</Link>
                        <Link target="_blank" style={{ color: "#fff", textDecoration: "none" }} href="/sitemap.xml">
                            sitemap</Link>  <Link target="_blank" style={{ color: "#fff", marginRight: "1rem", textDecoration: "none" }}
                                href="/urls.txt">urls</Link></p></div>

                </Col>
                <Col className='footerCol' xs={24} md={6}>
                    <div className='fotterMargin'>
                        <h1 className='fotterMarginH1'>联系我们</h1>
                    </div>
                    <div className='fotterMargin'><span>微信：xyy20152</span></div>
                    <div className='fotterMargin'><p>微博：<Link target="_blank" href="https://weibo.com/u/6703935390">点击跳转</Link></p></div>
                    <div className='fotterMargin'><p>微信小程序搜索: <span style={{ marginLeft: "20px" }}>幸福布偶猫舍</span></p></div>
                </Col>
                <Col className='footerCol' xs={24} md={6}>
                    <div className='fotterMargin'><h3 className='fotterMarginH1' style={{ textAlign: "center" }}>微信</h3></div>
                    <div style={{ textAlign: "center" }}><Image  width={100} height={100} alt={allData.script[13].name} style={{ width: "auto", margin: "0 auto" }} src={allData.script[13].url} /></div>
                </Col>
                <Col className='footerCol' xs={24} md={6}>
                    <div className='fotterMargin'><h3 className='fotterMarginH1' style={{ textAlign: "center" }}>小程序</h3></div>
                    <div style={{ textAlign: "center" }}><Image width={100} height={100} alt={allData.script[14].name} style={{ width: "auto", margin: "0 auto" }} src={allData.script[14].url} /></div>
                </Col>
            </Row>
        </div>
    )
}
