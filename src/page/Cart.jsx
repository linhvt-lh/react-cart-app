import { Row, Col  } from "antd";
import React, { useEffect, useState } from 'react';
import Navigation from "../layout/Navigation.jsx";
import Products from '../component/ProductList/Products.jsx';
import Promotion from '../component/Promotion/Promotion.jsx';
import CartInFo from '../component/CartInfo/CartInfo.jsx';
import Button from '../component/Button/Button.jsx';
import Blogs from '../component/Blogs/Blogs.jsx';
import { CartPageStyle } from './styled.jsx';
import { useSelector } from "react-redux";


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
    const [productData, setProductData] = useState(cartItems);
    const [cartTotal, setCartTotal] = useState(0);
    const [promotionsData, setPromotionsData] = useState(promotionsOriginal);
    const [promotions, setPromotion] = useState({
        code : '',
        discount : 0
    });    
    
    // change quantity
    function handleChangeQuantity(pId, qty){
        const newProductData = productData.map((product) => {
            if(product.id === pId){
                product.qty = qty;
            }
            return product;
        });
        setProductData(newProductData);
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
        for(let product of productData){
            total += (product.price) * product.qty;
        }
        if(promotions.discount > 0){
            total -= promotions.discount;
        }
        setCartTotal(total);
        
    }, [productData, promotions]);


    //cart loading
    const isLoading = cartTotal === 0;

    return <>
        <Navigation />
        <CartPageStyle>
            <Row gutter={48}>
                <Col span={16}>
                    <h2>Product List</h2>
                    <Products productsData={productData} quantityChange={handleChangeQuantity}></Products>
                </Col>
                <Col span={8}>
                    <Promotion onClick={promotionSubmit} promotions={promotions} ></Promotion>
                    <CartInFo promotions={promotions} isLoading={isLoading} cartTotal={cartTotal}></CartInFo>
                    <div className="go-checkout">
                        <Button btnType="yellow" type="primary">Checkout</Button>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <h2>Blogs</h2>
                    <Blogs></Blogs>
                </Col>
            </Row>
        </CartPageStyle>   
    </>
    
}