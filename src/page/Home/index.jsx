import React from "react";
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import CustomHeader from '../../layout/Header.jsx';
import {HomeWrapperStyle} from './styled.js';
const { Content, Footer } = Layout;

//component
import Products from "../../component/ProductList/Products.jsx";


export default function Home(){
  return <>

      <Layout className="layout">
        <CustomHeader />
        <HomeWrapperStyle>
          <Content style={{ padding: '0 50px' }}>
            <Products />
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb> */}
            <div className="site-layout-content" >
              Content
            </div>
          </Content>
        </HomeWrapperStyle>
       
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
    </Layout>
  </>
}