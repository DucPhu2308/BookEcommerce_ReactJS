import './SubcribeBook.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import UserApi from '../../../../API/User/UserApi';
const SubcribeBook = () => {
    const [listBook, setListBooks] = useState([]);

    // load books
    useEffect(() => {
        UserApi.getFollowBooks().then((res) => {
            setListBooks(res.data.data);
            setPost(res.data.data);
        });
    }, []);

    return (
        <div>
            <div className="container_user_subcribe_book_title">
                <div className="container_user_subcribe_book_title_paga">
                    <span>Truyện theo dõi</span>
                </div>
                <div className="SeeTotal">
                    <Link className="link" to="/subcribebook">Xem tất cả {">>"}</Link>
                </div>
            </div >

            <div class="container_user_subcribe_book_body_table">
                <table>
                    <thead>
                        <tr>
                            <th>Tên truyện</th>
                            <th>Xem gần nhất</th>
                            <th>Chap mới nhất</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listBook.map((book, index) => (
                            <tr key={index}>
                                <td className="subcribe_book_col1">
                                    <Link className="link" to={`/book/${book.id}`}>
                                        <div className="subcribe_book_item">
                                            <img className="subcribe_book_img" src={book.coverImage} alt="book1" />
                                            <span className="subcribe_book_title">
                                                {book.title}
                                            </span>
                                        </div>
                                    </Link>
                                </td>
                                <td className="subcribe_book_col1">
                                    <Link to="/">Chap 1</Link>
                                </td>
                                <td className="subcribe_book_col2">
                                    <Link to="/">Chap 100</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div >
        </div>
    )
}

export default SubcribeBook