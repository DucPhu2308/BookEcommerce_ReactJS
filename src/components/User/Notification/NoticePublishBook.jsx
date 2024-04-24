import {Link} from 'react-router-dom'
import './NoticePublishBook.css'
const NoticePublishBook = () => {
    return (
        <div className="container_noticePublishBook">
            <div className="container_noticePublishBook_box">
                <div className="container_noticePublishBook_box_title">
                    <span>Thông báo</span>
                </div>
                <div className="container_noticePublishBook_box_content">
                    <div className="container_noticePublishBook_box_content_text">
                        <span>Bạn chưa có quyền được đăng truyện. Hãy nhấn nút Cấp quyền ở dưới để có thể được đăng truyện</span>
                    </div>
                </div>
                <div className="container_noticePublishBook_box_button">
                    <button className="btn_Cancel_Publish">Hủy</button>
                    <button className="btn_Permission">Cấp quyền</button>
                </div>
            </div>
        </div>
    )
}

export default NoticePublishBook