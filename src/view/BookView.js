import React from 'react';
import {Layout, Carousel} from 'antd'
import {HeaderInfo} from "../components/HeaderInfo";
import {SideBar} from "../components/SideBar";
import {BookInfo} from "../components/BookInfo";
import {Footer} from "../components/Footer";
// import '../css/BookView.css'
import {withRouter} from "react-router-dom";

// const { Header, Content, Footer } = Layout;

class BookView extends React.Component {

    constructor(props) {
        super(props);

    }


    render() {

        const books = [
            {name:"Java编程思想", image:require('../img/home-book (1).jpg'), price:"￥99.4", isbn:"00001", store:"5"},
            {name:"悲惨世界", image:require('../img/home-book (2).jpg'), price:"￥98.4", isbn:"00002", store:"5"},
            {name:"永久记录", image:require('../img/home-book (3).jpg'), price:"￥96", isbn:"00003", store:"5"}
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
                        {/* book list */}
                        {/*<div className="right">*/}
                            <BookInfo {...books[0]}/>
                        {/*</div>*/}
                    </div>
                </div>
                <Footer/>

            </div>
            // </Layout>
        )
    }

}
export default BookView;