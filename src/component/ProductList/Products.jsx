import React, { useContext, useEffect, useState } from 'react';
import { List,Avatar, InputNumber, Card, Row, Col, Button } from 'antd';
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
            <h2>Product List</h2>
            <Row gutter={[16, 16]}>
                {products.map( ( product,index) => {
                    return  <>
                    <Col span={6}>
                        <Card title={product.name}>
                            <Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />
                            <p>{product.price}$</p>
                            <Button>Add To Cart</Button>
                        </Card>
                    </Col>
                    </>
                    
                }) }
            </Row>
        </ProductStyled>
    </>
   }
   return <>Loading...</>
   
}