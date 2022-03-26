import React from 'react';
import { Layout, Menu, Breadcrumb,
    Divider,
    Input,
    Space,
    Table,
    Button} from 'antd';
import { useContext, useState, useEffect, useRef } from 'react';
import { Popconfirm, Form, InputRef } from 'antd';
import { FormInstance } from 'antd/lib/form';
import { UserOutlined, ShoppingCartOutlined, AppstoreOutlined, BankOutlined, AccountBookOutlined} from '@ant-design/icons';
import {withRouter} from "react-router-dom";
import '../css/newCartView.css'
// import BookList from "../newComponents/BookList";
import Head from "../newComponents/Header";
import Foot from "../newComponents/Footer";
// import BookDetail from "../newComponents/BookDetail";

//侧边导航栏
const { SubMenu } = Menu;
//布局
const { Header, Content, Sider, Footer } = Layout;



const EditableContext = React.createContext<FormInstance<any>||null>(null);

interface Item {
    key: string;
    image: string;
    name: string;
    price: string;
    count: string;
}

interface EditableRowProps {
    index: number;
}

const EditableRow: React.FC<EditableRowProps> = ({ index, ...props }) => {
    const [form] = Form.useForm();
    return (
        <Form form={form} component={false}>
            <EditableContext.Provider value={form}>
                <tr {...props} />
            </EditableContext.Provider>
        </Form>
    );
};

interface EditableCellProps {
    title: React.ReactNode;
    editable: boolean;
    children: React.ReactNode;
    dataIndex: keyof Item;
    record: Item;
    handleSave: (record: Item) => void;
}

const EditableCell: React.FC<EditableCellProps> = ({
                                                       title,
                                                       editable,
                                                       children,
                                                       dataIndex,
                                                       record,
                                                       handleSave,
                                                       ...restProps
                                                   }) => {
    const [editing, setEditing] = useState(false);
    const inputRef = useRef<InputRef>(null);
    const form = useContext(EditableContext)!;

    useEffect(() => {
        if (editing) {
            inputRef.current!.focus();
        }
    }, [editing]);

    const toggleEdit = () => {
        setEditing(!editing);
        form.setFieldsValue({ [dataIndex]: record[dataIndex] });
    };

    const save = async () => {
        try {
            const values = await form.validateFields();

            toggleEdit();
            handleSave({ ...record, ...values });
        } catch (errInfo) {
            console.log('Save failed:', errInfo);
        }
    };

    let childNode = children;

    if (editable) {
        childNode = editing ? (
            <Form.Item
                style={{ margin: 0 }}
                name={dataIndex}
                rules={[
                    {
                        required: true,
                        message: `${title} is required.`,
                    },
                ]}
            >
                <Input ref={inputRef} onPressEnter={save} onBlur={save} />
            </Form.Item>
        ) : (
            <div className="editable-cell-value-wrap" style={{ paddingRight: 24 }} onClick={toggleEdit}>
                {children}
            </div>
        );
    }

    return <td {...restProps}>{childNode}</td>;
};

type EditableTableProps = Parameters<typeof Table>[0];

interface DataType {
    key: React.Key;
    name: string;
    age: string;
    address: string;
}

interface EditableTableState {
    dataSource: DataType[];
    count: number;
}

type ColumnTypes = Exclude<EditableTableProps['columns'], undefined>;

class newDetailView extends React.Component<EditableTableProps, EditableTableState> {
    columns: (ColumnTypes[number] & { editable?: boolean; dataIndex: string })[];

    constructor(props: EditableTableProps) {
        super(props);

        this.columns = [
            {
                title: 'Image',
                dataIndex: 'image',
            },
            {
                title: 'Name',
                dataIndex: 'name',
            },
            {
                title: 'Price',
                dataIndex: 'price',
            },
            {
                title: 'Count',
                dataIndex: 'count',
            }
        ];

        this.state = {
            selectedRowKeys: [], // Check here to configure the default column
            loading: false,
            dataSource: [],
            count: 2,
        };

        for(let i=1;i<=17;++i){
            this.state.dataSource.push({ key:i, image:require("../img/home-book (1).jpg"), name:"book "+i, price:"￥"+99.99,});
        }
    }

    start = () => {
        this.setState({loading:true});
        //??????????????
        // ajax request after empty completing
        setTimeout(() => {
            this.setState({
                selectedRowKeys: [],
                loading: false,
            });
        }, 1000);
    }

    onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    };

    // 编辑
    handleDelete = (key: React.Key) => {
        const dataSource = [...this.state.dataSource];
        this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
    };
    handleSave = (row: DataType) => {
        const newData = [...this.state.dataSource];
        const index = newData.findIndex(item => row.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, {
            ...item,
            ...row,
        });
        this.setState({ dataSource: newData });
    };

    //render-return()
    render() {
        // console.log(data[0].image)
        //选择
        const {loading, selectedRowKeys,dataSource} = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;

        //编辑
        const components = {
            body: {
                row: EditableRow,
                cell: EditableCell,
            },
        };
        const columns = this.columns.map(col => {
            if (!col.editable) {
                return col;
            }
            return {
                ...col,
                onCell: (record: DataType) => ({
                    record,
                    editable: col.editable,
                    dataIndex: col.dataIndex,
                    title: col.title,
                    handleSave: this.handleSave,
                }),
            };
        });

        return(
            <Layout>
                {/* 头部导航栏 */}
                <Head/>
                <Content style={{ padding: '0 50px' }}>

                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>首页</Breadcrumb.Item>
                        <Breadcrumb.Item>详情</Breadcrumb.Item>
                        {/*<Breadcrumb.Item>支付</Breadcrumb.Item>*/}
                    </Breadcrumb>

                    <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                        <Sider width={200} className="site-layout-background">
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['sub0']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%', borderRight: 0 }}
                            >
                                <Menu.Item key="sub0" icon={<BankOutlined />} >书城首页</Menu.Item>
                                <Menu.Item key="sub1" icon={<ShoppingCartOutlined />} >购物车</Menu.Item>
                                <Menu.Item key="sub2" icon={<AccountBookOutlined />} >订单</Menu.Item>
                                <SubMenu key="sub3" icon={<UserOutlined />} title="个人中心">
                                    <Menu.Item key="sub3-1">退出登录</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub4" icon={<AppstoreOutlined />} title="图书分类">
                                    <Menu.Item key="sub4-1">儿童读物</Menu.Item>
                                    <Menu.Item key="sub4-2">成长教育</Menu.Item>
                                    <Menu.Item key="sub4-3">诗歌散文</Menu.Item>
                                    <Menu.Item key="sub4-4">小说</Menu.Item>
                                    <Menu.Item key="sub4-5">教材</Menu.Item>
                                    <Menu.Item key="sub4-6">包子</Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        {/*<Divider type="vertical" />*/}

                        {/* 中间 */}
                        <Content className="site-layout-background"
                                 style={{padding: 24, margin: 0, minHeight: 280,}}>

                            <div style={{ marginBottom: 16 }}>
                                <Button type="primary" onClick={this.start} disabled={!hasSelected} loading={loading}>
                                    Reload
                                </Button>
                                <span style={{ marginLeft: 8 }}>
                                    {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                                </span>
                            </div>
                            <Table
                                rowSelection={rowSelection}
                                columns={columns as ColunmTypes}
                                dataSource={this.state.dataSource}
                                bordered
                                rowClassName={() => 'editable-row'}
                                components={{components}}
                            />



                        </Content>
                    </Layout>
                </Content>
                <Foot/>
            </Layout>
        )
    }

}
export default newDetailView;