import { useState, useEffect} from "react";
import "./RowItemMyBook.css";
import BookApi from "../../../../API/User/BookApi";
import RatingApi from "../../../../API/User/RatingApi";
import CommentApi from "../../../../API/User/CommentApi";

import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

const RowItemMyBook = ({ book, book_id, listBooks }) => {
  const [click, setClick] = useState(false);
  const [listBook, setListBook] = useState(listBooks);
  const [numberComment, setNumberComment] = useState(0);
  const [avg_rating, setAvg_rating] = useState(0);
  useEffect(() => {
    const fetchRating = async () => {
      try {
        const response = await RatingApi.getRatingByBook(book_id);
        let sum = 0;
        response.data.data.map((rating) => {
          sum += rating.star;
        })
        if(response.data.data.length > 0){
          setAvg_rating((sum/response.data.data.length).toFixed(1));
        }
        
      } catch (error) {
        console.log("Failed to fetch rating: ", error);
      }
    }
    fetchRating();
  }, [book_id])

  useEffect(() => {
    const fetchComment = async () => {
      try {
        const response = await CommentApi.getCommentByBookId(book_id);
        setNumberComment(response.data.data.length);
      } catch (error) {
        console.log("Failed to fetch comment: ", error);
      }
    }
    fetchComment();
  }, [book_id])
  
  const handleClick = () => {
    setClick(!click);
  }
  const handleDirectGenre = () => {
    window.location.href = `/book/${book_id}/chapter/add`;

  }
  
  const renderStateListChapter = (data) => {
    if(data != null){
      return (
        data.map((chapter) => (
          data.sort((a, b) => a.index - b.index),
          <Link to={`/book/${book_id}/chapter/${chapter.id}`} style={{textDecoration:"none"}}>
            <li key={chapter.id}>Chương {chapter.index}: {chapter.title}</li>
          </Link>
        ))
      )
    }
    else{
      return (
        <span style={{fontSize:"16px", fontWeight:"600", fontFamily:"San-serif"}}>Chưa có chương nào</span>
      )
    }
  }

  const handleClickUpdate = () => {
    window.location.href = `/book/${book_id}/update`;
  }

  const handleDeleteBook = (id) => {
    const confirm = window.confirm("Bạn có chắc chắn muốn xóa truyện này không?");
    if(confirm){
      BookApi.deleteBook(id).then((response) => {
        if(response.status === 200){
          const newListBook = listBook.filter((book) => book.id !== id);
          setListBook(newListBook);
          toast.success('Xóa truyện thành công')
        }
      }).catch((error) => {
        console.log("Failed to delete book: ", error);
        toast.error('Xóa truyện thất bại')
      })
    }

  }

  const numberChapter = (data) => {
    if(data != null){
      return data.length;
    }
    else{
      return 0;
    }
  }



  const renderListChapter = () => {
    if (click) {
      return (
        <div className="box_action_edit_icon_hidden">
          <div className="box_action_edit_icon_hidden_square">
            <div className="box_action_edit_icon_hidden_square_listChapter">
              <ul>
                {renderStateListChapter(book.chapters)}
              </ul>
            </div>
            <div className="box_action_edit_icon_hidden_square_add_Chapter">

              <button onClick={handleDirectGenre}>Thêm chương</button>

            </div>
          </div>
        </div>
      )
    }
  }
  return (
    
    <div className="container_mybooks_content_body_box_item">
      <ToastContainer />
      <div className="container_mybooks_content_body_box_item_img">
        <img src={book.coverImage} alt="book1" />
      </div>
      <div className="container_mybooks_content_body_box_item_info">
        <div className="container_mybooks_content_body_box_item_info_nav">
          <div className="container_mybooks_content_body_box_item_info_nav_paga">
            <span className="title_bigger">{book.title}</span>
            <span>Số chương: {numberChapter(book.chapters)}</span>
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
            <div className="btn_action">
              <button className="body_box_item_action_update_btn" onClick={handleClickUpdate}>Sửa</button>
              <button className="body_box_item_action_delete_btn" onClick={()=>handleDeleteBook(book.id)}>Xóa</button>
            </div>

          </div>
        </div>
        <div className="container_mybooks_content_body_box_item_info_nav_desc">
          <span>Đánh giá: {avg_rating}
            <i className="fas fa-star"></i>
          </span>
          <span>Lượt bình luận:{numberComment} </span>
          <span>Lượt xem: {book.views}</span>
        </div>
      </div>
    </div>
  )
}

export default RowItemMyBook;