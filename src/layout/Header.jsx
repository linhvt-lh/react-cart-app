import React from "react";
import {Layout, Menu, MenuProps  } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
const { Header} = Layout;

function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
const items = [
    getItem('Home', 'home', "", [
    ]),
    getItem('Carts', 'cart', "",[]),
    getItem('Blogs', 'blogs', <SettingOutlined />, [
      getItem('Blog Detail', '9'),
    ]),
  ];

export default function CustomHeader() {
    return <>
    <Header style={{ display: 'flex', alignItems: 'center' }}>
    <div className="demo-logo" />
    <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={items}
    />
</Header></>
}
