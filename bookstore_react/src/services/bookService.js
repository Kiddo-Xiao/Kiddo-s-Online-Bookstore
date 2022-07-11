import {config} from "../config";
import {postRequest} from "../utils/ajax";
import {history} from '../utils/history';

export const getBooks = (data, callback) => {
    const url = `${config.apiUrl}/getBooks`;
    postRequest(url, data, callback);
};

export const detailChange = (data) => {
    console.log(data);
    const url = `${config.apiUrl}/detailChange`;
    const callback = (data) => {
                history.push('/newManageBook');
                console.log('Success:', data.msg);

    };
    postRequest(url, data, callback);
};

export const detailRemove = (data) => {
    console.log(data);
    const url = `${config.apiUrl}/detailRemove`;
    const callback = (data) => {
        history.push('/newManageBook');
        console.log('Success:', data.msg);

    };
    postRequest(url, data, callback);
};
