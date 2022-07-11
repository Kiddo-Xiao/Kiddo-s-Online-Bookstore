import React from 'react';
import { Layout, Menu, Breadcrumb,
    Divider,
    Carousel,
    Input,
    Button,
    Space} from 'antd';
import { UserOutlined, ShoppingCartOutlined, AppstoreOutlined, BankOutlined, AccountBookOutlined} from '@ant-design/icons';
import {withRouter, Link} from "react-router-dom";
import {history} from "../utils/history";
import '../css/newHomeView.css'

import Head from "../newComponents/Header";
import Foot from "../newComponents/Footer";
import HotBook from "../newComponents/HotBook";
import TextField from '@material-ui/core/TextField';
import TableContainer from '@material-ui/core/TableContainer';
import * as orderService from "../services/orderService";
import * as userService from '../services/userService';


//侧边导航栏
const { SubMenu } = Menu;
//布局
const { Header, Content, Sider, Footer } = Layout;



class newManageHotBook extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            orderData:[],
            from:  "2022-02-02",
            to:"2022-07-06"
        };
        this.handleFromChange=this.handleFromChange.bind(this);
        this.handleToChange=this.handleToChange.bind(this);
        this.dateSelectBook=this.dateSelectBook.bind(this);
    }

    componentDidMount() {
        var user=localStorage.getItem('user');

        var value={
            "from": this.state.from,
            "to": this.state.to
        }
        //回调函数（后端数据写回+刷新state）
        const callback =  (data) => {
            this.setState({orderData:data});
            console.log('【return user orders】',this.state.orderData);

        };
        //执行提交数据
        orderService.getHotSelling(value,callback)
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
        var user=localStorage.getItem('user');

        var value={
            "from": this.state.from,
            "to": this.state.to
        }
        //回调函数（后端数据写回+刷新state）
        const callback =  (data) => {
            this.setState({orderData:data});
            console.log('【return user orders】',this.state.orderData);

        };
        //执行提交数据
        orderService.getHotSelling(value,callback)
    }

    render() {
        const {orderData} = this.state;
 
        var item=[];
        orderData.forEach(
            ({name,num}) => {
                var orderItemData=[];
                        orderItemData.push({
                            name: name,
                            number: num
                        })
                //push添加至最后
                //unshift添加至最前
                item.push(orderItemData)
            })
        console.log(item);
        return(
            <Layout>
                {/* 头部导航栏 */}
                <Head/>
                <Content style={{ padding: '0 50px' }}>

                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>管理员</Breadcrumb.Item>
                        <Breadcrumb.Item>书籍管理</Breadcrumb.Item>
                    </Breadcrumb>

                    <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                        <Sider width={200} className="site-layout-background">
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['sub2-2']}
                                style={{ height: '100%', borderRight: 0 }}
                            >
                                <Menu.Item key="sub0" icon={<BankOutlined />}>
                                    <Link to={{pathname:'/newManageBook'}}>
                                        书籍管理
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="sub1" icon={<ShoppingCartOutlined />}>
                                    <Link to={{pathname:'/newManageUser'}}>
                                        用户管理
                                    </Link>
                                </Menu.Item>
                                <SubMenu key="sub2" icon={<AccountBookOutlined />} title="统计订单">
                                    <Menu.Item key="sub2-1">
                                        <Link to={{pathname:'/newManageOrder'}}>
                                            查询订单
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item key="sub2-2">
                                        <Link to={{pathname:'/newManageHotBook'}}>
                                            热销榜单
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item key="sub2-3">
                                        <Link to={{pathname:'/newManageHotUser'}}>
                                            消费榜单
                                        </Link>
                                    </Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub3" icon={<UserOutlined />} title="个人中心">
                                    <Menu.Item key="sub3-1"
                                               onClick={userService.logout}>
                                        退出登录</Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>

                        {/* 中间 */}
                        <Content className="site-layout-background"
                                 style={{padding: 24, margin: 0, minHeight: 280,}}>

                            <div>
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

                                <HotBook info={item}/>
                            </div>

                        </Content>
                    </Layout>
                </Content>
                <Foot/>
            </Layout>

        )
    }

}
export default newManageHotBook;