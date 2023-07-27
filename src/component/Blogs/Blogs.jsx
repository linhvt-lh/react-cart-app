import React, { useEffect, useRef, useState } from "react";
import {BlogStyle} from './styled.js';
import fetchApiDataAction from '../../fetchApi.jsx';
import { Input, Button } from "antd";

export default function BlogsCom(){
    const apiBaseUrl = 'https://jsonplaceholder.typicode.com/';
    const [editId, setEditId] = useState(0);
    const editInput = useRef("");
    const [formAddStatus, setFormStatus] = useState(false);
    const [addPost, setAddPost] = useState(null);
    const [blogs, setBlogs] = useState(null);
    
    useEffect(()=>{
        const blogURL = `${apiBaseUrl}posts/?pageSize=10`;
        fetch(blogURL, {
            method : 'GET',
        })
        .then((response) => response.json())
        .then((data) => {
            if(data){
                setBlogs(data);
            }
        })
        .catch((err) => {
            console.log('Can not get blogs data' + err.message);
        });
       
    },[addPost])
   

    function handleEdit(postId){
        setEditId(postId);
    }
    
    function handleSave(postID, userId){
        const url = `${apiBaseUrl}posts/${postID}`;
    
        fetch(url,{
            method : 'PUT',
            body : JSON.stringify({
                id: postID,
                title: editInput.current,
                userId:userId
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((response) => {
            if(response.status === 200){
                setEditId(0);
            }
 
        })
    }

    function handleInputChange(e){
        editInput.current = e.target.value;
    }

    function showAddingForm(){
        setFormStatus(true);
    }

    function handleAddPost(e){
       
        e.preventDefault();
        const data = new FormData(e.target);
        const title = data.get('title');
        const userId = data.get('userId');
        const id = Math.floor(Math.random() * 100);
        const url = `${apiBaseUrl}posts/`;
        fetch(url,{
            method : 'POST',
            body : JSON.stringify({
                id: id,
                userID: userId,
                title: title
            }),
            header : {
                'Content-type': 'application/json; charset=UTF-8',
            }
        }).then((response) => {
            if(response.status === 201){
                setAddPost(id);
                setFormStatus(false);
            }
        })
    }

    return <BlogStyle>
        <Button onClick={showAddingForm}>+Add More</Button>
        { formAddStatus == true && 
            <form onSubmit={(e) => handleAddPost(e)} className="" action="">
                <Input name="title" placeholder="Title"></Input>
                <Input type="number" name="userId" placeholder="userId"></Input>
                <button type="submit">Add</button>
            </form>}
        <ul className="blog-list">
            {blogs && blogs.map((post) => {
                return <>
                    <li key={post.id + post.userId}>
                    { editId === post.id ? 
                        <><input className="post-title" onChange={(e) => handleInputChange(e)}  /><a onClick={(e) =>{handleSave(post.id,post.userId)}} className="edit">Save</a></> : 
                        <><input className="post-title" readOnly value={post.title} /><a onClick={(e) =>{handleEdit(post.id)}} className="edit">Edit</a></>
                    }
                  
                    </li>
                </>
                
            })}
        </ul>
    </BlogStyle>
}