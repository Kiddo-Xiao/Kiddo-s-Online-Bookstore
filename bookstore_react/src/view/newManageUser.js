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
import '../css/newHomeView.css'

import ManageUserList from "../newComponents/ManageUserList";
import Head from "../newComponents/Header";
import Foot from "../newComponents/Footer";
import * as userService from '../services/userService';


//侧边导航栏
const { SubMenu } = Menu;
//布局
const { Header, Content, Sider, Footer } = Layout;
//用户列表
const columns = [
    {
        title:'ID',
        dataIndex: 'userId',
    },
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Email',
        dataIndex: 'email',
    },
    {
        title: 'InBlacklist(0)',
        dataIndex: 'type',
    }
];


class newManageBook extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedRowKeys: [], // Check here to configure the default column
            loading: false,
            userData:[],
        };
    }
    componentDidMount() {
        //回调函数（后端数据写回+刷新state）
        const callback =  (data) => {
            this.setState({userData:data});
            console.log(this.state.userData);
        };
        //执行提交数据
        userService.getUserList(callback);
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

    //提交修改
    handleAdd=()=>{
        if(this.state.selectedRowKeys.length!=0) {
            const callback =  (data) => {//刷新用户列表的（添加黑名单的）回调函数
                this.setState(
                    {
                        userData: data,
                        selectedRowKeys: [],
                        selectedRows: [],
                        loading: false,
                    }
                );
            };
            this.state.selectedRows.forEach(
                ({userId}) => {
                    let userItem = {
                        "userId": userId
                    }
                    //发送userItem
                    console.log('【send user item】', userItem);
                    userService.addToBlacklist(userItem,callback);
                }
            )
        }
        else console.log('这行不应该出现(newCartView中)');
    }
    handleRemove=()=>{
        if(this.state.selectedRowKeys.length!=0) {
            const callback =  (data) => {//刷新用户列表的（添加黑名单的）回调函数
                this.setState(
                    {
                        userData: data,
                        selectedRowKeys: [],
                        selectedRows: [],
                        loading: false,
                    }
                );
            };
            this.state.selectedRows.forEach(
                ({userId}) => {
                    let userItem = {
                        "userId": userId
                    }
                    //发送userItem
                    console.log('【send user item】', userItem);
                    userService.removeFromBlacklist(userItem,callback);
                }
            )
        }
        else console.log('这行不应该出现(newCartView中)');
    }
    render() {
        const { selectedRowKeys,selectedRows,loading, userData} = this.state;
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
                        <Breadcrumb.Item>管理员</Breadcrumb.Item>
                        <Breadcrumb.Item>用户管理</Breadcrumb.Item>
                    </Breadcrumb>

                    <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                        <Sider width={200} className="site-layout-background">
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['sub1']}
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
                            {/*按钮*/}
                            <div style={{ marginBottom: 16 }}>
                                <Button type="primary" danger onClick={this.handleAdd} disabled={!hasSelected} >
                                    Add To Blacklist
                                </Button>
                                <span>{' '}</span>
                                <Button type="dashed" danger onClick={this.handleRemove} disabled={!hasSelected} >
                                    Remove From Blacklist
                                </Button>
                                <span>{' '}</span>
                                <Button type="primary" onClick={this.start} disabled={!hasSelected} loading={loading}>
                                    Reload
                                </Button>

                                <span style={{ marginLeft: 8 }}>
                                    {hasSelected ? `Selected ${selectedRowKeys.length}` : 'Please select at least one user.'}
                                </span>
                            </div>

                            {/*用户列表*/}
                            <Table
                                rowKey={userData=> userData.userId}
                                rowSelection={rowSelection}
                                columns={columns}
                                dataSource={userData}
                                pagination={true}
                                bordered
                            />
                        </Content>
                    </Layout>
                </Content>
                <Foot/>
            </Layout>

        )
    }

}
export default newManageBook;