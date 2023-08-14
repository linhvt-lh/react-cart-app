import React from "react";
import{ Row, Col } from 'antd';
import List from "../component/Blogs/List.jsx";
import CustomHeader from '../layout/Header.jsx';
import { Outlet, Link } from 'react-router-dom';
import { BlogPageStyle } from './styled.jsx';


export default function Blogs(){
    return <BlogPageStyle>
        <CustomHeader />
        <h2 className="page-heading">THIS IS bLOGS PAGE</h2>
        <Row>
            <Col span={24}>
                <div className="blog-nav">
                    <Link to="list">List</Link>
                    <Link to="search">Search</Link>
                </div>
                <div className="content-wrapper">
                    <Outlet />
                </div>
            </Col>
        </Row>
    </BlogPageStyle>
}