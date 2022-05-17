import React from 'react';
import { Layout, Menu, Breadcrumb,
    Divider,
    Carousel,
    Input,
    Space} from 'antd';
import { UserOutlined, ShoppingCartOutlined, AppstoreOutlined, BankOutlined, AccountBookOutlined} from '@ant-design/icons';
import '../css/searchBox.css'
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
                <div className="search-box">
                    <input
                        type="text"
                        placeholder="Input the bookname~"
                        allowClear
                        value={this.props.filterText}
                        size="large"
                        onChange={this.handleFilterTextChange}
                        className="search-txt" />
                        <a className="search-btn">
                            <svg className="icon" viewBox="0 0 1024 1024" width="30px">
                                <path
                                    d="M424.024 766.098c-91.619 0-177.754-35.679-242.538-100.464-133.735-133.737-133.735-351.344 0-485.078 64.784-64.784 150.919-100.462 242.538-100.462s177.754 35.677 242.539 100.462c133.733 133.735 133.735 351.34 0 485.078-64.785 64.783-150.922 100.464-242.539 100.464zM424.024 196.085c-60.637 0-117.643 23.613-160.523 66.489-88.512 88.51-88.51 232.53 0 321.040 42.876 42.876 99.885 66.491 160.523 66.491s117.643-23.614 160.523-66.491c88.51-88.51 88.51-232.53 0-321.040-42.876-42.876-99.885-66.489-160.523-66.489z"
                                    fill="#f4ffb8" p-id="1176"></path>
                                <path
                                    d="M886.838 943.904c-14.842 0-29.684-5.663-41.010-16.986l-261.286-261.285c-22.647-22.649-22.647-59.369 0-82.018 22.647-22.647 59.37-22.647 82.018 0l261.286 261.286c22.647 22.649 22.647 59.369 0 82.018-11.325 11.322-26.167 16.985-41.010 16.985z"
                                    fill="#f4ffb8" p-id="1177"></path>
                            </svg>
                        </a>
                </div>
            </form>
        )
    }
}
export default SearchBar;