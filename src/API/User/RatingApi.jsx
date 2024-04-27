import axiosClient, {axiosPrivate} from '../axiosClient';


class RatingApi {
    createRating=(data) =>{
        const url='/rating/create';
        return axiosPrivate.post(url,data);
    } 
    getRating=(id) =>{
        const url=`/rating/book/${id}`;
        return axiosClient.get(url);
    }
}

export default new RatingApi();