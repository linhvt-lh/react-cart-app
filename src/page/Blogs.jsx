import React from "react";
import Blogs from "../component/Blogs/Blogs.jsx";
import Navigation from "../layout/Navigation.jsx";

export default function Blogs(){
    return <>
        <Navigation/>
        <h2>THIS IS bLOGS PAGE</h2>
        <Row>
            <Col span={24}>
                <h2>Blogs</h2>
                <Blogs></Blogs>
            </Col>
        </Row>
    </>
}