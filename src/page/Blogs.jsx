import React from "react";
import BlogsCom from "../component/Blogs/Blogs.jsx";
import Navigation from "../layout/Navigation.jsx";

export default function Blogs(){
    return <>
        <Navigation/>
        <h2>THIS IS bLOGS PAGE</h2>
        <BlogsCom></BlogsCom>
    </>
}