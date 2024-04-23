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
    getTopNBooksSortByDate = (n) => {
        const url = `book/list-by-date?num=${n}`;
        return axiosClient.get(url);
    }
}
export default new BookApi();