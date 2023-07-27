import React, {useState} from "react";
import Button from "../Button/Button.jsx";
import {PromotionStyle} from './styled.jsx';
import {Input, Space, Row, Col}  from 'antd';

export default function Promotion({onClick, promotions}){
    let proMsg = '';
    const [promoCode, setPromoCode] = useState("");

    function handlePromoChange(e){
        setPromoCode(e.target.value);
    }
   
    if(promotions.status){
        if(promotions.status === 200){
            proMsg = <div className={`applied-note note-${promotions.status}`}>The promotion was applied successfully!</div>
        }else{
            proMsg = <div className={`applied-note note-${promotions.status}`}>The promotion can't not apply!</div>
        }
    }
    return <>
        <PromotionStyle>
            <h3>Enter Promotion Code</h3>
            <Space direction="horizontal">
                <Input onChange={(e) => handlePromoChange(e)} placeholder="Enter code" value={promoCode}/>
                <Button onClick={() => onClick(promoCode)} check={"checked"} btnType={"black"}>Submit</Button>
            </Space>
            {proMsg}
            <div className="applied-note"></div>
           
        </PromotionStyle>
    </>
}