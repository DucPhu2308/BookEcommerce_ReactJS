
import axiosClient from '../axiosClient';
import { linkGetAllAuthor } from '../BaseURL';

class Author {
    getAllAuthor = () => {
        const url=linkGetAllAuthor;
        return axiosClient.get(url);
    }
}

export default new Author();