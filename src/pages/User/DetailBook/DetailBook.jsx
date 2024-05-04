import DefaultLayout from "../../../layouts/DefaultLayout/DefaultLayout";
import "./DetailBook.css";
import imageAccount from "../../../assets/images/account.png";
import { useState, useEffect } from "react";
import DOMPurify from "dompurify";
import CommentApi from "../../../API/User/CommentApi";
import BookApi from "../../../API/User/BookApi";
import ParagraphApi from "../../../API/User/ParagraphApi";
import ChapterApi from "../../../API/User/ChapterApi";
import UserApi from "../../../API/User/UserApi";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Select, MenuItem, FormControl, Grid } from "@mui/material";
import { useNavigate } from "react-router";

const DetailBook = () => {
  const navigate = useNavigate();
  const [listComment, setListComment] = useState([]);
  const [listParagraph, setListParagraph] = useState([]);
  const [listFollowBook, setListFollowBook] = useState([]);
  const [text, setText] = useState("");
  const [book, setBook] = useState({});
  const [idChapter, setIdChapter] = useState(
    window.location.pathname.split("/")[2]
  );

  const [boxReply, setBoxReply] = useState(false);
  const [idReply, setIdReply] = useState(null);
  const [textReply, setTextReply] = useState("");

  const [replyCount, setReplyCount] = useState({});


  const idBook = localStorage.getItem("idBook");
  // var listChapter = book.chapters;
  const [listChapter, setListChapter] = useState([]);
  var indexChapter = listChapter?.findIndex((chapter) => chapter.id == idChapter);

  // fetch book by id
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await BookApi.getBookById(idBook);
        setBook(response.data.data);
      } catch (error) {
        console.log("Failed to fetch data", error);
      }
    };
    fetchData();
  }, [idBook]);

  // fetch chapter list 
  useEffect(() => {
    const fetchChapter = async () => {
      try {
        const response = await ChapterApi.getChapterByBook(idBook);
        setListChapter(response.data.data);
      } catch (error) {
        console.log("Failed to fetch chapter: ", error);
      }
    };
    fetchChapter();
  }, [idBook]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ParagraphApi.getParagraphs(idChapter);
        setListParagraph(response.data.data);
      } catch (error) {
        console.log("Failed to fetch data", error);
      }
    };
    fetchData();
  }, [idChapter]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await UserApi.getFollowBooks();
        setListFollowBook(response.data.data);
      } catch (error) {
        console.log("Failed to fetch data", error);
      }
    };
    fetchData();
  }, []);

  // fetch paragraph list
  useEffect(() => {
    const fetchParagraphs = async () => {
      try {
        const response = await ParagraphApi.getParagraphs(idChapter);
        setListParagraph(response.data.data);
      } catch (error) {
        console.log("Failed to fetch paragraphs: ", error);
      }
    };
    fetchParagraphs();
  }, [idChapter]);

  const handleNextChapter = () => {
    if (indexChapter < listChapter.length - 1) {
      indexChapter = indexChapter + 1;
      setIdChapter(listChapter[indexChapter].id);
      navigate(`/detail-book/${listChapter[indexChapter].id}`);
    }
  };

  const handleBackChapter = () => {
    if (indexChapter > 0) {
      indexChapter = indexChapter - 1;
      setIdChapter(listChapter[indexChapter].id);
      navigate(`/detail-book/${listChapter[indexChapter].id}`);
    }
  };

  const handleSelectChapter = (e) => {
    indexChapter = e.target.value;
    setIdChapter(listChapter[indexChapter].id);
    navigate(`/detail-book/${listChapter[indexChapter].id}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await CommentApi.getByChapter(idChapter);
        setListComment(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.log("Failed to fetch data", error);
      }
    };
    fetchData();
  }, []);

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  const handleClickPost = async () => {

    try {
      const newComment = {
        content: text,
        parent: null,
        chapter: idChapter
      }
      const response = await CommentApi.add(newComment)
      setListComment([...listComment, response.data.data])
      setText('')
    } catch (error) {
      console.log('Failed to post data', error)
    }
  }
  const handleDeleteComment = async (id) => {
    try {
      await CommentApi.remove(id);
      const newListComment = listComment.filter((comment) => comment.id !== id);
      setListComment(newListComment);
    } catch (error) {
      console.log("Failed to delete data", error);
    }
  };
  const renderActionEditDelete = (id) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      return (
        <>
          <button>Sửa</button>
          <button onClick={() => handleDeleteComment(id)}>Xóa</button>
        </>
      );
    }
  };



  const handleFollowBook = async (bookId) => {
    if (!localStorage.getItem('token')) {
      toast.error('Vui lòng đăng nhập để theo dõi truyện')
      return
    }
    try {
      await UserApi.followBook(bookId)
      const response = await UserApi.getFollowBooks()
      setListFollowBook(response.data.data)
    } catch (error) {
      console.log('Failed to fetch data', error)
    }
  };
  const checkFollowBook = (bookId) => {
    const isFollow = listFollowBook.find(
      (followBook) => followBook.id === bookId
    );
    if (isFollow) {
      return false;
    }
    return true;
  };

  const renderFollowButton = (bookId) => {
    const isFollow = checkFollowBook(bookId);
    if (isFollow) {
      return (
        <button className="dark" onClick={() => handleFollowBook(bookId)}>
          Theo dõi
        </button>
      );
    } else {
      return (
        <button className="dark" onClick={() => handleFollowBook(bookId)}>
          Bỏ theo dõi
        </button>
      );
    }
  };




  const handleReply = (id) => {
    setBoxReply(!boxReply);
    setIdReply(id);
    console.log(idReply)
  }
  const handleChangeTextReply = (e) => {
    setTextReply(e.target.value);
  }

  

  const handleClickPostReply = async (id) => {
    try {
      const newComment = {
        content: textReply,
        parent: id,
        chapter: idChapter
      };
      const response = await CommentApi.add(newComment);
      const updatedListComment = updateCommentList(listComment, id, response.data.data);
      setListComment(updatedListComment);
      setTextReply('');
      setBoxReply(false);
      toast.success('Trả lời thành công');
    } catch (error) {
      console.log('Failed to post data', error);
      toast.error('Trả lời thất bại');
    }
  };
  
  const updateCommentList = (commentList, parentId, newReply) => {
    return commentList.map((comment) => {
      if (comment.id === parentId) {
        return { ...comment, children: [...(comment.children || []), newReply] };
      }
      if (comment.children) {
        return {
          ...comment,
          children: updateCommentList(comment.children, parentId, newReply)
        };
      }
      return comment;
    });
  };
  
  const renderBoxReply = (id) => {
    if (boxReply && idReply === id) {
      return (
        <>
          <div className="container_bookDetail_nav_1_displayBook_comment_form">
            <div className="container_bookDetail_nav_1_displayBook_comment_form_img">
              <img src={imageAccount} alt="account" />
            </div>
            <div className="container_bookDetail_nav_1_displayBook_comment_form_box">
              <form action="">
                <textarea
                  value={textReply}
                  placeholder="Viết bình luận của bạn...."
                  onChange={handleChangeTextReply}
                ></textarea>
              </form>
              <button onClick={() => handleClickPostReply(id)}>
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </>
      )
    }
  }

  const renderReplies = (replies) => {
    return (
      <>
        {replies.map((reply) => (
          <>
            <div className="container_bookDetail_nav_1_comment_reply" key={reply.id}>
              <div className="container_bookDetail_nav_1_comment_reply_box">
                <div className="container_bookDetail_nav_1_comment_reply_box_img">
                  <img src={imageAccount} alt="account" />
                </div>
                <div className="container_bookDetail_nav_1_comment_reply_box_content">
                  <span className="author">{reply.user?.displayName}</span>
                  <span className="content">{reply.content}</span>
                </div>
              </div>
              <div className="container_bookDetail_nav_1_comment_action">
                <button onClick={() => handleReply(reply.id)}>Trả lời</button>
                {renderActionEditDelete(reply.id)}
              </div>
              {renderBoxReply(reply.id)}
              {reply.children && reply.children.length > 0 && (
                <div className="container_bookDetail_nav_1_comment_replies">
                  {renderReplies(reply.children)}
                </div>
              )}
            </div>
          </>
        ))}
      </>
    );
  };

  return (
    <DefaultLayout>
      <ToastContainer />
      <div className="container_bookDetail_body">
        <div className="container_bookDetail_taskbar">
          <ul>
            <li>
              <div className="container_bookDetail_taskbar_box">
                <div className="container_bookDetail_taskbar_box_img">

                </div>
                <div className="container_bookDetail_taskbar_box_title">
                  <h3>{book.title}</h3>
                  <span>{book.userOwn?.displayName}</span>
                </div>
              </div>
            </li>
            <li>
              <div className="container_bookDetail_taskbar_button">
                {renderFollowButton(book.id)}
                <button className="white">Đánh giá</button>
              </div>
            </li>
          </ul>
        </div>
        <div className="container_bookDetail_nav_1">
          <div className="container_bookDetail_nav_1_author">
            <div className="container_bookDetail_nav_1_author_info">
              <img src="download.png" alt="account" />
              <span>{book.userOwn?.displayName}</span>
            </div>
          </div>
          <div className="container_bookDetail_nav_1_displayBook">
            <div className="container_bookDetail_nav_1_displayBook_body">
              <div className="container_bookDetail_nav_1_displayBook_body_tittle">
                <span>
                  Chương {listChapter[indexChapter]?.index}: {listChapter[indexChapter]?.title}
                </span>
              </div>
              <div className="container_bookDetail_nav_1_display_paragraph">
                {listParagraph.map((paragraph, index) => {
                  return (
                    <p
                      key={index}
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(paragraph.content),
                      }}
                    ></p>
                  );
                })}
              </div>
            </div>

            {/* select chapter */}
            <div className="container_bookDetail_nav_1_displayBook_body_button">
              <Grid container spacing={2}>
                <Grid item xs={2}>
                  <button className="dark" onClick={handleBackChapter}>
                    Tập trước
                  </button>
                </Grid>
                <Grid item xs={8}>
                  <FormControl fullWidth>
                    <Select
                      value={indexChapter}
                      onChange={handleSelectChapter}
                    >
                      {listChapter?.map((chapter, index) => (
                        <MenuItem key={index} value={index}>
                          {chapter.index + '. ' + chapter.title}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={2}>
                  <button className="dark" onClick={handleNextChapter}>
                    Tập sau
                  </button>
                </Grid>
              </Grid>
            </div>
            <div className="container_bookDetail_nav_1_displayBook_comment">
              <div className="container_bookDetail_nav_1_displayBook_comment_title">
                <span>Bình luận </span>
              </div>
              <div className="container_bookDetail_nav_1_displayBook_comment_form">
                <div className="container_bookDetail_nav_1_displayBook_comment_form_img">
                  <img src={imageAccount} alt="account" />
                </div>
                <div className="container_bookDetail_nav_1_displayBook_comment_form_box">
                  <form action="">
                    <textarea
                      value={text}
                      placeholder="Viết bình luận của bạn...."
                      onChange={handleChangeText}
                    ></textarea>
                  </form>
                  <button onClick={handleClickPost}>
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </div>
              </div>

              <div className="container_bookDetail_nav_1_displayBook_comment_form_listComments">
                {listComment.map((comment) => (
                  <>
                    <div
                      key={comment.id}
                      className="container_bookDetail_nav_1_displayBook_comment_form_listComments_item"
                    >
                      <div className="container_bookDetail_nav_1_displayBook_comment_form_listComments_item_img">
                        <img src={imageAccount} alt="account" />
                      </div>
                      <div className="container_bookDetail_nav_1_displayBook_comment_form_listComments_item_content">
                        <span className="author">
                          {comment.user?.displayName}
                        </span>
                        <span className="content">{comment.content}</span>
                      </div>
                    </div>
                    <div className="container_bookDetail_nav_1_comment_action">
                      <button onClick={() => handleReply(comment.id)}>Trả lời</button>

                      {renderActionEditDelete(comment.id)}
                    </div>
                    {renderBoxReply(comment.id)}
                    {comment.children && comment.children.length > 0 && (
                      <div className="container_bookDetail_nav_1_comment_replies">
                        {renderReplies(comment.children)}
                      </div>
                    )}
                    <div className="box_line_seeMore">
                      {comment.children.length > 3 && <button className="button_addReplyMore" onClick={() => setReplyCount({ ...replyCount, [comment.id]: (replyCount[comment.id] || 3) + 3 })}>Xem thêm</button>}
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default DetailBook;
