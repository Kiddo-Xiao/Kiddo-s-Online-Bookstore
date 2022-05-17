import React from 'react';
import { Router, Route, 
    Switch,
    Redirect,
    Link} from 'react-router-dom';
// import {IndexRoute} from 'react-router'
import PrivateRoute from './PrivateRoute'
import LoginRoute from  './LoginRoute'
import {history} from "./utils/history";

import newLogView from "./view/newLogView";
import newHomeView from "./view/newHomeView";
import newDetailView from "./view/newDetailView";
import newCartView from "./view/newCartView";
import newOrderView from "./view/newOrderView";
import newManageBook from "./view/newManageBook";



class BasicRoute extends React.Component{
    constructor(props) {
        super(props);
        /*用于网站前进后退的记录（栈）*/
        history.listen((location, action) => {
            // clear alert on location change
            console.log(location,action);
        });
    }

    render(){
        return(
            //可用动态↓
            // history.push('/newLog'),
            <Router history={history}>
                <Switch>
                    <LoginRoute  exact path="/newLog" component={newLogView}/>
                    <PrivateRoute  exact path="/" component={newHomeView} />
                    <PrivateRoute  exact path="/newDetail" component={newDetailView} />
                    <PrivateRoute  exact path="/newCart" component={newCartView} />
                    <PrivateRoute  exact path="/newOrder" component={newOrderView} />
                    <PrivateRoute  exact path="/newManage" component={newManageBook} />
                    <Redirect from="/*" to="/" />

                </Switch>

            </Router>

            //老师版本↓
            // <Switch>
            //     前端实现判断登录的较复杂代码↓
            //     <PrivateRoute exact path="/" component={HomeView} />
            //     <LoginRoute exact path="/login" component={LoginView} />
            //     <PrivateRoute exact path="/bookDetails" component={BookView} />
            //     <Redirect from="/*" to="/" /> 所有重定向都导向login
            // </Switch>
        );
    }
}
export default BasicRoute;