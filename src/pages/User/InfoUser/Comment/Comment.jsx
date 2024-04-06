import './Comment.css';
import { Link } from 'react-router-dom';

const Comment = () => {
    return (
        <div>
            <div className="container_user_comment_title">
                <div className="container_user_comment_title_paga">
                    <span>Bình luận của tôi</span>
                </div>
            </div >
            <div class="container_user_comment_body_table">
                <table>
                    <tr>
                        <th>Tên truyện</th>
                        <th>Chương</th>
                        <th>Thời gian</th>
                        <th>Nội dung</th>
                    </tr>
                    <tr>
                        <td className="comment_col1">
                            <div className="comment_item">
                                <img className="comment_img" src="https://picsum.photos/200" />
                                <span className="comment_title">
                                    <Link to="/">Thạch và những người bạn</Link>
                                </span>
                            </div>
                        </td>
                        <td className="comment_col1">1</td>
                        <td className="comment_col2">abc</td>
                        <td className="comment_col3">abcaaaaaaaaaaaaaaaaaaaaaaa</td>
                        <td className="comment_col2">
                            <button>
                                <i className="fas fa-eye"></i>
                            </button>
                            <button>
                                <i className="fas fa-trash"></i>
                            </button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Comment