
import {axiosPrivate} from '../axiosClient';

class Author {
    getAllAuthor = () => {
        const url = 'author/all';
        return axiosPrivate.get(url);
    }
}

export default new Author();