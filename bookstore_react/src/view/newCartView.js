import React from 'react';
import { Layout, Menu, Breadcrumb,
    Divider,
    Input,
    Space,
    Table, Typography,
    Button} from 'antd';
import { UserOutlined, ShoppingCartOutlined, AppstoreOutlined, BankOutlined, AccountBookOutlined} from '@ant-design/icons';
import {withRouter, Link} from "react-router-dom";
import {history} from "../utils/history";
import '../css/newCartView.css'
import Head from "../newComponents/Header";
import Foot from "../newComponents/Footer";
import * as cartService from "../services/cartService";
import * as orderService from "../services/orderService";
import * as userService from '../services/userService';

//侧边导航栏
const { SubMenu } = Menu;
//布局
const { Header, Content, Sider, Footer } = Layout;
//购物车--展示项目
const columns = [
    {
        title:'ID',
        dataIndex: 'bookId',
    },
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'SinglePrice',
        dataIndex: 'price',
    },
    {
        title: 'Number',
        dataIndex: 'number',
    }
];

class newDetailView extends React.Component {

    constructor(props) {
        super(props);
        // console.log(this.props.history.location.state);
        this.state = {
            selectedRowKeys: [], // Check here to configure the default column
            // selectedRows:[],
            loading: false,
            cartData:[],
        };
    }


    componentDidMount() {
        var user=localStorage.getItem('user');

        var value={
            "userId": JSON.parse(user).userId
        }
        //回调函数（后端数据写回+刷新state）
        const callback =  (data) => {
            this.setState({cartData:data});
            console.log(this.state.cartData);

        };
        //执行提交数据
        cartService.getUserCart(value,callback);
    }

    //取消选择
    start = () => {
        this.setState({loading:true});
        // ajax request after empty completing
        setTimeout(() => {
            this.setState({
                selectedRowKeys: [],
                selectedRows: [],
                loading: false,
            });
        }, 1000);
    }
    //即时响应选择
    onSelectChange = (selectedRowKeys,selectedRows) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys,'selectedRows changed: ',selectedRows);
        this.setState({ selectedRowKeys , selectedRows});
    };

    //提交订单
    handlePurchase=()=>{
        if(this.state.selectedRowKeys.length!=0){
            const callback =  (data) => {//刷新购物车的回调函数
                console.log(data);
                this.setState(
                    {
                        cartData: data,
                        selectedRowKeys: [],
                        selectedRows: [],
                        loading: false,
                    }
                );
            };
            const getOrderId = (data) =>{//提交order的回调函数，获取orderId
                console.log('【return order】',data);
                let orderId= data.orderId;
                this.state.selectedRows.forEach(
                    ({ bookId, number}) => {
                        let orderItem={
                            "orderId":orderId,
                            "bookId":bookId,
                            "number":number
                        }
                        //发送orderItem
                        console.log('【send order item】',orderItem);
                        orderService.addOrderItem(orderItem);
                    }
                )
            }
            //生成订单order信息
            let user=localStorage.getItem('user');
            let userId=JSON.parse(user).userId;
            let totalPrice=0;
            this.state.selectedRows.forEach(
                ({ price, number}) => {
                    totalPrice += price * number;
                }
            )
            let date=new Date();
            let year=date.getFullYear();
            let month=date.getMonth();
            let day=date.getDate();
            let today = year.toString()+'-';
            today+= ((month+1)<10)? ('0'+(month+1).toString()):(month+1).toString();
            today+= (day<10)?   ('-0'+day.toString()):'-'+day.toString();
            var order={
                "userId":userId,
                "orderPrice":totalPrice,
                "date":today
            };
            console.log('【send order】' ,order);
            orderService.addOrderFromUser(order,getOrderId);
            //orderItem在addOrderFromUser的回调函数里
            cartService.clearCart(this.state.selectedRows, callback);
        }
        else console.log('这行不应该出现？？？');
    }

    render() {
        const { selectedRowKeys,selectedRows,loading, cartData} = this.state;
        const rowSelection = {
            selectedRowKeys,
            selectedRows,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;

        return(
            <Layout>
                {/* 头部导航栏 */}
                <Head/>
                <Content style={{ padding: '0 50px' }}>

                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>首页</Breadcrumb.Item>
                        <Breadcrumb.Item>购物车</Breadcrumb.Item>
                    </Breadcrumb>

                    <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                        <Sider width={200} className="site-layout-background">
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['sub1']}
                                style={{ height: '100%', borderRight: 0 }}
                            >
                                <Menu.Item key="sub0" icon={<BankOutlined />}
                                           onClick={() => this.props.history.push('/')}>
                                    书城首页</Menu.Item>
                                <Menu.Item key="sub1" icon={<ShoppingCartOutlined />}>
                                    <Link to={{pathname:'/newCart'}}>
                                        购物车
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="sub2" icon={<AccountBookOutlined />}>
                                    <Link to={{pathname:'/newOrder'}}>
                                        订单
                                    </Link>
                                </Menu.Item>
                                <SubMenu key="sub3" icon={<UserOutlined />} title="个人中心">
                                    <Menu.Item key="sub3-1"
                                               onClick={userService.logout}>
                                        退出登录</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub4" icon={<AppstoreOutlined />} title="图书分类">
                                    <Menu.Item key="sub4-1">儿童读物</Menu.Item>
                                    <Menu.Item key="sub4-2">成长教育</Menu.Item>
                                    <Menu.Item key="sub4-3">诗歌散文</Menu.Item>
                                    <Menu.Item key="sub4-4">小说</Menu.Item>
                                    <Menu.Item key="sub4-5">教材</Menu.Item>
                                    <Menu.Item key="sub4-6">包子</Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>

                        {/* 中间 */}
                        <Content className="site-layout-background"
                                 style={{padding: 24, margin: 0, minHeight: 280,}}>

                            {/*按钮*/}
                            <div style={{ marginBottom: 16 }}>
                                <Button type="primary" danger onClick={this.handlePurchase} disabled={!hasSelected} >
                                    Purchase
                                </Button>
                                <span>{' '}</span>
                                <Button type="primary" onClick={this.start} disabled={!hasSelected} loading={loading}>
                                    Reload
                                </Button>

                                <span style={{ marginLeft: 8 }}>
                                    {hasSelected ? `Selected ${selectedRowKeys.length}` : 'Please select at least one item.'}
                                </span>
                            </div>

                            {/*购物车列表*/}
                            <Table
                                rowKey={cartData=> cartData.bookId}
                                rowSelection={rowSelection}
                                columns={columns}
                                dataSource={cartData}
                                pagination={true}
                                bordered
                                footer={() => {
                                    let totalPrice = 0;
                                    cartData.forEach(
                                        ({bookId, price, number}) => {
                                            selectedRowKeys.forEach(
                                                (a) => {
                                                    totalPrice += (a == bookId) ? price * number : 0;
                                                }
                                            )
                                            console.log(totalPrice);
                                        }
                                    )
                                    return ('TotalPrice￥' + totalPrice);
                                }}
                            />
                        </Content>
                    </Layout>
                </Content>
                <Foot/>
            </Layout>
        )
    }

}
export default newDetailView;

