import {axiosPrivate } from '../axiosClient';
import axiosClient from '../axiosClient';
class BookApi {
    getAll = () => {
        const url = 'book/all';
        return axiosClient.get(url);
    }
    getBookById = (id) => {
        const url = `book/${id}`;
        return axiosClient.get(url);
    }
    
    postBook = (data) => {
        const url = 'book';
        return axiosPrivate.post(url, data);
    }
}
export default new BookApi();