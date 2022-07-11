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
import { makeStyles } from '@material-ui/core/styles';
import '../css/newOrderView.css'
import Head from "../newComponents/Header";
import Foot from "../newComponents/Footer";
import * as orderService from "../services/orderService";
import * as userService from '../services/userService';

//热销--展示项目
const columns = [
    {
        title:'Name',
        width: '50%',
        dataIndex: 'name',
    },
    {
        title: 'Number',
        width: '50%',
        dataIndex: 'number',
    }
];
const useStyles = makeStyles({
    table: {
        minWidth: 500,
        maxWidth:500
    },
});
class HotBook extends React.Component {

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
                    <Table className={useStyles.table} columns={columns} dataSource={a} pagination={false}/>
                </div>);})
        console.log(this.props.info);
        
        return (
            <div>
                {orders}
            </div>
        )

    }

}
export default HotBook;