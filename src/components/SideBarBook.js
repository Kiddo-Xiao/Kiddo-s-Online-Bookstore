import React from 'react'
import { Menu,Layout, Icon} from 'antd'
import {history} from "../utils/history";

export class SideBarBook extends React.Component {

    constructor(props) {
        super(props);
    }
    
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
        const {name,image,price} = this.props
        return (
                <div className="responsive">
                    <div className="img">
                        <a target="_blank" href="../html/Detail.html">
                            <img src={image} alt="Java编程思想"/>
                        </a>
                        <div className="desc"><p>{name}</p><p>{price}</p></div>
                    </div>
                </div>
        );
    }

}