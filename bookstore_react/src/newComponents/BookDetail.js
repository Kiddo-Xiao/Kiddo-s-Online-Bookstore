import React from 'react';
import { Descriptions, Button } from 'antd';
import { PayCircleOutlined,ShoppingCartOutlined} from '@ant-design/icons';
import * as cartServce from '../services/cartService';
import {history} from '../utils/history';


export class BookDetail extends React.Component{

    constructor(props) {
        super(props);
    }

    handleSubmit=async(info)=>{
        var userId=localStorage.getItem('user');
        console.log(userId);
        console.log(info.name);
        console.log(info.author);
        console.log(info.price);
        console.log(info.bookId);
        console.log(JSON.parse(userId).userId);

        var value={
            "name":info.name,
            "author": info.author,
            "isbn": info.isbn,
            "price":info.price,
            "number": 1,
            "bookId": info.bookId,
            "userId": JSON.parse(userId).userId
        }
        //执行提交数据
        console.log(JSON.stringify(value));
        cartServce.addToCart(value);
        // }
    }

    render() {

        const {info} = this.props;

        if(info == null){
            return null;
        }
        console.log(info)
        return (
            <div className={"content"}>
                <div className={"book-detail"}>
                    <div className={"book-image"}><img alt="image" src={info.image} style={{width:"350px", height:"350px"}}/></div>
                    <div className={"descriptions"}>
                        <Descriptions>
                            <Descriptions.Item className={"title"} span={3}>{info.name}</Descriptions.Item>
                            <Descriptions.Item label={"作者"} span={3}>{info.author}</Descriptions.Item>
                            <Descriptions.Item label={"分类"} span={3}>{info.type}</Descriptions.Item>
                            <Descriptions.Item label={"ISBN"} span={3}>{info.isbn}</Descriptions.Item>
                            <Descriptions.Item label={"定价"} span={3}>{<span className={"price"}>￥{info.price}</span>}</Descriptions.Item>
                            <Descriptions.Item label={"状态 "} span={3}>{info.store !== "0"? <span className={"store"}>库存{info.inventory}件</span> : <span className={"store"}>无库存</span>}</Descriptions.Item>
                            <Descriptions.Item label={"作品简介"} span={3}>{info.description}</Descriptions.Item>
                        </Descriptions>
                    </div>
                </div>
                <div className={"button-groups"}>
                    <Button type="danger" icon={<ShoppingCartOutlined/>} size={"large"}
                            onClick={() => this.handleSubmit(info)}>
                        加入购物车
                    </Button>

                    <Button type="danger" icon={<PayCircleOutlined/>} size={"large"} style={{marginLeft:"15%"}}ghost>
                        立即购买
                    </Button>
                </div>
            </div>
        )
    }
}
export default BookDetail;