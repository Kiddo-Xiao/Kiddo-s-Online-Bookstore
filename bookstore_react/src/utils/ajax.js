import {message} from 'antd';

let postRequest = (url, json, callback) => {

    let opts = {
        method: "POST",
        //body是json对象转成的字符串
        body: JSON.stringify(json),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: "include"
    };

    fetch(url,opts)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            callback(data);
        })
        .catch((error) => {
            console.log(error);
        });
};

export {postRequest};