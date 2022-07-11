import React from 'react';
import { Layout, Menu, Breadcrumb,
    Divider,
    Input,
    Space,
    Table,
    Button,
    Pagination} from 'antd';
import { UserOutlined, ShoppingCartOutlined, AppstoreOutlined, BankOutlined, AccountBookOutlined} from '@ant-design/icons';
import {withRouter, Link} from "react-router-dom";
import {history} from "../utils/history";
import '../css/newOrderView.css'
import Head from "../newComponents/Header";
import Foot from "../newComponents/Footer";
import Order from "../newComponents/Order";
import TextField from '@material-ui/core/TextField';
import TableContainer from '@material-ui/core/TableContainer';
import * as orderService from "../services/orderService";
import * as userService from '../services/userService';

//侧边导航栏
const { SubMenu } = Menu;
//布局
const { Header, Content, Sider, Footer } = Layout;

class newOrderView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            orderData:[],
            targetBookName: "",
            from:  "2022-02-02",
            to:"2022-07-06"
        };
        this.updateInput = this.updateInput.bind(this);
        this.search = this.search.bind(this);
        this.handleFromChange=this.handleFromChange.bind(this);
        this.handleToChange=this.handleToChange.bind(this);
        this.dateSelectBook=this.dateSelectBook.bind(this);
    }

    componentDidMount() {
        var user=localStorage.getItem('user');

        var value={
            "userId": JSON.parse(user).userId
        }
        //回调函数（后端数据写回+刷新state）
        const callback =  (data) => {
            this.setState({orderData:data});
            console.log('【return user orders】',this.state.orderData);

        };
        //执行提交数据
        orderService.getUserOrders(value,callback)
    }
//书名过滤
    reset=()=>{
        var user=localStorage.getItem('user');

        var value={
            "userId": JSON.parse(user).userId
        }
        //回调函数（后端数据写回+刷新state）
        const callback =  (data) => {
            this.setState({orderData:data});
            console.log('【return user orders】',this.state.orderData);

        };
        //执行提交数据
        orderService.getUserOrders(value,callback)
    }
    updateInput(e) {
        console.log(e.target.value);

        this.state.targetBookName = e.target.value;
        console.log(this.state.targetBookName);
    }
    search() {
        if (this.state.targetBookName.length === 0) {
            alert("please input target book name!");
            return;
        }
        var allBook = this.state.orderData;
        var result = [];
        for (var i in allBook) {
            for (var j in allBook[i].orderItemList) {
                if (allBook[i].orderItemList[j].book&&allBook[i].orderItemList[j].book.name == this.state.targetBookName) {
                    result.push(allBook[i]);
                    break;
                }
            }
        }
        this.state.orderData = result;
        this.setState({orderData:result});
    }
//日期过滤
    handleFromChange=(e)=>{
        this.setState({
            from:e.target.value
        })
        console.log(this.state.from);
    }
    handleToChange=(e)=>{
        this.setState({
            to:e.target.value
        })
        console.log(this.state.to);
    }
    dateSelectBook=()=>{
        var i;
        var to=this.state.to;
        var arr=to.split("-");
        for(i=1;i<=2;i++)if(arr[i].length===1)arr[i]="0"+arr[i];
        var newTo=arr[0]+'-'+arr[1]+'-'+arr[2];

        var from=this.state.from;
        var arr2=from.split("-");
        for(i=1;i<=2;i++)if(arr2[i].length===1)arr2[i]="0"+arr2[i];
        var newFrom=arr2[0]+'-'+arr2[1]+'-'+arr2[2];

        var allBook = this.state.orderData;
        var result = [];
        for (var i in allBook) {
            if (allBook[i].date&&allBook[i].date >= this.state.from &&allBook[i].date <= this.state.to ) {
               result.push(allBook[i]);
           }
        }
        this.state.orderData = result;
        this.setState({orderData:result});
    }

    render() {
        const {orderData} = this.state;
        // console.log(orderData);

        // 加载数据源datasource：每一项订单
        var item=[];
        orderData.forEach(
            ({date,orderId,order_price ,orderItemList}) => {
                var orderItemData=[];
                orderItemList.forEach(
                    ({book,book_num}) => {
                        orderItemData.push({
                            date: date,
                            orderId: orderId,
                            order_price: order_price,
                            name: book.name,
                            price: book.price,
                            number: book_num
                        })
                    }
                )
                //push添加至最后
                //unshift添加至最前
                item.unshift(orderItemData)
            })
        console.log(item);

        return(
            <Layout>
                {/* 头部导航栏 */}
                <Head/>
                <Content style={{ padding: '0 50px' }}>

                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>首页</Breadcrumb.Item>
                        <Breadcrumb.Item>订单</Breadcrumb.Item>
                        {/*<Breadcrumb.Item>支付</Breadcrumb.Item>*/}
                    </Breadcrumb>

                    <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                        <Sider width={200} className="site-layout-background">
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['sub2']}
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
                        {/*<Divider type="vertical" />*/}

                        {/* 中间 */}
                        <Content className="site-layout-background"
                                 style={{padding: 24, margin: 0, minHeight: 280,}}>

                            <div>
                                <TableContainer align="center" marginTop="10">
                                <input align="center" type="text" onChange={this.updateInput} placeholder="Book Name?" ></input>
                                <Button onClick={this.search} className="">Search</Button>
                                <Button onClick={this.reset}>Reset</Button>
                                </TableContainer>


                                <TableContainer align="center" marginTop="10">
                                    <TextField
                                        id="date"
                                        label="From"
                                        type="date"
                                        defaultValue="2022-02-02"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        onChange={this.handleFromChange}
                                    />

                                    <TextField
                                        id="date"
                                        label="To"
                                        type="date"
                                        ref="myField"
                                        defaultValue="2022-07-06"
                                        onChange={this.handleToChange}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}

                                    />
                                    <Button onClick={this.dateSelectBook}>Select</Button>
                                </TableContainer>
                                
                                <Order info={item}/>
                            </div>

                            {/*<Pagination defaultCurrent={1} total={10} pageSize={3} />*/}

                        </Content>
                    </Layout>
                </Content>
                <Foot/>
            </Layout>
        )
    }

}
export default newOrderView;