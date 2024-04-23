import {axiosPrivate} from "../axiosClient";
import axiosClient from "../axiosClient";
class GenreApi {
    getAll=()=>{
        const url=`genre/all`;
        return axiosClient.get(url);
    }
    addGenre=(data)=>{
        const url=`genre`;
        return axiosPrivate.post(url,data);
    }

    updateGenre=(id,data)=>{
        const url=`genre/${id}`;
        return axiosPrivate.put(url,data);
    }
    deleteGenre=(id)=>{
        const url=`genre/${id}`;
        return axiosPrivate.delete(url);
    }
    
}

export default new GenreApi();