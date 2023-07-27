import React from "react";

export default function Users({list}){
    return <ul>
        {list && list.map((post) => {
            return <li key={post.id}>{post.name}<a></a></li>;
        })}
    </ul>
}