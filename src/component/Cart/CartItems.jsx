import React from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { Avatar, InputNumber, Card, Row, Col, Button } from 'antd';
import { removeCartItem , updateCartItems } from '../../slices/CartReducer.js';
import { useDispatch, useSelector } from "react-redux";
import { CartItemStyle } from './styled.js';

export default function CartItem({products, handleQtyChange}){

    const [cartItems] = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    function handleRemoveItem(productId){
        dispatch(removeCartItem(productId));
    }

    function handleChangeQuantity(productID, quantity){
        dispatch(updateCartItems({productID:productID, quantity: quantity}));
    }   


    return <CartItemStyle>
                <Row gutter={[16, 16]}>
                {products.map((product, index) => {
                    return <Col key={product.id} span={6}>
                        <Card title={product.name}>
                            <Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />
                            <p>{product.price}$</p>
                            Quantity : <InputNumber onChange={(value) => handleChangeQuantity(product.id, value) } defaultValue={product.quantity}/>
                            <Button className="delete" onClick={() => handleRemoveItem(product.id)}><DeleteOutlined /></Button>
                        </Card>
                    </Col>
                })}
            </Row>
        </CartItemStyle>
}