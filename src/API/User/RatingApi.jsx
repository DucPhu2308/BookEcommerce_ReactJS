import axiosClient, {axiosPrivate} from '../axiosClient';


class RatingApi {
    createRating=(data) =>{
        const url='/rating';
        return axiosPrivate.post(url,data);
    } 
    getRatingByBook=(id) =>{
        const url=`/rating/book/${id}`;
        return axiosClient.get(url);
    }
}

export default new RatingApi();