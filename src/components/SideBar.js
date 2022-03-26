import React from 'react'
import { Menu,Layout, Icon} from 'antd'
import {history} from "../utils/history";
import {SideBarBook} from "./SideBarBook"


// const { SubMenu } = Menu;
// const { Sider } = Layout;

export class SideBar extends React.Component {

    // state = {
    //     collapsed: false,
    // };
    //
    // onCollapse = collapsed => {
    //     if(collapsed){
    //
    //     }
    //     console.log(collapsed);
    //     this.setState({ collapsed });
    // };
    //
    bookOnClick = () => {
        // history.push("/");
    };

    render() {

        const books = [
            {name:"Java编程思想", image:require('../img/home-book (1).jpg'), price:"￥99.4", isbn:"00001", store:"5"},
            {name:"悲惨世界", image:require('../img/home-book (2).jpg'), price:"￥98.4", isbn:"00002", store:"5"},
            {name:"永久记录", image:require('../img/home-book (3).jpg'), price:"￥96", isbn:"00003", store:"5"}
            ];

        return (
            <div className="side">
                <h2>★Kiddo's recommendation★</h2>


                <SideBarBook {...books[0]}/>
                <SideBarBook {...books[1]}/>
                <SideBarBook {...books[2]}/>

            </div>
        );
    }

}