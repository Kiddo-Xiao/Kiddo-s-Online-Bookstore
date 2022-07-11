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
        width: '16%',
        dataIndex: 'orderId',
    },
    {
        title: 'Date',
        width: '16%',
        dataIndex: 'date',
    },
    {
        title: 'TotolPrice',
        width: '16%',
        dataIndex: 'order_price',
    },
    {
        title: 'BookName',
        width: '20%',
        dataIndex: 'name',
    },
    {
        title: 'number',
        width: '16%',
        dataIndex: 'number'
    },
    {
        title: 'SinglePrice',
        width: '16%',
        dataIndex: 'price'
    }
];

class Order extends React.Component {

    constructor(props) {
        super(props);
    }






    render() {
        var orders=[];
        this.props.info.forEach((a)=>{
            // var orderItem=[];
            // orderItem.push(a);
            orders.push(
                <div style={{ marginBottom: 16 }}>
                    <Table columns={columns} dataSource={a} pagination={false}/>
                </div>);})
            console.log(this.props.info);


        return (
            <div>
                {orders}
            </div>
        )

    }

}
export default Order;