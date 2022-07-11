import React from 'react';
import { Card, Col, Row, List} from 'antd';
import {withRouter} from "react-router-dom";
import {history} from "../utils/history";
import {getBooks} from "../services/bookService";


import BookListBook from "./BookListBook"

class BookList extends React.Component {

    constructor(props) {
        super(props);
        this.state={products:[]};
    }

    componentDidMount() {

        const callback =  (data) => {
            this.setState({products:data});
        };

        getBooks({"search":null}, callback);

    }

    render() {
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;
        const books=[];

        for(let i in this.state.products){
            // console.log(this.state.products[i]);
            if (this.state.products[i].name.indexOf(filterText) === -1)
                continue;
            if (inStockOnly && this.state.products[i].store<=0)
                continue;
            books.push(
                this.state.products[i]
                // <Col span={6}><BookListBook info={this.state.products[i]}/></Col>
            );
        }

        return(
            <div className="site-card-wrapper">
                {/*<Row gutter={[10,10]} align="middle" wrap={true} >*/}
                {/*    {books}*/}
                {/*</Row>*/}

                <List
                    grid={{gutter: 10, column: 4}}
                    dataSource={books}
                    pagination={{
                        onChange: page => {
                            console.log(page);
                        },
                        pageSize: 16,
                    }}

                    renderItem={item => (
                        <List.Item>
                            <BookListBook info={item}/>
                        </List.Item>
                    )}
                />
            </div>
        )
    }

}
export default BookList;