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
import newManageUser from "./view/newManageUser";
import newManageOrder from "./view/newManageOrder";
import newManageHotBook from "./view/newManageHotBook";
import newManageHotUser from "./view/newManageHotUser";
import newManageBookDetail from "./view/newManageBookDetail";



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
                    <PrivateRoute  exact path="/newManageBook" component={newManageBook} />
                    <PrivateRoute  exact path="/newManageUser" component={newManageUser} />
                    <PrivateRoute  exact path="/newManageOrder" component={newManageOrder} />
                    <PrivateRoute  exact path="/newManageHotBook" component={newManageHotBook} />
                    <PrivateRoute  exact path="/newManageHotUser" component={newManageHotUser} />
                    <PrivateRoute  exact path="/newManageBookDetail" component={newManageBookDetail} />
                    <Redirect from="/*" to="/" />

                </Switch>

            </Router>
        );
    }
}
export default BasicRoute;