import axiosClient from "../axiosClient"
import { linkGetAllBook } from "../BaseURL"

class Book {
    getBook = () =>{
        const url=linkGetAllBook;
        return axiosClient.get(url);
    }
}

export default new Book();