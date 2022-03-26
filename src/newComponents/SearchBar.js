import React from 'react';
import { Layout, Menu, Breadcrumb,
    Divider,
    Carousel,
    Input,
    Space} from 'antd';
import { UserOutlined, ShoppingCartOutlined, AppstoreOutlined, BankOutlined, AccountBookOutlined} from '@ant-design/icons';

const { Header, Content, Sider, Footer } = Layout;
//搜索框
// const { Search } = Input;

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
    }

    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value);
    }

    handleInStockChange(e) {
        this.props.onInStockChange(e.target.checked);
    }
    
    render() {

        return(
             // 搜索框
            <form>
                <Input
                    type="text"
                    placeholder="input the name of the book that you want~"
                    allowClear
                    value={this.props.filterText}
                    // enterButton="Search"
                    size="large"
                    onChange={this.handleFilterTextChange}
                />
                <p style={{color:"grey"}}>
                    <input 
                        type="checkbox"
                        checked={this.props.inStockOnly}
                        onChange={this.handleInStockChange}
                    />
                    {' '}Only show bools in stock
                </p>
            </form>
        )
    }

}
export default SearchBar;