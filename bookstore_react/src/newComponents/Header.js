import React from 'react';
import { Layout, Menu, Breadcrumb,
    Divider} from 'antd';
// import { UserOutlined, ShoppingCartOutlined, AppstoreOutlined, UnorderedListOutlined} from '@ant-design/icons';
import {withRouter} from "react-router-dom";

const { Header, Content, Sider, Footer } = Layout;

class Head extends React.Component {

    constructor(props) {
        super(props);

    }
    render() {

        return(
                {/* 头部导航栏 */},
            <Layout>
                <Header className="header">
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} >
                        {/*<Menu.Item key="1">首页</Menu.Item>*/}
                        {/*<Menu.Item key="2">还能有啥</Menu.Item>*/}
                        {/*<Menu.Item key="3">想不出来</Menu.Item>*/}
                            <Divider orientation="left" style={{color:"white"}}>
                                Hi,Kiddo~
                            </Divider>
                    </Menu>
                </Header>
            </Layout>
        )
    }

}
export default Head;