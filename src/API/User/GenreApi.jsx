import axiosClient from '../axiosClient';

class GenreApi {
    getAllByBook = (id) => {
        const url = `/genre/${id}/book`;
        return axiosClient.get(url);
    }
}

export default new GenreApi();