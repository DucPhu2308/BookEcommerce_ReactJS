import './OwnBook.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import BookApi from '../../../../API/User/BookApi';

const OwnBook = () => {
    const [listBook, setListBook] = useState([]);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        const fetchListBook = async () => {
            try {
                const response = await BookApi.getBookByUserId(user.id);
                console.log(response);
                setListBook(response.data.data);
            } catch (error) {
                console.log("Failed to fetch list book: ", error);
            }
        };
        fetchListBook();
    }, []);

    return (
        <div>
            <div className="container_user_own_book_title">
                <div className="container_user_own_book_title_paga">
                    <span>Truyện đã đăng</span>
                </div>
                <div className="SeeTotal">
                    <Link className="link" to="/my-books">Quản lý truyện {">>"}</Link>
                </div>
            </div >
            <div class="container_user_own_book_body_table">
                <table>
                    <thead>
                        <tr>
                            <th>Tên truyện</th>
                            <th>Lượt mua</th>
                            <th>Lượt xem</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listBook.map((book, index) => (
                            <tr key={index}>
                                <td className="own_book_col1">
                                    <div className="own_book_item">
                                        <img className="own_book_img" src={book.coverImage} alt="book1" />
                                        <span className="own_book_title">
                                            <Link className="link" to={`/book/${book.id}`}>{book.title}</Link>
                                        </span>
                                    </div>
                                </td>
                                <td className="own_book_col2">
                                    {book.buys}
                                </td>
                                <td className="own_book_col2">
                                    {book.views}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div >
        </div>
    )
}

export default OwnBook