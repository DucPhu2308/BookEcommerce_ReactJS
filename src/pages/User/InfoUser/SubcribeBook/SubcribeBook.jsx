import './SubcribeBook.css';
import { Link } from 'react-router-dom';

const SubcribeBook = () => {
    return (
        <div>
            <div className="container_user_subcribe_book_title">
                <div className="container_user_subcribe_book_title_paga">
                    <span>Truyện theo dõi</span>
                </div>
            </div >

            <div class="container_user_subcribe_book_body_table">
                <table>
                    <tr>
                        <th>Tên truyện</th>
                        <th>Xem gần nhất</th>
                        <th>Chap mới nhất</th>
                    </tr>
                    <tr>
                        <td className="subcribe_book_col1">
                            <div className="subcribe_book_item">
                                <img className="subcribe_book_img" src="https://picsum.photos/200" />
                                <span className="subcribe_book_title">
                                    <Link to="/">Thạch và những người bạn</Link>
                                </span>
                            </div>
                        </td>
                        <td className="subcribe_book_col1">
                            <Link to="/">Chap 1</Link>
                        </td>
                        <td className="subcribe_book_col2">
                            <Link to="/">Chap 100</Link>
                        </td>
                    </tr>
                </table>
            </div >
        </div>
    )
}

export default SubcribeBook