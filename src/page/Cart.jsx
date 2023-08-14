import { Row, Col  } from "antd";
import React, { useEffect, useState } from 'react';
import CustomHeader from '../layout/Header.jsx';
import Products from '../component/ProductList/Products.jsx';
import Promotion from '../component/Promotion/Promotion.jsx';
import CartInFo from '../component/CartInfo/CartInfo.jsx';
import Button from '../component/Button/Button.jsx';
import { CartPageStyle } from './styled.jsx';
import { useSelector } from "react-redux";
import CartItem from '../component/Cart/CartItems.jsx';

export default function CartPage(){

    const shipCost = 30;
    // sample test data
    const promotionsOriginal = [
        {
            code : 'HOLIDAY',
            discount : 20,
            used : false
        },
        {
            code : 'HAPPY',
            discount : 20,
            used : false
        },
        {
            code : 'CHECK',
            discount : 20,
            used : false
        },
    ];

    const cartItems = useSelector(state => state.cart.items);
    const [cartTotal, setCartTotal] = useState(0);
    const [promotionsData, setPromotionsData] = useState(promotionsOriginal);
    const [promotions, setPromotion] = useState({
        code : '',
        discount : 0
    });    
    
    // change quantity
    function handleChangeQuantity(pId, qty){
        const newcartItems = cartItems.map((product) => {
            if(product.id === pId){
                product.qty = qty;
            }
            return product;
        });
        setcartItems(newcartItems);
    }

    //change promotion
    function promotionSubmit(promoCode){
        let discount = 0;
        let newPromotionsData =  promotionsOriginal.map((promo) => {
            if(promo.code === promoCode.toUpperCase() && promo.used === false ){
                discount = cartTotal * (promo.discount / 100);
                return {...promo, used:true}
            }
            return promo;
        });
       
        if(discount > 0){
            setPromotionsData(newPromotionsData);
            setPromotion({status:200, code:promoCode, discount:discount});
        }else{
            setPromotion({status:500});
        }
    }

    function handleRemoveItem(){

    }

    // fetch data
    function fetchApiDataAction(url, successAction, method = 'GET'){
        fetch(url, {
            method : method,
        })
        .then((response) => response.json())
        .then((data) => {
            if(data){
                successAction(data);
            }
        })
        .catch((err) => {
            console.log('Can not get blogs data' + err.message);
        });
    }
    
    //calculate cart total
    useEffect(() => {
        let total = shipCost ? shipCost : 0;
        for(let product of cartItems){
            total += (product.price) * product.qty;
        }
        if(promotions.discount > 0){
            total -= promotions.discount;
        }
        setCartTotal(total);
        
    }, [cartItems, promotions]);

    

    //cart loading
    const isLoading = cartTotal === 0;

    return <>
        <CustomHeader />
        <CartPageStyle>
            <Row gutter={48}>
                <Col span={16}>
                    <h2>Products</h2>
                    <CartItem products={cartItems} quantityChange={handleChangeQuantity}  removeItem={handleRemoveItem}></CartItem>
                    <Button className="update-cart-btn" type="primary" disabled>Update</Button>
                </Col>
                <Col span={8}>
                    <Promotion onClick={promotionSubmit} promotions={promotions} ></Promotion>
                    <CartInFo promotions={promotions} isLoading={isLoading} cartTotal={cartTotal}></CartInFo>
                    <div className="go-checkout">
                        <Button btnType="yellow" type="primary">Checkout</Button>
                    </div>
                </Col>
            </Row>
        </CartPageStyle>   
    </>
    
}