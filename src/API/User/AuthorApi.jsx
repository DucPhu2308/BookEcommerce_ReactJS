
import axiosClient from '../axiosClient';

class AuthorApi {
    getBooksByAuthor = (id) => {
        const url = `/author/${id}/books`;
        return axiosClient.get(url);
    }
}

export default new AuthorApi();