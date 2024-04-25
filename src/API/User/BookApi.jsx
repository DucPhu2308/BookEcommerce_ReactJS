import {axiosPrivate } from '../axiosClient';
import axiosClient from '../axiosClient';
class BookApi {
    getAll = () => {
        const url = 'book/all';
        return axiosPrivate.get(url);
    }
    getBookByUserId = (id) => {
        const url = `book/${id}/user`;
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
    updateBook = (id,data) => {
        const url = `book/${id}`;
        return axiosPrivate.put(url, data);
    }
    deleteBook = (id) => {
        const url = `book/${id}`;
        return axiosPrivate.delete(url);
    }
}
export default new BookApi();