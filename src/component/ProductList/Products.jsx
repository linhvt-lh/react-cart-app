import React, { useContext } from 'react';
import { List,Avatar, InputNumber } from 'antd';
import {ProductStyled} from './styled.jsx';


export default function Products({productsData,quantityChange}){

    return <>
        <ProductStyled>
            <List
                itemLayout="horizontal"
                dataSource={productsData}
                renderItem={(item, index) => (
                <List.Item>
                    <List.Item.Meta
                    avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
                    title={<a href="https://ant.design">{item.title}</a>}
                    description={item.des}
                    />
                    <div className='list-col'>
                        <span className='list-label'>Quantity</span>
                        <InputNumber value={item.qty} onChange={(value) => {quantityChange(item.id,value)}}></InputNumber>
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