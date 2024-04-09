import axiosClient from "../axiosClient";

class GenreApi {
    getAll=()=>{
        const url='https://api.vietqr.io/v2/banks';
        return axiosClient.get(url);
    }
    addGenre=(data)=>{
        const url="http://api/movie.utehy.me/v1/genres";
        return axiosClient.post(url,data);
    }
    
}

export default new GenreApi();