import React from "react";
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

export default function CartWidget(){
  const cartData = useSelector(state => state.cart.items) ;
  let cartNum = 0;
  if(cartData){
    cartData.map(item => {
      cartNum += item.quantity;
    })
  }
  return <>
    <div className="mini-cart">
      <Link to="/cart">
      <ShoppingCartOutlined />
      <span className="cart-num">{cartNum}</span>
      </Link>
    </div>
  </>
}