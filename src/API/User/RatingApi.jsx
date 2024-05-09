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
    updateRating=(data,id) =>{
        const url=`/rating/${id}`;
        return axiosPrivate.put(url,data);
    }
    deleteRating=(id) =>{
        const url=`/rating/${id}`;
        return axiosPrivate.delete(url);
    }
}

export default new RatingApi();