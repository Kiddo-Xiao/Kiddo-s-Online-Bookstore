import React from 'react';
import { Layout, Menu, Breadcrumb,
    Divider,
    Carousel,
    Input,
    Space} from 'antd';
import { UserOutlined, ShoppingCartOutlined, AppstoreOutlined, BankOutlined, AccountBookOutlined} from '@ant-design/icons';
import {withRouter, Link} from "react-router-dom";
import {history} from "../utils/history";
import '../css/newDetailView.css'
import Head from "../newComponents/Header";
import Foot from "../newComponents/Footer";
import BookDetail from "../newComponents/BookDetail";
import * as userService from '../services/userService';

//侧边导航栏
const { SubMenu } = Menu;
//布局
const { Header, Content, Sider, Footer } = Layout;

class newDetailView extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props.history.location.state);
    }
    render() {
        return(
            <Layout>
                {/* 头部导航栏 */}
                <Head/>
                <Content style={{ padding: '0 50px' }}>

                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>首页</Breadcrumb.Item>
                        <Breadcrumb.Item>详情</Breadcrumb.Item>
                        {/*<Breadcrumb.Item>支付</Breadcrumb.Item>*/}
                    </Breadcrumb>

                    <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                        <Sider width={200} className="site-layout-background">
                            <Menu
                                mode="inline"
                                // defaultSelectedKeys={['sub0']}
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
                            <BookDetail info={this.props.history.location.state}/>

                        </Content>
                    </Layout>
                </Content>
                <Foot/>
            </Layout>

        )
    }

}
export default newDetailView;