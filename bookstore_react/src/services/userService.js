import {config} from "../config";
import {postRequest} from "../utils/ajax";
import {history} from '../utils/history';
import {message} from 'antd';

export const login = (data) => {
    const url = `${config.apiUrl}/login`;
    const callback = (data) => {
        if(data.status >= 0) {
            localStorage.setItem('user', JSON.stringify(data.data));
            var user=localStorage.getItem('user');
            var userType = JSON.parse(user).type;

            if(userType == 1) {
                history.push('/');
                message.success(data.msg);
                console.log('Success:', data.msg);
            }
            else if(userType == 2) {
                history.push('/newManageBook');
                message.success(data.msg);
                console.log('Success:', data.msg);
            }else {
                message.error(data.msg);
                console.log('Fail:', data.msg);
            }
        }
        else{
            message.error(data.msg);
            console.log('Fail:', data.msg);
        }
    };
    postRequest(url, data, callback);
};

export const logout = () => {
    const url = `${config.apiUrl}/logout`;

    const callback = (data) => {
        if(data.status >= 0) {
            localStorage.removeItem("user");
            history.push("/newLog");
            message.success(data.msg);
        }
        else{
            message.error(data.msg);
        }
    };
    postRequest(url, {}, callback);
};

export const checkSession = (callback) => {
    const url = `${config.apiUrl}/checkSession`;
    postRequest(url, {}, callback);
};

export const createAccount = (data) => {
    const url = `${config.apiUrl}/createAccount`;

    const callback = (data) => {
        if(data.status >= 0) {
            // localStorage.setItem('user', JSON.stringify(data.data));
            // history.push('/');

            message.success(data.msg);
            console.log('Success:', data.msg);
        }
        else{
            message.error(data.msg);
            console.log('Fail:', data.msg);
        }
    };
    postRequest(url, data, callback);
};

//管理员使用↓↓↓
export const getUserList = (callback) => {
    const url = `${config.apiUrl}/getUserList`;
    postRequest(url,{}, callback);
};

export const addToBlacklist = (data,callback) => {
    const url = `${config.apiUrl}/addToBlacklist`;
    postRequest(url, data,callback);
};

export const removeFromBlacklist = (data,callback) => {
    const url = `${config.apiUrl}/removeFromBlacklist`;
    postRequest(url, data,callback);
};