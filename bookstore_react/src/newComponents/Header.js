import React from 'react';
import { Layout, Menu, Breadcrumb,
    Divider, Image, Card,
    Input, Space} from 'antd';
// import { UserOutlined, ShoppingCartOutlined, AppstoreOutlined, UnorderedListOutlined} from '@ant-design/icons';
import {withRouter} from "react-router-dom";
import headBackground from "../img/IMG_2605.JPG"

const { Header, Content, Sider, Footer } = Layout;
var sectionStyle = {
    width: "100%",
    height: "1000px",
    backgroundImage: `url(${headBackground})`,
    backgroundRepeat:"no-repeat" ,
    backgroundSize: "cover",
    backgroundPosition: "center",
};
var headText = {
    paddingTop:"550 px",
};
const { TextArea } = Input;

class Head extends React.Component {

    constructor(props) {
        super(props);
    };

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
                        <Divider orientation="center" style={{color:"white"}}>
                            Welcome 2 Kiddo's Bookstore~
                        </Divider>

                    </Menu>
                </Header>
                <Content style={sectionStyle}>
                    <form className="show-form" style={{paddingTop:"550 px"}}>
                        <div className="show-box" contenteditable="true">
                            <input
                                type="text"
                                placeholder="Books are the river that irrigates the universe, the wellspring of wisdom, the solace of sorrow, and the bridle of discipline."
                                disabled={false}
                                size="large"
                                className="show-txt" />
                            <a className="show-btn">
                                <svg className="icon" viewBox="-100 -100 999 999" width="50px">
                                    <path
                                        d="M424.024 766.098c-91.619 0-177.754-35.679-242.538-100.464-133.735-133.737-133.735-351.344 0-485.078 64.784-64.784 150.919-100.462 242.538-100.462s177.754 35.677 242.539 100.462c133.733 133.735 133.735 351.34 0 485.078-64.785 64.783-150.922 100.464-242.539 100.464zM424.024 196.085c-60.637 0-117.643 23.613-160.523 66.489-88.512 88.51-88.51 232.53 0 321.040 42.876 42.876 99.885 66.491 160.523 66.491s117.643-23.614 160.523-66.491c88.51-88.51 88.51-232.53 0-321.040-42.876-42.876-99.885-66.489-160.523-66.489z"
                                        fill="#ffffb8" p-id="1176"></path>
                                    {/*<path*/}
                                    {/*    d="M886.838 943.904c-14.842 0-29.684-5.663-41.010-16.986l-261.286-261.285c-22.647-22.649-22.647-59.369 0-82.018 22.647-22.647 59.37-22.647 82.018 0l261.286 261.286c22.647 22.649 22.647 59.369 0 82.018-11.325 11.322-26.167 16.985-41.010 16.985z"*/}
                                    {/*    fill="#f4ffb8" p-id="1177"></path>*/}
                                </svg>
                            </a>
                        </div>
                    </form>
                </Content>

            </Layout>
        )
    }

}
export default Head;