import React from 'react';
import { Card, Col, Row} from 'antd';
import {withRouter} from "react-router-dom";
import {history} from "../utils/history";

import BookListBook from "./BookListBook"

class BookList extends React.Component {

    constructor(props) {
        super(props);

    }
    render() {

        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;
        const books=[];
        
        this.props.products.forEach((product) => {
            if (product.name.indexOf(filterText) === -1) {
                return;
            }
            if (inStockOnly && product.store<=0) {
                return;
            }
            books.push(
                // <Col span={6}><BookListBook {...books[0]}/></Col>
                <Col span={6}><BookListBook {...product}/></Col>
            );
        });
        
        return(
            <div className="site-card-wrapper">
                <Row gutter={[10,10]} align="middle" wrap={true}>
                    {books}
                    {/*<Col span={6}><BookListBook {...books[0]}/></Col>*/}
                    {/*<Col span={6}><BookListBook {...books[1]}/></Col>*/}
                    {/*<Col span={6}><BookListBook {...books[2]}/></Col>*/}
                    {/*<Col span={6}><BookListBook {...books[3]}/></Col>*/}
                    {/*<Col span={6}><BookListBook {...books[4]}/></Col>*/}
                    {/*<Col span={6}><BookListBook {...books[5]}/></Col>*/}
                    {/*<Col span={6}><BookListBook {...books[5]}/></Col>*/}
                    {/*<Col span={6}><BookListBook {...books[5]}/></Col>*/}

                </Row>
            </div>
        )
    }

}
export default BookList;