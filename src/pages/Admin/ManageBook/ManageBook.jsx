import './ManageBook.css';
import { useState } from 'react';
const listBook = [
    {
        id: 1,
        name: "Sách 1",
        author: "Tác giả 1",
        category: "Thể loại 1",
    },
    {
        id: 2,
        name: "Sách 2",
        author: "Tác giả 2",
        category: "Thể loại 2",
    },
    {
        id: 3,
        name: "Sách 3",
        author: "Tác giả 3",
        category: "Thể loại 3",
    },
]
const ManageBook = () => {
    const [book, setBook] = useState(listBook);

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
                                    <td className="col_2_1">{book.name}</td>
                                    <td className="col_2_1">{book.author}</td>
                                    <td className="col_2_1">{book.category}</td>
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

