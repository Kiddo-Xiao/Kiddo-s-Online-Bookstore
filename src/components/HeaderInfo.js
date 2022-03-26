import React from 'react';
import { Router, Route,
    Switch,
    Redirect,
    Link} from 'react-router-dom';
// import { Row, Col } from 'antd';
// import logo from '../assets/logo.svg';
// import logoFont from '../assets/logo-name.svg';
// import {UserAvatar} from "./UserAvatar";
import {history} from "../utils/history";

export class HeaderInfo extends React.Component {

    OnClick = () => {
        // history.push("/");
    };


    render() {

        return (
            <div>
                <div className="header" >
                </div>
                <div className="navbar">
                    <Link to="/home" onClick={this.OnClick}>Home</Link>
                    <div className="search-container">
                        <form action="../html/Home.html">
                            <input id="search_txt" type="text" placeholder="Have a nice day:)" name="search"/>
                            <button id="search_btn" type="submit" onClick="isnull()">search</button>
                        </form>
                    </div>
                    <Link className="navbar-right" to="/login" onClick={this.OnClick}>LogOut</Link>
                    <Link className="navbar-right" to="/order" onClick={this.OnClick}>Order</Link>
                    <Link className="navbar-right" to="/cart" onClick={this.OnClick}>Cart</Link>
                </div>
            </div>
        )
    }
}