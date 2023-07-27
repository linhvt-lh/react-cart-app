import React from "react";
import { Link,Outlet } from "react-router-dom";

export default function Navigation(){
    return <>
        <nav>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/cart">Cart</Link></li>
        </nav>
        <Outlet />
    </>
}