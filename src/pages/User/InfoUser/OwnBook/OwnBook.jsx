import './OwnBook.css';
import { Link } from 'react-router-dom';

const OwnBook = () => {
    return (
        <div>
            <div className="container_user_own_book_title">
                <div className="container_user_own_book_title_paga">
                    <span>Truyện đã đăng</span>
                </div>
            </div >
            <div class="container_user_own_book_body_table">
                <table>
                    <tr>
                        <th>Tên truyện</th>
                        <th>Chap mới nhất</th>
                        <th>Lượt xem</th>
                        <th>Xem chi tiết</th>
                    </tr>
                    <tr>
                        <td className="own_book_col1">
                            <div className="own_book_item">
                                <img className="own_book_img" src="https://picsum.photos/200" />
                                <span className="own_book_title">
                                    <Link to="/">Thạch và những người bạn</Link>
                                </span>
                            </div>
                        </td>
                        <td className="own_book_col2">
                            <Link to="/">Chap 1</Link>
                        </td>
                        <td className="own_book_col2">
                            10.000
                        </td>
                        <td className="own_book_col2">
                            <button>
                                <i className="fas fa-eye"></i>
                            </button>
                        </td>
                    </tr>
                </table>
            </div >
        </div>
    )
}

export default OwnBook