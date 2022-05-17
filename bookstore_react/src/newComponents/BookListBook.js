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
        // console.log(this.props);
        return(
            // console.log(this.props),
            // <li onClick={() => this.props.history.push({
            //     pathname:'/newDetail'
            // })}>
            // <Link to="/newDetail">
            <Link to={{pathname:'/newDetail',state:info}}>
                <Card hoverable cover={<img alt={info.name} src={info.image} />}>
                    <Meta title={info.name} description={'￥'+info.price} />
                </Card>
            </Link>

            // </li>
        )
    }

}
export default BookListBook;