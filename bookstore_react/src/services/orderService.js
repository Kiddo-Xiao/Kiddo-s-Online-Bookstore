import {config} from "../config";
import {postRequest} from "../utils/ajax";
import {history} from '../utils/history';
import {message} from 'antd';

export const getOrders = (data,callback) => {
    const url = `${config.apiUrl}/getOrders`;
    postRequest(url, data, callback);
};

export const getUserOrders = (data,callback) => {
    const url = `${config.apiUrl}/getUserOrders`;
    postRequest(url, data, callback);
};

export const addOrderFromUser = (data,callback) => {
    const url = `${config.apiUrl}/addOrderFromUser`;
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

export const getHotSelling = (data,callback) => {
    const url = `${config.apiUrl}/getHotSelling`;
    postRequest(url, data, callback);
};

export const getHotUser = (data,callback) => {
    const url = `${config.apiUrl}/getHotUser`;
    postRequest(url, data, callback);
};