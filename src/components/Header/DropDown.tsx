import React from 'react'
import { DownOutlined, SmileOutlined, AppstoreOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space, Avatar } from 'antd';
import Image from "next/image";
const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                登陆
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                注册
            </a>
        ),
        icon: <SmileOutlined />,
        disabled: true,
    },
    {
        key: '3',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                设置
            </a>
        ),
        disabled: true,
    },
    {
        key: '4',
        danger: true,
        label: '控制面板',
    },
];
const HeaderIcon = () => {
    return <Image width={16} height={16} src="/cats/狸花猫.svg" alt="狸花猫"></Image>
}
export default function DropDown() {
    return (
        <Dropdown menu={{ items }} trigger={['hover']}>
            <a className="ant-dropdown-link" href="#">
                <Avatar shape="square" size={32} icon={<HeaderIcon />} />
            </a>
        </Dropdown>
    )
}
