import React from 'react';
import { Card } from 'antd';

import {Link} from 'react-router-dom'

// const { Meta } = Card;

export class BookInfo extends React.Component{

    constructor(props) {
        super(props);
        // this.state = {books:[]};
        // this.bookImg = {a};
        // this.name= name;
        // this.price=1;
    }

    render() {
        const {name,image,price} = this.props
        
        return (
            <li className="right-li">
                <img src={image} alt={name}/>
                {/*                    <div class="a-wrap">*/}
                {/*                        <a href="">《name》</a>*/}
                {/*                    </div>*/}
                <h3>{name}</h3>
                <div className="price">
                    <p1>{price}</p1>
                    <br/>
                </div>
                <div className="detail">
                    <p2>作者：Bruce Eckel<br/>
                        作品简介Java学习必读经典,殿堂级著作！赢得了全球程序员的广泛赞誉。
                    </p2>
                </div>
                <p>
                    <button type="submit">Add Cart</button>
                    <button type="submit">Purchase</button>
                </p>
            </li>

        );
    }

}