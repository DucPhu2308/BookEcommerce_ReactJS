import DefaultLayout from "../../../layouts/DefaultLayout/DefaultLayout";
import "./DetailBook.css";
import imageAccount from "../../../assets/images/account.png";
import { useState, useEffect } from "react";
import DOMPurify from 'dompurify';
import CommentApi from "../../../API/User/CommentApi";
import BookApi from "../../../API/User/BookApi";
import ParagraphApi from "../../../API/User/ParagraphApi";
import ChapterApi from "../../../API/User/ChapterApi";
import UserApi from "../../../API/User/UserApi";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DetailBook = () => {
    const [listComment, setListComment] = useState([])
    const [listParagraph, setListParagraph] = useState([])
    const [listFollowBook, setListFollowBook] = useState([])
    const [chapter, setChapter] = useState({})
    const [indexParagraph, setIndexParagraph] = useState(1)
    const [paragraph, setParagraph] = useState({})
    const [text, setText] = useState('')
    const [book, setBook] = useState({})
    const idChapter=window.location.pathname.split("/")[2];

    const idBook= localStorage.getItem("idBook");

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

    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await ChapterApi.getChapterById(idChapter);
                setChapter(response.data.data);
            } catch (error) {
                console.log("Failed to fetch data", error);
            }
        };
        fetchData();
    }, [idChapter]);

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
    useEffect( () => {
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

    const handleNextParagraph = () => {
        if (indexParagraph < listParagraph.length - 1) {
            setIndexParagraph(indexParagraph + 1)
            setParagraph(listParagraph[indexParagraph + 1])
        }
    }

    const handleBackParagraph = () => {
        if (indexParagraph > 0) {
            setIndexParagraph(indexParagraph - 1)
            setParagraph(listParagraph[indexParagraph - 1])
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await CommentApi.getByChapter(1)
                setListComment(response.data.data)
            } catch (error) {
                console.log('Failed to fetch data', error)
            }
        }
        fetchData()
    }, [])

    const handleChangeText = (e) => {
        setText(e.target.value)
    }

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
            await CommentApi.remove(id)
            const newListComment = listComment.filter(comment => comment.id !== id)
            setListComment(newListComment)
        } catch (error) {
            console.log('Failed to delete data', error)
        }
    }
    const renderActionEditDelete = (id) => {
        const user = JSON.parse(localStorage.getItem('user'))
        if (user) {
            return (
                <>
                   <button >Sửa</button>
                    <button onClick={() => handleDeleteComment(id)}>Xóa</button>
                </>

            )
        }
    }

    const handleFollowBook = async (bookId) => {
        if(!localStorage.getItem('token')) {
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
    }
    const checkFollowBook = (bookId) => {
        const isFollow = listFollowBook.find(followBook => followBook.id === bookId)
        if (isFollow) {
            return false
        }
        return true
    }

    const renderFollowButton = (bookId) => {
        const isFollow = checkFollowBook(bookId)
        if (isFollow) {
            return (
                <button className="dark" onClick={() => handleFollowBook(bookId)}>Theo dõi</button>
            )
        }   
        else {
            return (
                <button className="dark" onClick={() => handleFollowBook(bookId)}>Bỏ theo dõi</button>
            )
        }

    }


    const renderParagraph = () => {
        listParagraph.map((paragraph, index) => {
            return (
                <p key={index}>{paragraph.content}</p>
            )
        })
    }
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
                                <span>Chương {chapter.index}: {chapter.title}</span>
        
                            </div>
                            <div className="container_bookDetail_nav_1_display_paragraph">
                                {listParagraph.map((paragraph, index) => {
                                return (
                                    <p key={index} dangerouslySetInnerHTML={{ 
                                        __html: DOMPurify.sanitize(paragraph.content) 
                                    }}></p>
                                )
                            })}
                            </div>
                        </div>
                        <div className="container_bookDetail_nav_1_displayBook_body_button">
                            <button className="dark" onClick={handleBackParagraph}>Tập trước</button>
                            <button className="dark" onClick={handleNextParagraph}>Tập sau</button>
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
                                        <textarea value={text} placeholder="Viết bình luận của bạn...." onChange={handleChangeText}></textarea>
                                    </form>
                                    <button onClick={handleClickPost}>
                                        <i className="fas fa-paper-plane"></i>
                                    </button>
                                </div>
                            </div>

                            <div className="container_bookDetail_nav_1_displayBook_comment_form_listComments">
                                {listComment.map((comment, index) => (
                                    <>
                                        <div key={index} className="container_bookDetail_nav_1_displayBook_comment_form_listComments_item">
                                            <div className="container_bookDetail_nav_1_displayBook_comment_form_listComments_item_img">
                                                <img src={imageAccount} alt="account" />
                                            </div>
                                            <div className="container_bookDetail_nav_1_displayBook_comment_form_listComments_item_content">
                                                <span className="author">{comment.user?.displayName}</span>
                                                <span className="content">{comment.content}</span>
                                            </div>
                                        </div>
                                        <div className="container_bookDetail_nav_1_comment_action">
                                            <button >Trả lời</button>
                                            {renderActionEditDelete(comment.id)}
                                        </div>
                                        {/* <div className="container_bookDetail_nav_1_comment_reply">
                                            <div className="container_bookDetail_nav_1_comment_reply_box">
                                                <div className="container_bookDetail_nav_1_comment_reply_box_img">
                                                    <img src={imageAccount} alt="account" />
                                                </div>
                                                <div className="container_bookDetail_nav_1_comment_reply_box_content">
                                                    <span className="author">account</span>
                                                    <span className="content">Chương hay quá</span>
                                                </div>
                                            </div>
                                        </div> */}
                                    </>

                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout >
    )
}

export default DetailBook;