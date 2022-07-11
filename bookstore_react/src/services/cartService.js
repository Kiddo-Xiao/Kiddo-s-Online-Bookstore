import {config} from "../config";
import {postRequest} from "../utils/ajax";
import {history} from '../utils/history';
import {message} from 'antd';

export const addToCart = (data) => {
    const url = `${config.apiUrl}/addToCart`;
    const callback = (data) => {
        if(data!=undefined) {
            // localStorage.setItem('user', JSON.stringify(data.data));

            message.success("添加成功！");
            console.log("添加成功");
        }
        else{
            message.error("添加失败！");
            console.log("添加失败");
            console.log(data);
        }
    };
    postRequest(url, data, callback);
};

export const getUserCart = (data,callback) => {
    const url = `${config.apiUrl}/getUserCart`;
    postRequest(url, data, callback);
};

export const clearCart = (data,callback) => {
    const url = `${config.apiUrl}/clearCart`;
    // console.log(JSON.stringify(data));
    var jso={};
    jso["delBooks"]=data;
    postRequest(url, jso, callback);
};