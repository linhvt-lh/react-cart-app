import React, { useState } from "react";
import Button from "../component/Button/Button";

export default function BlogSingle(){
    const [postID, setPostID] = useState(null);
 
    if( !postID ){
        return  <>
        <h1>This is Blog Single Page</h1><h2 data-testid="loading">Loading...</h2>
        </>
    }
    return  <>
        <h1>This is Blog Single Page</h1>
        <Button></Button>
    </>

}