import React from 'react';
import { List,Avatar } from 'antd';

export default function Products(){
    const productsData = [
        {
            title : 'Sữa rửa mặt',
            des : "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            title : 'Kem dưỡng mắt',
            des : "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            title : 'Dầu gội',
            des : "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            title : 'kem đánh răng',
            des : "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
    ]

    return <>
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
            </List.Item>
            )}
        />
    </>
}