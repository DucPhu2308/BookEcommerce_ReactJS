import './ManageBook.css';
import { useState, useEffect, useRef } from 'react';
import BookApi from '../../../API/User/BookApi';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const ManageBook = () => {
    const [books, setBooks] = useState([]);
    const inputSearch = useRef(true);

    useEffect(() => {
        const inputSearchRef = inputSearch.current;
        const handleSearch = () => {
            const value = inputSearchRef.value.toLowerCase();
            const searchItems = document.querySelectorAll('.container_admin_manage_book_body_table table tbody tr');
            searchItems.forEach((item) => {
                const text = item.textContent.toLowerCase();
                if (text.indexOf(value) === -1) {
                    item.style.display = 'none';
                } else {
                    item.style.display = '';
                }
            });
        }
        if (inputSearchRef) {
            inputSearchRef.addEventListener('keyup', handleSearch);
        }
        return () => {
            if (inputSearchRef) {
                inputSearchRef.removeEventListener('keyup', handleSearch);
            }
        }
    }, [inputSearch]);
    
    useEffect(() => {
        const fetchBookList = async () => {
            try {
                const response = await BookApi.getAll();
                setBooks(response.data.data);

            } catch (error) {
                console.log("Failed to fetch book list: ", error);
            }
        }
        fetchBookList();

    }, [])

    const handleHideBook = async (id) => {
        try {
            await BookApi.hideBook(id)
                .then(() => {
                    toast.success("Ẩn sách thành công");
                    const newBooks = books.map((book) => {
                        if (book.id === id) {
                            return {
                                ...book,
                                active: false,
                            }
                        }
                        return book;
                    });
                    setBooks(newBooks);
                })
                .catch((error) => {
                    toast.error("Ẩn sách thất bại");
                    console.log("Failed to hide book: ", error);
                })

        }
        catch (error) {
            toast.error("Ẩn sách thất bại");
            console.log("Failed to hide book: ", error);
        }

    }

    const handleRestoreBook = async (id) => {
        try {
            await BookApi.restoreBook(id)
                .then(() => {
                    toast.success("Khôi phục sách thành công");
                    const newBooks = books.map((book) => {
                        if (book.id === id) {
                            return {
                                ...book,
                                active: true,
                            }
                        }
                        return book;
                    }
                    );
                    setBooks(newBooks);
                })
                .catch((error) => {
                    toast.error("Khôi phục sách thất bại");
                    console.log("Failed to restore book: ", error);
                })

        }
        catch (error) {
            toast.error("Khôi phục sách thất bại");
            console.log("Failed to restore book: ", error);
        }
    }


    const renderButton = (book) => {
        if (book.active) {
            return (
                <button onClick={() => handleHideBook(book.id)}>
                    <i className="fas fa-trash"></i>
                </button>
            )
        }
        else {
            return (
                <button onClick={() => handleRestoreBook(book.id)}>
                    <i className="fas fa-trash-restore"></i>
                </button>
            )
        }
    }

    return (
        <div className="container_admin_manage_book">
            <ToastContainer />
            <div className="container_admin_manage_book_body">
                <div className="container_admin_manage_book_body_title">
                    <div className="container_admin_manage_book_body_title_paga">
                        <span>Quản lý sách</span>
                    </div>
                    <div className="container_admin_manage_book_body_title_search">
                        <input type="text" placeholder="Tìm kiếm" ref={inputSearch}></input>
                        <button>
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                </div>
                <div className="container_admin_manage_book_body_table">
                    <table>
                        <thead>
                            <tr>
                                
                                <th></th>
                                <th>ID</th>
                                <th>Tên sách</th>
                                <th>Tác giả</th>
                                <th>Thể loại</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {books.map((book) => {
                                return (
                                    <tr key={book.id}>
                                        <td className="col_1_1 image_book">
                                            <img src={book.coverImage} alt=""></img>
                                        </td>
                                        <td className="col_1_1">{book.id}</td>
                                        <td className="col_2_1">{book.title}</td>
                                        <td className="col_2_1">{book.userOwn?.displayName}</td>
                                        <td className="col_2_1">
                                            {book.genres.map((genre) => {
                                                return (
                                                    genre.name + " "
                                                )
                                            })}



                                        </td>
                                        <td className="col_1_1">
                                            {/* <button>
                                                <i className="fas fa-eye"></i>
                                            </button> */}
                                            {renderButton(book)}

                                        </td>
                                    </tr>
                                )
                            }
                            )}
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    )
}

export default ManageBook;

