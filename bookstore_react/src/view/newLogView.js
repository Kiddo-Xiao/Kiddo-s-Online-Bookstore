import React from 'react';
import {Input, Space, Tooltip,Form, Button, Checkbox, message} from 'antd';
import { UserOutlined, InfoCircleOutlined,
    LockOutlined,EyeInvisibleOutlined, EyeTwoTone} from '@ant-design/icons';
import {withRouter, Link} from "react-router-dom";
import '../css/newLogView.css';
import {history} from "../utils/history";
import * as userService from '../services/userService';

class newLogView extends React.Component {
    signinRef = React.createRef()
    signupRef = React.createRef()
    constructor(props) {
        super(props);
    }
    // 登录
    handleSignin=async()=>{
        if (this.signinRef && this.signinRef.current){ //很重要，在render后，signinRef才实例化
            try {
                // 使用 validateFields 获取多个字段值,若验证通过，则返回表单值数组
                const values = await this.signinRef.current.validateFields();

                //执行提交数据
                console.log('Received values of Signin: ', values);
                userService.login(values);

            } catch (errorInfo) {
                //若验证失败，返回数组{values:{表单值数组},errorFields:{验证未通过的表单值数组:{errors,name}}}
                console.log('Failed:', errorInfo);
            }

        }
    }
    // 注册
    handleSignup=async()=>{
        if (this.signupRef && this.signupRef.current){
            try {
                // 使用 validateFields 获取多个字段值,若验证通过，则返回表单值数组
                const values = await this.signupRef.current.validateFields();

                if(values.password!=values.confirmPassword){
                    message.error('请输入相同密码！');
                }else {//执行提交数据
                    console.log('Received values of Signup: ', values);
                    userService.createAccount(values);
                }

            } catch (errorInfo) {
                //若验证失败，返回数组{values:{表单值数组},errorFields:{验证未通过的表单值数组:{errors,name}}}
                console.log('Failed:', errorInfo);
            }
        }
    }
    
    //动效切换
    toSignup=()=>{
        console.log("before");
        var pinkBox=document.querySelector('.pinkbox');
        var signIn=document.querySelector('.signin');
        var signUp=document.querySelector('.signup');
        pinkBox.classList.add('move-signup');
        signIn.classList.add('nodisplay');
        signUp.classList.remove('nodisplay');
        console.log("after");
    }
    toSignin=()=>{
        var pinkBox=document.querySelector('.pinkbox');
        var signIn=document.querySelector('.signin');
        var signUp=document.querySelector('.signup');
        pinkBox.classList.remove('move-signup');
        signUp.classList.add('nodisplay');
        signIn.classList.remove('nodisplay');
    }


    render() {

        return(
            <div className="container">
                <div className="welcome">
                    <div className="pinkbox">
                        {/* 注册 */}
                        <div className="signup nodisplay">
                            <h1>Register</h1>
                            <Form className="register-form" ref={this.signupRef} >
                                <Form.Item name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
                                    <Input type="username" size="large" placeholder="username"
                                           prefix={<UserOutlined className="site-form-item-icon" />}/>
                                </Form.Item>
                                <Form.Item name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
                                    <Input type="email" size="large" placeholder="email"
                                           prefix={<UserOutlined className="site-form-item-icon" />}/>
                                </Form.Item>
                                <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
                                    <Input type="password" size="large" placeholder="password"
                                           prefix={<LockOutlined className="site-form-item-icon" />}
                                    />
                                </Form.Item>
                                <Form.Item name="confirmPassword" rules={[{ required: true, message: 'Please confirm your Password!' }]}>
                                    <Input type="password" size="large" placeholder="confirmPassword"
                                           prefix={<LockOutlined className="site-form-item-icon" />}
                                    />
                                </Form.Item>
                                <button  className="button submit" onClick={() => this.handleSignup()}>
                                    Create Account
                                </button>
                            </Form>
                        </div>
                        {/* 登录 */}
                        <div className="signin">
                            <h1>Sign In</h1>
                            <Form className="more-padding" ref={this.signinRef} >
                                <Form.Item name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
                                    <Input type="username" size="large" placeholder="username"
                                           prefix={<UserOutlined className="site-form-item-icon" />}/>
                                </Form.Item>
                                <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
                                    <Input type="password" size="large" placeholder="password"
                                           prefix={<LockOutlined className="site-form-item-icon" />}
                                    />
                                </Form.Item>
                                <button  className="button submit" onClick={() => this.handleSignin()}>
                                    Login
                                </button>
                            </Form>
                        </div>
                    </div>
                    <div className="leftbox">
                        <h2 className="title"><span>BOOKS</span>&amp;<br />BOUQUET</h2>
                        <p className="desc">Pick your perfect <span>bouquet</span></p>
                        <img className="flower smaller" src="https://hbimg.huabanimg.com/c09305167a883e60179a45374df73252304001359acca-W3qbYm_fw658/format/webp" />
                        <p className="account">Have an account?</p>
                        <button className="button" onClick={() => this.toSignin()} id="signin">Login</button>
                    </div>
                    <div className="rightbox">
                        <h2 className="title"><span>BOOKS</span>&amp;<br />BOUQUET</h2>
                        <p className="desc">Pick your perfect <span>bouquet</span></p>
                        <img className="flower" src="https://hbimg.huabanimg.com/b28be92c8198975a74ad656eba00b352c9b9e589819af-lDXUAS_fw658/format/webp" />
                        <p className="account">Don't have an account?</p>
                        <button className="button" onClick={() => this.toSignup()} id="signup">Sign Up</button>
                    </div>
                </div>
            </div>
        );
    }

}

export default newLogView;