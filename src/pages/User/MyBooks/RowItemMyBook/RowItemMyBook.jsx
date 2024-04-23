import { useState } from "react";
import "./RowItemMyBook.css";
import { Link } from "react-router-dom";

const RowItemMyBook = ({ book }) => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  }
  const renderListChapter = () => {
    if (click) {
      return (
        <div className="box_action_edit_icon_hidden">
          <div className="box_action_edit_icon_hidden_square">
            <div className="box_action_edit_icon_hidden_square_listChapter">
              <ul>
                <li>Chương 1 sagasgsadg</li>
                <li>Chương 2</li>
                <li>Chương 3</li>
                <li>Chương 4</li>
              </ul>
            </div>
            <div className="box_action_edit_icon_hidden_square_add_Chapter">
              <Link to="/add-chapter">
                <button>Thêm chương</button>
              </Link>
            </div>
          </div>
        </div>
      )
    }
  }
  return (
    <div className="container_mybooks_content_body_box_item">
      <div className="container_mybooks_content_body_box_item_img">
        <img src="imageBooks/anh1.jpg" alt="book1" />
      </div>
      <div className="container_mybooks_content_body_box_item_info">
        <div className="container_mybooks_content_body_box_item_info_nav">
          <div className="container_mybooks_content_body_box_item_info_nav_paga">
            <span className="title_bigger">Truyện 1</span>
            <span>Số chương: 3</span>
          </div>
          <div className="container_mybooks_content_body_box_item_action">
            <div className="container_mybooks_content_body_box_item_action_edit">
              <button className="body_box_item_action_edit_btn">
                Tiếp tục viêt
              </button>
              <div className="container_mybooks_content_body_box_item_action_edit_icon" onClick={handleClick}>
                <i className="fas fa-ellipsis-v"></i>

                {renderListChapter()}
              </div>
            </div>
            <button className="body_box_item_action_delete_btn">Sửa</button>
          </div>
        </div>
        <div className="container_mybooks_content_body_box_item_info_nav_desc">
          <span>Đánh giá</span>
          <span>Lượt bình luận:200</span>
          <span>Lượt xem: 1000</span>
        </div>
      </div>
    </div>
  )
}

export default RowItemMyBook;