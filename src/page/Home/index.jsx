import React from "react";
import { Layout } from 'antd';
import CustomHeader from '../../layout/Header.jsx';
import { HomeWrapperStyle } from './styled.js';
const { Content, Footer } = Layout;

//component
import Products from "../../component/ProductList/Products.jsx";


export default function Home(){
  return <>
      <Layout className="layout">
        <CustomHeader />
        <HomeWrapperStyle>
          <Content style={{ padding: '0 50px' }}>
            <div className="site-layout-content" >
              <Products />
            </div>
          </Content>
        </HomeWrapperStyle>
        <Footer style={{ textAlign: 'center' }}>©2023 Created by Linh Vu</Footer>
    </Layout>
  </>
}