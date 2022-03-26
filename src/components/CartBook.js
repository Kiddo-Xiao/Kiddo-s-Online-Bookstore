import React from 'react';
import { Card } from 'antd';
import {history} from "../utils/history";
import {Link} from 'react-router-dom'

// const { Meta } = Card;

export class CartBook extends React.Component{

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
            <div className="cartMain">
                <li className="right-li">
                    <img src={image} alt={name}/>
                    <div className="description">
                        <div className="a-wrap">
                            <Link to="/book" >{name}</Link>
                            <p>by包子</p>
                        </div>
                        <p1>
                            <p style={{color: 'beige', margin: 0}}>{price}</p>
                            <button type="submit">Purchase</button>
                        </p1>
                    </div>
    
                </li>
            </div>
        );
    }

}

