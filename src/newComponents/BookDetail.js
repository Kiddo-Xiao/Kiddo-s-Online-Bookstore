import React from 'react';
import { Descriptions, Button } from 'antd';
import { PayCircleOutlined,ShoppingCartOutlined} from '@ant-design/icons';





export class BookDetail extends React.Component{


    render() {

        const {info} = this.props;

        if(info == null){
            return null;
        }
console.log(info)
        console.log(this.props)
        console.log(info.description)
        return (
            <div className={"content"}>
                <div className={"book-detail"}>
                    <div className={"book-image"}><img alt="image" src={info.image} style={{width:"350px", height:"350px"}}/></div>
                    <div className={"descriptions"}>
                        <Descriptions>
                            <Descriptions.Item className={"title"} span={3}>{info.name}</Descriptions.Item>
                            <Descriptions.Item label={"作者"} span={3}>{info.author}</Descriptions.Item>
                            <Descriptions.Item label={"分类"} span={3}>{info.type}</Descriptions.Item>
                            <Descriptions.Item label={"定价"} span={3}>{<span className={"price"}>{info.price}</span>}</Descriptions.Item>
                            <Descriptions.Item label={"状态 "} span={3}>{info.store !== "0"? <span>有货 <span className={"store"}>库存{info.store}件</span></span> : <span className={"status"}>无货</span>}</Descriptions.Item>
                            <Descriptions.Item label={"作品简介"} span={3}>{info.description}</Descriptions.Item>
                        </Descriptions>
                    </div>
                </div>
                <div className={"button-groups"}>
                    <Button type="danger" icon={<ShoppingCartOutlined/>} size={"large"}>
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