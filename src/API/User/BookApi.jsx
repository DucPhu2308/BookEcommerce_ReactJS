import axiosClient from '../axiosClient';
import { linkGetAllBook } from '../BaseURL';
class BookApi {
    getAll = () => {
        const url = `${linkGetAllBook}/all`;
        return axiosClient.get(url);
    }
    getBookById = (id) => {
        const url = `${linkGetAllBook}/${id}`;
        return axiosClient.get(url);
    }
}
export default new BookApi();