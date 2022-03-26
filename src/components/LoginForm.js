import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import {withRouter} from "react-router-dom";
import 'antd/dist/antd.css';
// import * as userService from '../services/userService'


class LoginForm extends React.Component {
    // handleSubmit = e => {
    //     e.preventDefault();//抑制按钮原本响应
    //     this.props.form.validateFields((err, values) => {
    //         if (!err) {
    //             console.log('Received values of form: ', values);
    //             userService.login(values);
    //         }
    //     });
    // };

    // constructor(props) {
    //     super(props);
    //     this.toHome = this.submitToHome.bind(this)
    // }
    //
    // submitToHome(){
    //     <Route exact path="/" component={HomeView} />
    // }

    render() {
        // const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <p>
                    Username:<br />
                    <input type="text" name="Username" required="TRUE" />
                </p>
                <p>
                    Password:<br />
                    <input type="password" name="Password" required="TRUE" />
                </p>
                <p>
                    <button type="submit" >submit</button>
                </p>
                <p>
                    <a >Forget Password</a>
                </p>
                <p>
                    <a id="register" href="Register.html">Register</a>
                </p>
            </div>

            // <Form onSubmit={this.handleSubmit} className="login-form">
            //     <Form.Item>
            //         {getFieldDecorator('username', {
            //             /*没填的时候由decorator装饰器处理，填了传给handleSubmit*/
            //             rules: [{ required: true, message: 'Please input your username!' }],
            //         })(
            //             <Input
            //                 // prefix={}
            //                 placeholder="Username"
            //             />,
            //         )}
            //     </Form.Item>
            //     <Form.Item>
            //         {getFieldDecorator('password', {
            //             rules: [{ required: true, message: 'Please input your Password!' }],
            //         })(
            //             <Input
            //                 // prefix={}
            //                 type="password"
            //                 placeholder="Password"
            //             />,
            //         )}
            //     </Form.Item>
            //     <Form.Item>
            //         {getFieldDecorator('remember', {
            //             valuePropName: 'checked',
            //             initialValue: true,
            //         })(<Checkbox>Remember me</Checkbox>)}
            //         <a className="login-form-forgot" href="">
            //             Forgot password
            //         </a>
            //         <Button type="primary" htmlType="submit" className="login-form-button">
            //             Log in
            //         </Button>
            //         Or <a href="">register now!</a>
            //     </Form.Item>
            // </Form>
        );
    }
}

const WrappedLoginForm = (LoginForm);

export default WrappedLoginForm
// export default withRouter(WrappedLoginForm);

