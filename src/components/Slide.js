import React from 'react'
import { Menu,Layout, Icon} from 'antd'
import {history} from "../utils/history";

export class Slide extends React.Component {

    constructor(props) {
        super(props);
    }
    
    bookOnClick = () => {
        // history.push("/");
    };

    render() {
        const {name,image,price} = this.props
        return (

            <div className="swiper-border">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <a href="../html/Detail.html"><img src={require("../img/home-book (1).jpg")} alt="" /></a>
                        </div>
                        <div className="swiper-slide">
                            <a href="../html/Detail.html"><img src={require("../img/home-book (2).jpg")} alt="" /></a>
                        </div>
                        <div className="swiper-slide">
                            <a href="../html/Detail.html"><img src={require("../img/home-book (3).jpg")} alt="" /></a>
                        </div>
                        <div className="swiper-slide">
                            <a href="../html/Detail.html"><img src={require("../img/home-book (4).jpg")} alt="" /></a>
                        </div>
                        {/* 为了实现无限轮播 将第一张图复制一份放在最后 */}
                        <div className="swiper-slide">
                            <a href="../html/Detail.html"><img src={require("../img/home-book (1).jpg")} alt="" /></a>
                        </div>
                    </div>
                </div>
                <p>👆Hot Selling👆</p>
            </div>
        );
    }

}
