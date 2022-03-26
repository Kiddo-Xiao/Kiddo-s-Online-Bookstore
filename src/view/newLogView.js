import React from 'react';
import {Input, Space, Tooltip,Form, Button, Checkbox} from 'antd';
import { UserOutlined, InfoCircleOutlined,
    LockOutlined,EyeInvisibleOutlined, EyeTwoTone} from '@ant-design/icons';
import {withRouter, Link} from "react-router-dom";
import '../css/newLogView.css';
import {history} from "../utils/history";


import * as userService from '../services/userService';


class newLogView extends React.Component {

    constructor(props) {
        super(props);
    }

    handleSubmit = e => {
        e.preventDefault();//抑制按钮原本响应
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                userService.login(values);
            }
        });
    };



    render() {
        // const { getFieldDecorator } = this.props.form;

        const onFinish = (values: any) => {
            console.log('Success:', values);
        };
        const onFinishFailed = (errorInfo: any) => {
            console.log('Failed:', errorInfo);
        };

        return(
            <div className="login-page">
                <div className="login-container">
                    <div className="login-box">
                        <h1 className="page-title">Login</h1>
                        <div className="login-content">
                            {/*<WrappedLoginForm />*/}
                            <Form className="login-form"
                                  onFinish={onFinish} onFinishFaild={onFinishFailed}
                            >
                                <Form.Item name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
                                    {/*{getFieldDecorator('username', {*/}
                                    {/*    // 没填的时候由decorator装饰器处理，填了传给handleSubmit*/}
                                    {/*    rules: [{ required: true, message: 'Please input your username!' }],*/}
                                    {/*})(*/}
                                    <Input size="large"  placeholder="username"
                                           prefix={<UserOutlined className="site-form-item-icon" />}
                                           suffix={<Tooltip title="MaxSize:25"><InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} /></Tooltip>}
                                    />
                                    {/*// )}*/}
                                </Form.Item>
                                <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                                    {/*{getFieldDecorator('password', {*/}
                                    {/*    rules: [{ required: true, message: 'Please input your Password!' }],*/}
                                    {/*})(*/}
                                    <Input type="password" size="large" placeholder="password"
                                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                    />
                                    {/*)}*/}
                                </Form.Item>
                                <Form.Item style={{lineHeight:2}}>
                                    {/*{getFieldDecorator('remember', {*/}
                                    {/*    valuePropName: 'checked',*/}
                                    {/*    initialValue: true,*/}
                                    {/*})(<Checkbox>Remember me</Checkbox>)}*/}
                                    <Checkbox>Remember me</Checkbox>
                                    <a className="login-form-forgot" href="" >
                                        Forgot password
                                    </a>
                                    <Button type="primary" htmlType="submit" className="login-form-button"
                                            onClick={() => this.props.history.push('/newHome')}>
                                        Log in
                                    </Button>
                                    Or <a href="">register now!</a>
                                </Form.Item>
                            </Form>


                        </div>
                    </div>
                </div>
            </div>
        );
        
        // return(
        //     <div className="login">
        //         <Space direction="vertical" >
        //             <Input size="large"  placeholder="Enter your username"
        //                 prefix={<UserOutlined className="site-form-item-icon" />}
        //                 suffix={<Tooltip title="MaxSize:25"><InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} /></Tooltip>}/>
        //             <br />
        //             <Input.Password size="large" placeholder="input password"
        //             prefix={<LockOutlined className="site-form-item-icon" />}
        //             iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        //             />
        //
        //         </Space>
        //     </div>
        //
        // )
    }

}
export default newLogView;