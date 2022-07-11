import React from 'react';
import { Descriptions, Button ,Form, Input} from 'antd';
import { PayCircleOutlined,ShoppingCartOutlined} from '@ant-design/icons';

import * as bookService from '../services/bookService';
import {history} from '../utils/history';

const { TextArea } = Input;

export class ManageBookDetail extends React.Component{
    handleChangeRef = React.createRef()

    constructor(props) {
        super(props);
    }

    // 修改
    handleChange=async()=>{
        if (this.handleChangeRef && this.handleChangeRef.current){ //很重要，在render后，handleChangeRef才实例化
            try {
                // 使用 validateFields 获取多个字段值,若验证通过，则返回表单值数组
                const values = await this.handleChangeRef.current.validateFields();

                //执行提交数据
                console.log('Received values of Detail Change: ', values);
                bookService.detailChange(values);

            } catch (errorInfo) {
                //若验证失败，返回数组{values:{表单值数组},errorFields:{验证未通过的表单值数组:{errors,name}}}
                console.log('Failed:', errorInfo);
            }

        }
    }
    // 删除
    handleRemove=async()=>{
        if (this.handleChangeRef && this.handleChangeRef.current){ //很重要，在render后，handleChangeRef才实例化
            try {
                // 使用 validateFields 获取多个字段值,若验证通过，则返回表单值数组
                const values = await this.handleChangeRef.current.validateFields();
                //执行提交数据
                console.log('Received values of Book Remove: ', values);
                bookService.detailRemove(values);

            } catch (errorInfo) {
                //若验证失败，返回数组{values:{表单值数组},errorFields:{验证未通过的表单值数组:{errors,name}}}
                console.log('Failed:', errorInfo);
            }

        }
    }

    render() {

        const {info} = this.props;

        if(info == null){
            return null;
        }
        console.log(info)
        return (
            <div className={"content"}>
                <div >
                    <div className="signin">
                        <Form className="more-padding" ref={this.handleChangeRef} >
                            <Form.Item name="image" >
                                <img alt="image" src={info.image} style={{width:"350px", height:"350px"}}/>
                            </Form.Item>
                            <Form.Item name="name" rules={[{ required: true, message: 'Please input Book Name!' }]}>
                                <Input type="name" size="small" defaultValue={info.name}/>
                            </Form.Item>
                            <Form.Item name="author" rules={[{ required: true, message: 'Please input Book Author!' }]}>
                                <Input type="author" size="small" defaultValue={info.author}/>
                            </Form.Item>
                            <Form.Item name="isbn" rules={[{ required: true, message: 'Please input Book ISBN!' }]}>
                                <Input type="isbn" size="small" defaultValue={info.isbn} />
                            </Form.Item>
                            <Form.Item name="price" rules={[{ required: true, message: 'Please input Book Price!' }]}>
                                <Input type="price" size="small" defaultValue={info.price}/>
                            </Form.Item>
                            <Form.Item name="number" rules={[{ required: true, message: 'Please input Book Inventory!' }]}>
                                <Input type="number" size="small" defaultValue={info.inventory}/>
                            </Form.Item>
                            <Form.Item name="description" rules={[{ required: true, message: 'Please input Book Description!' }]}>
                                <TextArea showCount maxLength={200} style={{ height: 250 }} type="description" size="small" defaultValue={info.description}/>
                            </Form.Item>
                        </Form>
                    </div>
                </div>

                <div className={"button-groups"}>
                    <Button  className="button submit" onClick={() => this.handleChange()} size={"large"}>
                        提交修改
                    </Button>
                    <Button  type="danger" className="button submit" onClick={() => this.handleRemove()} size={"large"}>
                        确认删除
                    </Button>
                </div>
            </div>
        )
    }
}
export default  ManageBookDetail;