import React from 'react';
import { Layout, Menu, Breadcrumb,
    Divider,
    Input,
    Space,
    Table,
    Button} from 'antd';
import { UserOutlined, ShoppingCartOutlined, AppstoreOutlined, BankOutlined, AccountBookOutlined} from '@ant-design/icons';
import {withRouter, Link} from "react-router-dom";
import {history} from "../utils/history";
import '../css/newOrderView.css'
import Head from "../newComponents/Header";
import Foot from "../newComponents/Footer";
import * as orderService from "../services/orderService";
import * as userService from '../services/userService';

//订单--展示项目
const columns = [
    {
        title:'OrderId',
        dataIndex: 'orderId',
    },
    {
        title: 'Date',
        dataIndex: 'date',
    },
    {
        title: 'TotolPrice',
        dataIndex: 'order_price',
    },
    {
        title: 'BookName',
        dataIndex: 'name',
    },
    {
        title: 'number',
        dataIndex: 'number'
    },
    {
        title: 'SinglePrice',
        dataIndex: 'price'
    }
];

class Order extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const info = this.props.info;
        
        console.log(info);

        var orders=[];
        
        info.forEach((a)=>{
                // var orderItem=[];
                // orderItem.push(a);
                orders.push(
                    <div style={{ marginBottom: 16 }}>
                        <Table columns={columns} dataSource={a} pagination={false}/>
                    </div>
                );
            }
        )
        return (
            <div>
                {orders}
            </div>
        )

    }

}
export default Order;