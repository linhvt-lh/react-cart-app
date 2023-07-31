import React, { useContext, useEffect, useState } from 'react';
import { List,Avatar, InputNumber } from 'antd';
import {ProductStyled} from './styled.jsx';


export default function Products({productsData, quantityChange}){
   
    const [products, setProducts] = useState(null);

    useEffect(()=>{
        const baseURL = '/api/products';
        const token  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjRjNzYxNjdkNDc5NWQzOTM2OThlNDVkIiwiZW1haWwiOiJsaW5oQGdtYWlsLmNvbSIsImlhdCI6MTY5MDgxODczOCwiZXhwIjoxNjkwODI1OTM4fQ.KqSGbCKbmbZTNzJTeYicMu_FJtsAq4PR279g78QF-Gk';
        fetch( baseURL, {
                method:'GET',
                headers:{
                    'Content-Type':'application/json',
                    'x-access-token':token
                }
        }).then( (res) => res.json())
        .then((data) => {
           setProducts(data);
        }).catch(err => {
            console.log(err);
        })
    },[])
    
   if(products){
   
    return <>
        <ProductStyled>
            <List
                itemLayout="horizontal"
                dataSource={products}
                renderItem={(item, index) => (
                <List.Item>
                    <List.Item.Meta
                    avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
                    title={<a href="https://ant.design">{item.name}</a>}
                
                    />
                    <div className='list-col'>
                        <span className='list-label'>Quantity</span>
                        <InputNumber value={item.quantity} onChange={(value) => {quantityChange(item._id,value)}}></InputNumber>
                    </div>
                    <div className='list-col'>
                        <span className='list-label'>Price</span>
                        <span>{item.price}{"$"}</span>
                    </div>
                    
                </List.Item>
                )}
            />
        </ProductStyled>
    </>
   }
   return <>Loading...</>
   
}