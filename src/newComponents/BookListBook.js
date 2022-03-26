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
        const {name,author,image,price,type,isbn,store,description}=this.props
        return(
            // console.log(this.props),
            // <li onClick={() => this.props.history.push({
            //     pathname:'/newDetail'
            // })}>
            // <Link to="/newDetail">
            <Link to={{pathname:'newDetail',state:this.props}}>
                <Card hoverable cover={<img alt={name} src={image} />}>
                    <Meta title={name} description={price} />
                </Card>
            </Link>

            // </li>
        )
    }

}
export default BookListBook;