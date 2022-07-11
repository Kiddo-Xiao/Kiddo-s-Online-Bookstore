
// import React from 'react';
// import { Layout, Menu, Breadcrumb,
//     Divider,
//     Input,
//     Space,
//     Table,
//     Button} from 'antd';
// import { UserOutlined, ShoppingCartOutlined, AppstoreOutlined, BankOutlined, AccountBookOutlined} from '@ant-design/icons';
// import {withRouter} from "react-router-dom";
// import '../css/newCartView.css'
// import Head from "../newComponents/Header";
// import Foot from "../newComponents/Footer";
//
// //侧边导航栏
// const { SubMenu } = Menu;
// //布局
// const { Header, Content, Sider, Footer } = Layout;
// //购物车--展示项目
// const columns = [
//     {
//         title: 'Image',
//         dataIndex: 'image',
//     },
//     {
//         title: 'Name',
//         dataIndex: 'name',
//     },
//     {
//         title: 'Price',
//         dataIndex: 'price',
//     },
//     {
//         title: 'Count',
//         dataIndex: 'count',
//     }
// ];
// const data=[];
// for(let i=1;i<=17;++i){
//     data.push({ key:i, image:require("../img/home-book (1).jpg"), name:"book "+i, price:"￥"+99.99, count:3});
// }
//
// class newDetailView extends React.Component {
//
//     state = {
//         selectedRowKeys: [], // Check here to configure the default column
//         loading: false,
//     };
//     start = () => {
//         this.setState({loading:true});
//         //??????????????
//         // ajax request after empty completing
//         setTimeout(() => {
//             this.setState({
//                 selectedRowKeys: [],
//                 loading: false,
//             });
//         }, 1000);
//     }
//
//     onSelectChange = selectedRowKeys => {
//         console.log('selectedRowKeys changed: ', selectedRowKeys);
//         this.setState({ selectedRowKeys });
//     };
//
//     render() {
//         console.log(data[0].image)
//
//         const {loading, selectedRowKeys} = this.state;
//         const rowSelection = {
//             selectedRowKeys,
//             onChange: this.onSelectChange,
//         };
//         const hasSelected = selectedRowKeys.length > 0;
//
//
//         return(
//             <Layout>
//                 {/* 头部导航栏 */}
//                 <Head/>
//                 <Content style={{ padding: '0 50px' }}>
//
//                     <Breadcrumb style={{ margin: '16px 0' }}>
//                         <Breadcrumb.Item>首页</Breadcrumb.Item>
//                         <Breadcrumb.Item>购物车</Breadcrumb.Item>
//                         {/*<Breadcrumb.Item>支付</Breadcrumb.Item>*/}
//                     </Breadcrumb>
//
//                     <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
//                         <Sider width={200} className="site-layout-background">
//                             <Menu
//                                 mode="inline"
//                                 defaultSelectedKeys={['sub1']}
//                                 style={{ height: '100%', borderRight: 0 }}
//                             >
//                                 <Menu.Item key="sub0" icon={<BankOutlined />} >书城首页</Menu.Item>
//                                 <Menu.Item key="sub1" icon={<ShoppingCartOutlined />} >购物车</Menu.Item>
//                                 <Menu.Item key="sub2" icon={<AccountBookOutlined />} >订单</Menu.Item>
//                                 <SubMenu key="sub3" icon={<UserOutlined />} title="个人中心">
//                                     <Menu.Item key="sub3-1">退出登录</Menu.Item>
//                                 </SubMenu>
//                                 <SubMenu key="sub4" icon={<AppstoreOutlined />} title="图书分类">
//                                     <Menu.Item key="sub4-1">儿童读物</Menu.Item>
//                                     <Menu.Item key="sub4-2">成长教育</Menu.Item>
//                                     <Menu.Item key="sub4-3">诗歌散文</Menu.Item>
//                                     <Menu.Item key="sub4-4">小说</Menu.Item>
//                                     <Menu.Item key="sub4-5">教材</Menu.Item>
//                                     <Menu.Item key="sub4-6">包子</Menu.Item>
//                                 </SubMenu>
//                             </Menu>
//                         </Sider>
//                         {/*<Divider type="vertical" />*/}
//
//                         {/* 中间 */}
//                         <Content className="site-layout-background"
//                                  style={{padding: 24, margin: 0, minHeight: 280,}}>
//
//
//                             <div style={{ marginBottom: 16 }}>
//                                 <Button type="primary" onClick={this.start} disabled={!hasSelected} loading={loading}>
//                                     Reload
//                                 </Button>
//                                 <span style={{ marginLeft: 8 }}>
//                                     {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
//                                 </span>
//                             </div>
//                             <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
//
//
//
//                         </Content>
//                     </Layout>
//                 </Content>
//                 <Foot/>
//             </Layout>
//         )
//     }
//
// }
// export default newDetailView;