import React from 'react';
import { Card} from 'antd';
import {withRouter, Link} from "react-router-dom";
import {history} from "../utils/history";

const {Meta}=Card;

class BookListBook extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        const {info}=this.props;
        var path;
        var user=localStorage.getItem('user');
        var userType= JSON.parse(user).userType;
        if(userType==2)path = '/newManageBookDetail';
        else path = '/newDetail';
        return(

            <Link to={{pathname:path,state:info}}>
                <Card hoverable cover={<img alt={info.name} src={info.image} />}>
                    <Meta title={info.name} description={'￥'+info.price} />
                </Card>
            </Link>

            // </li>
        )
    }

}
export default BookListBook;