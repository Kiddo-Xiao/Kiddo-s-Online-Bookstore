import {config} from "../config";
import {postRequest} from "../utils/ajax";
import {history} from '../utils/history';
import {message} from 'antd';


export const getUserOrders = (data,callback) => {
    const url = `${config.apiUrl}/getUserOrders`;
    postRequest(url, data, callback);
};

export const addOrderFromUser = (data,callback) => {
    const url = `${config.apiUrl}/addOrderFromUser`;
    // const callback = (data) => {
    //     if(data!=undefined) {
    //         // localStorage.setItem('user', JSON.stringify(data.data));
    //
    //         message.success("添加成功！");
    //         console.log("添加成功");
    //     }
    //     else{
    //         message.error("添加失败！");
    //         console.log("添加失败");
    //         console.log(data);
    //     }
    // };
    postRequest(url, data,callback);
};

export const addOrderItem = (data) => {
    const url = `${config.apiUrl}/addOrderItem`;
    const callback = (data) => {
        if(data!=undefined) {
            message.success("下单成功！");
            console.log("下单成功");
        }
        else{
            message.error("下单失败！");
            console.log("下单失败");
            console.log(data);
        }
    };
    postRequest(url, data, callback);
};