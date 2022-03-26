import React from 'react';
import {Layout, Carousel} from 'antd'
import {HeaderInfo} from "../components/HeaderInfo";
import {SideBar} from "../components/SideBar";
import {Footer} from "../components/Footer";
import {CartBook} from "../components/CartBook";
// import '../css/CartView.css'
import {withRouter} from "react-router-dom";

// const { Header, Content, Footer } = Layout;

class CartView extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {

        const books = [
            {name:"Java编程思想", image:require('../img/home-book (1).jpg'), price:"￥99.4", isbn:"00001", store:"5"},
            {name:"悲惨世界", image:require('../img/home-book (2).jpg'), price:"￥104", isbn:"00002", store:"5"},
            {name:"永久记录", image:require('../img/home-book (3).jpg'), price:"￥56.7", isbn:"00003", store:"5"},
            {name:"探索月球", image:require('../img/home-book (4).jpg'), price:"￥133.2", isbn:"00004", store:"5"},
            {name:"魔力的胎动", image:require('../img/home-book (5).jpg'), price:"￥35.9", isbn:"00005", store:"5"},
            {name:"我不怕这漫长的黑夜", image:require('../img/home-book (6).jpg'), price:"￥37.5", isbn:"00006", store:"5"}
        ];

        return(
            // <Layout className="layout">
            <div>
                <header>
                    <HeaderInfo/>
                </header>
                <div className="row">
                    <SideBar/>
                    {/*Main*/}
                    <div className="main">
                        {/* cart list */}
                        {/*<div className="right">*/}
                        <ul>
                            <CartBook {...books[0]}/>
                            <CartBook {...books[1]}/>
                            <CartBook {...books[2]}/>
                            <CartBook {...books[3]}/>
                            <CartBook {...books[4]}/>
                            <CartBook {...books[5]}/>
                        </ul>
                        {/*</div>*/}
                    </div>
                </div>
                <Footer/>

            </div>
            // </Layout>
        )
    }

}
export default CartView;