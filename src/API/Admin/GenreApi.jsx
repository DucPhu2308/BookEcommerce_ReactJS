import axiosClient from "../axiosClient";
import {linkGetAll,genre} from "../BaseURL";

class GenreApi {
    getAll=()=>{
        const url=linkGetAll;
        return axiosClient.get(url);
    }
    addGenre=(data)=>{
        const url=genre;
        return axiosClient.post(url,data);
    }

    updateGenre=(id,data)=>{
        const url=`${genre}/${id}`;
        return axiosClient.put(url,data);
    }
    deleteGenre=(id)=>{
        const url=`${genre}/${id}`;
        return axiosClient.delete(url);
    }
    
}

export default new GenreApi();