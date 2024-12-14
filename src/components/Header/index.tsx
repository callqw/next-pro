"use client"
import Link from "next/link";
import React, { useState } from 'react';
import Image from "next/image";
import { AppstoreOutlined, MailOutlined, SettingOutlined, SmileOutlined } from '@ant-design/icons';
import { Menu, Layout, Avatar } from 'antd';
import type { MenuProps } from 'antd';
import './styles.scss';
import DropDown from "./DropDown"
const { Header, Content, Footer } = Layout;
type MenuItem = Required<MenuProps>['items'][number];
const items: MenuItem[] = [
    {
        label: <Link href="/">首页</Link>,
        key: 'index',
        icon: <Image className="headerSvgSetts" width={24} overflowedIndicator height={24}
            src="/cats/布偶猫-海豹双色.svg" alt="布偶猫-海豹双色" />,
    },
    {
        label: <Link href="/aboutus">猫舍简介</Link>,
        key: 'aboutus',
        icon: <Image className="headerSvgSetts" width={24} overflowedIndicator height={24}
            src="/cats/布偶猫-稀有色.svg" alt="布偶猫-稀有色" />,
    },
    {
        label: <Link href="/video">猫咪视频</Link>,
        key: 'video',
        icon: <Image className="headerSvgSetts" width={24} overflowedIndicator height={24}
            src="/cats/布偶猫-重点色.svg" alt="布偶猫-重点色" />,
    },
    {
        label: <Link href="/knows">购猫须知</Link>,
        key: 'knows',
        icon: <Image className="headerSvgSetts" width={24} overflowedIndicator height={24}
            src="/cats/金渐层.svg" alt="金渐层" />,
    },
    {
        label: <Link href="/news">最新动态</Link>,
        key: 'news',
        icon: <Image className="headerSvgSetts" width={24} overflowedIndicator height={24}
            src="/cats/玳瑁猫.svg" alt="玳瑁猫" />,
    },
    {
        label: <Link href="/connect">联系我们</Link>,
        key: 'connect',
        icon: <Image className="headerSvgSetts" width={24} overflowedIndicator height={24}
            src="/cats/缅因猫.svg" alt="缅因猫" />,
    },
];
export default function Index() {

    const [current, setCurrent] = useState('mail');

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return (
        <div>
            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <div className="header-logo"><Link href="/">幸福布偶猫舍</Link> </div>
                <Menu theme="dark" onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} style={{
                    flex: 1,
                    minWidth: 0,
                }} />
                <div>
                    <DropDown></DropDown>
                </div>
            </Header>

        </div>
    )
}
