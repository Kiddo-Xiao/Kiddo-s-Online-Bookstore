import React from 'react';
import { Layout, Menu, Breadcrumb,
    Divider} from 'antd';
// import { UserOutlined, ShoppingCartOutlined, AppstoreOutlined, UnorderedListOutlined} from '@ant-design/icons';
import {withRouter} from "react-router-dom";

const { Header, Content, Sider, Footer } = Layout;
// const {Header} = Layout;

class Foot extends React.Component {

    constructor(props) {
        super(props);

    }
    render() {

        return(
            {/* 头部导航栏 */},
                <Layout>
                    <Footer style={{ textAlign: 'center' }}>
                        -- Kiddo Production --<br/>
                        From 2022.2 till Now<br/>
                        E-mail:kiddo_Xiao@sjtu.edu.cn
                    </Footer>
                </Layout>
        )
    }

}
export default Foot;