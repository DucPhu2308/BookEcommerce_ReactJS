import DefaultLayout from "../../../layouts/DefaultLayout/DefaultLayout";
import "./DetailBook.css";
import imageAccount from "../../../assets/images/account.png";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import DOMPurify from "dompurify";
import CommentApi from "../../../API/User/CommentApi";
import BookApi from "../../../API/User/BookApi";
import ParagraphApi from "../../../API/User/ParagraphApi";
import ChapterApi from "../../../API/User/ChapterApi";
import UserApi from "../../../API/User/UserApi";
import ConfirmBuyChapterDialog from "../InfoBook/ConfirmBuyChapterDialog";
import NotEnoughCoinDialog from "../InfoBook/NotEnoughCoinDialog";
import { UserContext } from "../../../providers/UserProvider";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Select, MenuItem, FormControl, Grid, Stack } from "@mui/material";
import { useNavigate } from "react-router";

const DetailBook = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [listComment, setListComment] = useState([]);
  const [listParagraph, setListParagraph] = useState([]);
  const [listFollowBook, setListFollowBook] = useState([]);
  const [text, setText] = useState("");
  const [book, setBook] = useState({});
  const [buy, setBuy] = useState(false);
  const [notEnoughCoin, setNotEnoughCoin] = useState(false);
  const { idBook, idChap } = useParams();
  const [idChapter, setIdChapter] = useState(idChap);

  const [boxReply, setBoxReply] = useState(false);
  const [idReply, setIdReply] = useState(null);
  const [textReply, setTextReply] = useState("");
  const [replyCount, setReplyCount] = useState({});
  const [expandedReplies, setExpandedReplies] = useState([]);

  // var listChapter = book.chapters;
  const [listChapter, setListChapter] = useState([]);
  var indexChapter = listChapter?.findIndex(
    (chapter) => chapter.id == idChapter
  );

  // fetch book by id
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await BookApi.getBookById(idBook);
        console.log(response.data.data.userOwn.id);
        console.log(user.id);
        setBook(response.data.data);
      } catch (error) {
        console.log("Failed to fetch data", error);
        navigate("/not-found");
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
        navigate("/not-found");
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

  // handle select chapter
  const selectChapter = (index) => {
    const chapter = listChapter[index];
    // check if chapter is bought
    if (chapter.price > 0 && !chapter.bought && user.id !== book.userOwn.id) {
      if (user.coin < chapter.price) {
        setNotEnoughCoin(chapter.price - user.coin);
      } else {
        setBuy(chapter);
      }
    } else {
      setIdChapter(listChapter[index].id);
      navigate(`/book/${idBook}/chapter/${listChapter[index].id}`);
    }
  };
  const handleNextChapter = () => {
    if (indexChapter < listChapter.length - 1) {
      indexChapter = indexChapter + 1;
      selectChapter(indexChapter);
    }
  };

  const handleBackChapter = () => {
    if (indexChapter > 0) {
      indexChapter = indexChapter - 1;
      selectChapter(indexChapter);
    }
  };

  const handleSelectChapter = (e) => {
    indexChapter = e.target.value;
    selectChapter(indexChapter);
  };

  // fetch comment list
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await CommentApi.getByChapter(idChapter);
        setListComment(response.data.data);
      } catch (error) {
        console.log("Failed to fetch data", error);
      }
    };
    fetchData();
  }, [idChapter]);

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  const handleClickPost = async () => {
    try {
      const newComment = {
        content: text,
        parent: null,
        chapter: idChapter,
      };
      const response = await CommentApi.add(newComment);
      setListComment([...listComment, response.data.data]);
      setText("");
    } catch (error) {
      console.log("Failed to post data", error);
    }
  };
  const handleDeleteComment = async (id) => {
    try {
      await CommentApi.remove(id);
      const newListComment = listComment.filter((comment) => comment.id !== id);
      setListComment(newListComment);
    } catch (error) {
      console.log("Failed to delete data", error);
    }
  };
  const renderActionEditDelete = (id, userId) => {

    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.id === userId) {
      return (
        <Stack direction="row" spacing={0}>
          <button>Sửa</button>
          <button onClick={() => handleDeleteComment(id)}>Xóa</button>
        </Stack>
      );
    }
  };

  const handleFollowBook = async (bookId) => {
    if (!localStorage.getItem("token")) {
      toast.error("Vui lòng đăng nhập để theo dõi truyện");
      return;
    }
    try {
      await UserApi.followBook(bookId);
      const response = await UserApi.getFollowBooks();
      setListFollowBook(response.data.data);
    } catch (error) {
      console.log("Failed to fetch data", error);
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
              <img src={user.avatar || imageAccount} alt="account" />
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


  const toggleReplies = (commentId) => {
    if (expandedReplies.includes(commentId)) {
      setExpandedReplies(expandedReplies.filter((id) => id !== commentId));
    } else {
      setExpandedReplies([...expandedReplies, commentId]);
    }
  };

  const renderReplies = (replies, parentId) => {
    const totalReplies = replyCount[parentId] || 0;
    const isExpanded = expandedReplies.includes(parentId);
    const visibleReplies = isExpanded ? replies : replies.slice(0, totalReplies);

    const renderReplyRecursive = (reply) => {
      return (
        <div className="container_bookDetail_nav_1_comment_reply" key={reply.id}>
          <div className="container_bookDetail_nav_1_comment_reply_box">
            <div className="container_bookDetail_nav_1_comment_reply_box_img">
              <img src={reply.user?.avater || imageAccount} alt="account" />
            </div>
            <div className="container_bookDetail_nav_1_comment_reply_box_content">
              <span className="author">{reply.user?.displayName}</span>
              <pre className="content">{reply.content}</pre>
            </div>
          </div>
          <div className="container_bookDetail_nav_1_comment_action">
            <button onClick={() => handleReply(reply.id)}>Trả lời</button>
            {renderActionEditDelete(reply.id, reply.user?.id)}
          </div>
          {renderBoxReply(reply.id)}
          {reply.children && renderReplies(reply.children, reply.id)}
        </div>
      );
    };

    return (
      <>
        {visibleReplies.map((reply) => renderReplyRecursive(reply))}
        {totalReplies < replies.length && (
          <div className="box_line_seeMore">
            <button className="button_addReplyMore" onClick={() => toggleReplies(parentId)}>
              {isExpanded ? "Thu gọn" : "Xem thêm"}
            </button>
          </div>
        )}
      </>
    );
  };

  return (
    <DefaultLayout>
      <ToastContainer />
      {buy && <ConfirmBuyChapterDialog onClose={() => setBuy(false)} chapter={buy} />}
      {notEnoughCoin && <NotEnoughCoinDialog onClose={() => setNotEnoughCoin(false)} coinNeeded={notEnoughCoin} />}
      <div className="container_bookDetail_body">
        <div className="container_bookDetail_taskbar">
          <ul>
            <li>
              <div className="container_bookDetail_taskbar_box">
                <div className="container_bookDetail_taskbar_box_img"></div>
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
            <div onClick={() => navigate(`/profile/${book.userOwn?.id}`)} className="container_bookDetail_nav_1_author_info">
              <img src={book.userOwn?.avatar || imageAccount} alt="account" />
              <span>{book.userOwn?.displayName}</span>
            </div>
          </div>
          <div className="container_bookDetail_nav_1_displayBook">
            <div className="container_bookDetail_nav_1_displayBook_body">
              <div className="container_bookDetail_nav_1_displayBook_body_tittle">
                <span>
                  Chương {listChapter[indexChapter]?.index}:{" "}
                  {listChapter[indexChapter]?.title}
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
                    <Select value={indexChapter} onChange={handleSelectChapter}>
                      {listChapter?.map((chapter, index) => (
                        <MenuItem key={index} value={index}>
                          <span style={{
                            color: chapter.price > 0 && !chapter.bought && user.id !== book.userOwn?.id  ? "red" : "black"
                          }}>{chapter.index + ". " + chapter.title}
                            {chapter.price > 0 && !chapter.bought && user.id !== book.userOwn?.id 
                            ? ` (${chapter.price} xu)` : ""}
                          </span>
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
                  <img src={user.avatar || imageAccount} alt="account" />
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
                  <div key={comment.id}>
                    <div className="container_bookDetail_nav_1_displayBook_comment_form_listComments_item">
                      <div className="container_bookDetail_nav_1_displayBook_comment_form_listComments_item_img">
                        <img src={comment.user?.avatar || imageAccount} alt="account" />
                      </div>
                      <div className="container_bookDetail_nav_1_displayBook_comment_form_listComments_item_content">
                        <span className="author">{comment.user?.displayName}</span>
                        <pre className="content">{comment.content}</pre>
                      </div>
                    </div>
                    <div className="container_bookDetail_nav_1_comment_action">
                      <button onClick={() => handleReply(comment.id)}>Trả lời</button>
                      {renderActionEditDelete(comment.id, comment.user?.id)}
                    </div>
                    {renderBoxReply(comment.id)}
                    {comment.children && renderReplies(comment.children, comment.id)}
                  </div>
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
