import React from 'react';
import {Route, Redirect} from 'react-router-dom'
import * as userService from "./services/userService"
import {message} from "antd";

export default class PrivateRoute extends React.Component{
    constructor(props) {
        super(props);
        this.state = { /*有没有通过认证 以及是否曾经通过*/
            isAuthed: false,
            hasAuthed: false,
        };
    }

    checkAuth = (data) => {
        console.log(data);
        if (data.status >= 0) {/*通过认证且曾经认证过*/
            this.setState({isAuthed: true, hasAuthed: true});/*state改变即重画  静态：state写死*/
        } else {/*信息错误*/
            message.error(data.msg);
            localStorage.removeItem('user');
            this.setState({isAuthed: false, hasAuthed: true});
        }
    };


    componentDidMount() {/*privateroute对普通route做封装：进来构造后立刻检查*/
        userService.checkSession(this.checkAuth);
    }


    render() {

        const {component: Component, path="/",exact=false,strict=false} = this.props;

        console.log(this.state.isAuthed);

        if (!this.state.hasAuthed) {/*没认证过，啥都不画*/
            return null;
        }

        return <Route path={path} exact={exact} strict={strict} render={props => (
            this.state.isAuthed ? (/*通过认证直接画*/
                <Component {...props}/>
            ) : (
                <Redirect to={{/*没通过：redirect重定向到login*/
                    pathname: '/newLog',
                    state: {from: props.location}/*标记重定向前state的from页面*/
                }}/>
            )
        )}/>
    }
}

