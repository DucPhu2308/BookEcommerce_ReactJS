import DefaultLayout from "../../../layouts/DefaultLayout/DefaultLayout";
import "./DetailBook.css";
import imageAccount from "../../../assets/images/account.png";
import { useState, useEffect } from "react";
import CommentApi from "../../../API/User/CommentApi";
import ChapterApi from "../../../API/User/ChapterApi";
const DetailBook = () => {
    const [listComment, setListComment] = useState([])
    const [listChapter, setListChapter] = useState([])
    const [text, setText] = useState('')


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await ChapterApi.getChapterByBook(1)
                setListChapter(response.data.data)
            }
            catch (error) {
                console.log('Failed to fetch data', error)
            }
        }
        fetchData()
    }, [])


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
                chapter: 1
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
    return (
        <DefaultLayout>
            <div className="container_bookDetail_body">
                <div className="container_bookDetail_taskbar">
                    <ul>
                        <li>
                            <div className="container_bookDetail_taskbar_box">
                                <div className="container_bookDetail_taskbar_box_img">

                                </div>
                                <div className="container_bookDetail_taskbar_box_title">
                                    <h3>Title</h3>
                                    <span>author</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="container_bookDetail_taskbar_button">
                                <button className="dark">Theo dõi</button>
                                <button className="white">Đánh giá</button>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="container_bookDetail_nav_1">
                    <div className="container_bookDetail_nav_1_author">
                        <div className="container_bookDetail_nav_1_author_info">
                            <img src="download.png" alt="account" />
                            <span>Nguyễn Nhật Ánh</span>
                        </div>
                    </div>
                    <div className="container_bookDetail_nav_1_displayBook">
                        <div className="container_bookDetail_nav_1_displayBook_body">
                            <div className="container_bookDetail_nav_1_displayBook_body_tittle">
                                <span>Chương: Title</span>
                            </div>
                        </div>
                        <div className="container_bookDetail_nav_1_displayBook_body_button">
                            <button className="dark">Tập trước</button>
                            <button className="dark">Tập sau</button>
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