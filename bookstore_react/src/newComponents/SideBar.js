import React from 'react';
import { Layout, Menu, Breadcrumb,
    Divider} from 'antd';
import { UserOutlined, ShoppingCartOutlined, AppstoreOutlined, UnorderedListOutlined} from '@ant-design/icons';
import {withRouter} from "react-router-dom";
import {history} from "../utils/history";


const { Header, Content, Sider, Footer } = Layout;
// const {Header} = Layout;

class SideBar extends React.Component {

    constructor(props) {
        super(props);

    }
    render() {

        return(
            {/* 侧边栏 */},
                <Layout>
                    <Sider width={200} className="site-layout-background">
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                            <Menu.Item key="sub1" icon={<ShoppingCartOutlined />} >购物车</Menu.Item>
                            <Menu.Item key="sub2" icon={<UnorderedListOutlined />} >订单</Menu.Item>                            <SubMenu key="sub3" icon={<UserOutlined />} title="个人中心">
                            <Menu.Item key="3">退出登录</Menu.Item>
                        </SubMenu>
                            <SubMenu key="sub4" icon={<AppstoreOutlined />} title="图书分类">
                                <Menu.Item key="4">儿童读物</Menu.Item>
                                <Menu.Item key="5">成长教育</Menu.Item>
                                <Menu.Item key="6">诗歌散文</Menu.Item>
                                <Menu.Item key="7">小说</Menu.Item>
                                <Menu.Item key="8">教材</Menu.Item>
                                <Menu.Item key="9">包子</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>

                </Layout>
        )
    }

}
export default SideBar;