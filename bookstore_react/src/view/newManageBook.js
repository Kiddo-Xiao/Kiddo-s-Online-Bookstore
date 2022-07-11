import React, { useContext, useEffect, useRef, useState } from 'react';
import { Layout, Menu, Breadcrumb,
    Divider,
    Carousel,
    Input,Button, Form, Popconfirm, Table,
    Space} from 'antd';
import { UserOutlined, ShoppingCartOutlined, AppstoreOutlined, BankOutlined, AccountBookOutlined} from '@ant-design/icons';
import {withRouter, Link} from "react-router-dom";
import {history} from "../utils/history";
import '../css/newHomeView.css'
import SearchBookList from "../newComponents/SearchBookList";
import Head from "../newComponents/Header";
import Foot from "../newComponents/Footer";
import * as userService from '../services/userService';
import * as bookService from '../services/bookService';


//侧边导航栏
const { SubMenu } = Menu;
//布局
const { Header, Content, Sider, Footer } = Layout;

//antd


class newManageBook extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bookData:[],
        };
    }

    componentDidMount() {
        var user=localStorage.getItem('user');

        var value={
            "userId": JSON.parse(user).userId
        }
        //回调函数（后端数据写回+刷新state）
        const callback =  (data) => {
            this.setState({bookData:data});
            console.log('【return book orders】',this.state.bookData);

        };
        //执行提交数据
        bookService.getBooks(value,callback)
    }

    render() {
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
                                defaultSelectedKeys={['sub0']}
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

                        {/*<Divider type="vertical" />*/}
                        {/* 中间 */}
                        <Content className="site-layout-background"
                                 style={{padding: 24, margin: 0, minHeight: 280,}}>
                            {/* 搜索框 & BookList */}
                            <SearchBookList/>

                            
                        </Content>
                    </Layout>
                </Content>
                <Foot/>
            </Layout>

        )
    }

}
export default newManageBook;