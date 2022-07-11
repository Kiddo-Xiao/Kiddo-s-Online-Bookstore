import React from 'react';
import { Layout, Menu, Breadcrumb,
    Divider,
    Carousel,
    Input,
    Space} from 'antd';
import { UserOutlined, ShoppingCartOutlined, AppstoreOutlined, BankOutlined, AccountBookOutlined} from '@ant-design/icons';
import {withRouter} from "react-router-dom";
import {history} from "../utils/history";

import BookList from "../newComponents/BookList";
import SearchBar from "../newComponents/SearchBar";

//布局
const { Header, Content, Sider, Footer } = Layout;

class SearchBookList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false,
        };
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
    }
    handleFilterTextChange(filterText) {
        this.setState({
            filterText: filterText
        });
    }
    handleInStockChange(inStockOnly) {
        this.setState({
            inStockOnly: inStockOnly
        })
    }


    render() {

        return(
            <div>
                {/*<p>???????????</p>*/}
                {/*搜索框*/}
                <SearchBar
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    onFilterTextChange={this.handleFilterTextChange}
                    onInStockChange={this.handleInStockChange}
                />
                {/*booklist*/}
                <BookList
                    // products={this.props.products}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                />
            </div>
        )
    }

}
export default SearchBookList;