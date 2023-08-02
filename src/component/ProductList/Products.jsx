import React, { useEffect, useState } from 'react';
import { List, Avatar, InputNumber, Card, Row, Col, Button } from 'antd';
import { ProductStyled } from './styled.jsx';
import { addToCart } from '../../slices/CartReducer.js';
import { useDispatch, useSelector } from 'react-redux';


export default function Products(){

    const totalPrice = useSelector(state => state.cart.totalPrice) ;
    const dispatch = useDispatch();
    const [products, setProducts] = useState(null);
  
    // fetch Data
    useEffect(() => {
        const baseURL = '/api/products';
        const token  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjRjNzYxNjdkNDc5NWQzOTM2OThlNDVkIiwiZW1haWwiOiJsaW5oQGdtYWlsLmNvbSIsImlhdCI6MTY5MDg3MzEzOCwiZXhwIjoxNjkwODgwMzM4fQ.zdVQt8rXUcl0lTDqHsjFZ1S_I3rVrkYFcQEnOsQF-5I';
        fetch(baseURL, {
                method:'GET',
                headers:{
                    'Content-Type':'application/json',
                    'x-access-token':token
                }
            }
        ).then((res) => res.json())
        .then((data) => setProducts(data))
        .catch((err) => {
            console.log(err);
        })
    }, []);
    
    if (products) {
        return <>
            <ProductStyled>
                <h2>Product List {totalPrice}</h2>
                <Row gutter={[16, 16]}>
                    {products.map((product, index) => {
                        return <Col key={product._id} span={6}>
                            <Card title={product.name}>
                                <Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />
                                <p>{product.price}$</p>
                                <Button onClick={() => dispatch(addToCart(product))}>Add To Cart</Button>
                            </Card>
                        </Col>
                    })}
                </Row>
            </ProductStyled>
        </>;
    }
    return <>Loading...</>;
   
}