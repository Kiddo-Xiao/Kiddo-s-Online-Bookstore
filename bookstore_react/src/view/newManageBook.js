import React from 'react';
import { Layout, Menu, Breadcrumb,
    Divider,
    Carousel,
    Input,
    Space} from 'antd';
import { UserOutlined, ShoppingCartOutlined, AppstoreOutlined, BankOutlined, AccountBookOutlined} from '@ant-design/icons';
import {withRouter, Link} from "react-router-dom";
import {history} from "../utils/history";
// import '../css/newManageBook.css'

import ManageBookList from "../newComponents/ManageBookList";
import Head from "../newComponents/Header";
import Foot from "../newComponents/Footer";


//侧边导航栏
const { SubMenu } = Menu;
//布局
const { Header, Content, Sider, Footer } = Layout;



class newManageBook extends React.Component {

    constructor(props) {
        super(props);

    }
    render() {
        const Books = [
            {name:"Java编程思想", author:"xxx", image:require('../img/home-book (1).jpg'), price:"￥99.4", type:"教材", isbn:"00001", store:"5", description:"好书！"},
            {name:"悲惨世界", author:"xxx", image:require('../img/home-book (2).jpg'), price:"￥104", type:"小说", isbn:"00002", store:"5", description:"好书！"},
            {name:"永久记录", author:"xxx", image:require('../img/home-book (3).jpg'), price:"￥56.7", type:"科普", isbn:"00003", store:"5", description:"好书！"},
            {name:"探索月球", author:"xxx", image:require('../img/home-book (4).jpg'), price:"￥133.2", type:"科普", isbn:"00004", store:"5", description:"好书！"},
            {name:"魔力的胎动", author:"xxx", image:require('../img/home-book (5).jpg'), price:"￥35.9", type:"小说", isbn:"00005", store:"5", description:"好书！"},
            {name:"我不怕这漫长的黑夜", author:"xxx", image:require('../img/home-book (6).jpg'), price:"￥37.5", type:"小说", isbn:"00006", store:"5", description:"好书！"},
            {name:"Java核心技术卷二", author:"xxx", image:require('../img/home-book (7).jpg'), price:"￥37.5", type:"教材", isbn:"00007", store:"5", description:"好书！"},
            {name:"EffectiveC++", author:"xxx", image:require('../img/home-book (8).jpg'), price:"￥37.5", type:"教材", isbn:"00008", store:"5", description:"好书！"},
            {name:"纳尼亚传奇（典藏版）", author:"xxx", image:require('../img/home-book (9).jpg'), price:"￥37.5", type:"小说", isbn:"00009", store:"5", description:"好书！"},
            {name:"纳尼亚传奇（典藏版）", author:"xxx", image:require('../img/home-book (10).jpg'), price:"￥37.5", type:"小说", isbn:"00010", store:"5", description:"好书！"},
            {name:"三体", author:"刘慈欣", image:require('../img/home-book (11).jpg'), price:"￥37.5", type:"小说", isbn:"00011", store:"5", description:"好书！"},
            {name:"机器学习", author:"xxx", image:require('../img/home-book (12).jpg'), price:"￥37.5", type:"教材", isbn:"00012", store:"5", description:"好书！"},
        ];
        return(
            <Layout>
                {/* 头部导航栏 */}
                <Head/>
                <Content style={{ padding: '0 50px' }}>

                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>首页</Breadcrumb.Item>
                    </Breadcrumb>

                    <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                        <Sider width={200} className="site-layout-background">
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['sub3-1']}
                                defaultOpenKeys={['sub3']}
                                style={{ height: '100%', borderRight: 0 }}
                            >
                                {/*onClick={() => this.props.history.push({pathname:'detail'})}*/}
                                <Menu.Item key="sub0" icon={<BankOutlined />}
                                           onClick={() => this.props.history.push('/')}>
                                    书城首页</Menu.Item>
                                <Menu.Item key="sub1" icon={<ShoppingCartOutlined />}
                                           onClick={() => this.props.history.push('/newCart')}>
                                    购物车</Menu.Item>
                                <Menu.Item key="sub2" icon={<AccountBookOutlined />}
                                           onClick={() => this.props.history.push('/newOrder')}>
                                    订单</Menu.Item>
                                <SubMenu key="sub3" icon={<UserOutlined />} title="管理员">
                                    <Menu.Item key="sub3-1"
                                               onClick={() => this.props.history.push('/newManage')}>
                                        书籍管理</Menu.Item>
                                    <Menu.Item key="sub3-2"
                                               onClick={() => this.props.history.push('/newLog')}>
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
                            {/* 搜索框 & BookList */}
                            {/*<SearchBookList products={Books}/>*/}

                            <ManageBookList/>
                            
                        </Content>
                    </Layout>
                </Content>
                <Foot/>
            </Layout>

        )
    }

}
export default newManageBook;