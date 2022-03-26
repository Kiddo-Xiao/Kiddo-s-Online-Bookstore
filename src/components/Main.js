import React from 'react'
import { Menu,Layout, Icon} from 'antd'
import {Book} from "../components/Book";
import {Slide} from "../components/Slide";
// import {history} from "../utils/history";


// const { SubMenu } = Menu;
// const { Sider } = Layout;

export class Main extends React.Component {
    

    render() {

        const books = [
            {name:"Java编程思想", image:require('../img/home-book (1).jpg'), price:"￥99.4", isbn:"00001", store:"5"},
            {name:"悲惨世界", image:require('../img/home-book (2).jpg'), price:"￥104", isbn:"00002", store:"5"},
            {name:"永久记录", image:require('../img/home-book (3).jpg'), price:"￥56.7", isbn:"00003", store:"5"},
            {name:"探索月球", image:require('../img/home-book (4).jpg'), price:"￥133.2", isbn:"00004", store:"5"},
            {name:"魔力的胎动", image:require('../img/home-book (5).jpg'), price:"￥35.9", isbn:"00005", store:"5"},
            {name:"我不怕这漫长的黑夜", image:require('../img/home-book (6).jpg'), price:"￥37.5", isbn:"00006", store:"5"}
        ];

        return (
            <div className="main">
                {/* swiper slides */}
                <Slide />
                {/* book list */}
                <div className="right">
                    <ul>
                        <Book {...books[0]}/>
                        <Book {...books[1]}/>
                        <Book {...books[2]}/>
                        <Book {...books[3]}/>
                        <Book {...books[4]}/>
                        <Book {...books[5]}/>
                    </ul>
                </div>
            </div>

        );
    }

}