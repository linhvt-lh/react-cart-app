import React, { useContext } from "react";
import { Row, Col } from 'antd';
import { CartInfoStyle } from './styled.jsx';
import { CartContext } from '../../page/Cart.jsx';


export default function CartInfo({isLoading, promotions}){

    const cartTotal = useContext(CartContext);

    return <CartInfoStyle>
        <div className={`shipping-info ${isLoading ? 'loading' : ' '}`}>
        <Row gutter={[16, 48]}>
            <Col className="gutter-row"  span={16}>
                <span className="sp-box-label">Shipping cost</span>
            </Col>
            <Col span={8}>
                <span className="sp-cost-val">30$</span>
            </Col>
        </Row>
        <Row gutter={[16, 48]}>
            <Col span={16}>
                <span className="sp-box-label">Discount</span>
            </Col>
            <Col span={8}>
                <span className="sp-cost-val">-{promotions.discount ? promotions.discount : 0}$</span>
            </Col>
        </Row>
        <Row gutter={[16, 48]}>
            <Col span={16}>
                <span className="sp-box-label">Tax</span>
            </Col>
            <Col span={8}>
                <span className="sp-cost-val">TBD</span>
            </Col>
        </Row>
        <Row gutter={[16, 48]} className="font-bold">
            <Col span={16}>
                <span className="sp-box-label">Estimate Total</span>
            </Col>
            <Col span={8}>
                <span className="sp-cost-val">{cartTotal}$</span>
            </Col>
        </Row>
    </div>
    </CartInfoStyle>
    
}