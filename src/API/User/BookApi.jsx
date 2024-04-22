import axiosClient from '../axiosClient';
import { axiosPrivate } from '../axiosClient';
import { linkGetAllBook } from '../BaseURL';

class BookApi {
    getAll = () => {
        const url = 'book/all';
        return axiosPrivate.get(url);
    }
    getBookById = (id) => {
        const url = `${linkGetAllBook}/${id}`;
        return axiosClient.get(url);
    }
    getTopNBooksSortByDate = (n) => {
        const url = `book/list-by-date?num=${n}`;
        return axiosClient.get(url);
    }
}
export default new BookApi();