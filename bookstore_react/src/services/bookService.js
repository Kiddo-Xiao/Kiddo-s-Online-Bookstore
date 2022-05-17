import {config} from "../config";
import {postRequest} from "../utils/ajax";

export const getBooks = (data, callback) => {
    const url = `${config.apiUrl}/getBooks`;
    postRequest(url, data, callback);
};