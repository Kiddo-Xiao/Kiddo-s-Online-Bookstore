import React from 'react';
import { Card } from 'antd';

import {Link} from 'react-router-dom'

// const { Meta } = Card;

export class Book extends React.Component{

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
                <div className="a-wrap">
                    {/*<a href="../html/Detail.html">{name}</a>*/}
                    <Link to="/book">{name}</Link>
                </div>
                <p>{price}</p>
            </li>
        );
    }

}

