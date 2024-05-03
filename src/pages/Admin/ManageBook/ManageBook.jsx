import './ManageBook.css';
import { useState,useEffect } from 'react';
import BookApi from '../../../API/User/BookApi';

const ManageBook = () => {
    const [book, setBook] = useState([]);

    useEffect(()=>{
        const fetchBookList = async () => {
            try {
                const response = await BookApi.getAll();
                console.log(response.data.data);
                setBook(response.data.data);
            } catch (error) {
                console.log("Failed to fetch book list: ", error);
            }
        }
        fetchBookList();
    
    },[])
    const handleDeleteBook = (id) => {
        console.log("deleted",id);
        const newListBook = book.filter(item => item.id !== id);
        setBook(newListBook);
    }


    return (
        <div className="container_admin_manage_book">
            <div className="container_admin_manage_book_body">
                <div className="container_admin_manage_book_body_title">
                    <div className="container_admin_manage_book_body_title_paga">
                        <span>Quản lý sách</span>
                    </div>
                </div>
                <div className="container_admin_manage_book_body_table">
                    <table>
                        <tr>
                            <th></th>
                            <th>Tên sách</th>
                            <th>Tác giả</th>
                            <th>Thể loại</th>
                            <th></th>
                        </tr>
                        {book.map((book) => {
                            return (
                                <tr key={book.id}>
                                    <td className="col_1_1 image_book">
                                        <img src="#" alt=""></img>
                                    </td>
                                    <td className="col_2_1">{book.title}</td>
                                    <td className="col_2_1">{book.userOwn?.displayName}</td>
                                    <td className="col_2_1">
                                        {book.genres.map((genre) => {
                                            return (
                                                genre.name+" "
                                            )
                                        })}



                                    </td>
                                    <td className="col_2_1">
                                        <button>
                                            <i className="fas fa-eye"></i>
                                        </button>
                                        <button onClick={() => handleDeleteBook(book.id)}>
                                            <i className="fas fa-trash"></i>
                                        </button>

                                    </td>
                                </tr>
                            )
                        }
                        )}
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ManageBook;

