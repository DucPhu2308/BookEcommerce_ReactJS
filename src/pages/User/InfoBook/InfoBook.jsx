import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import DefaultLayout from "../../../layouts/DefaultLayout/DefaultLayout";
import "./InfoBook.css";
import PlaceholderImage from "@/assets/images/placeholder-image.png";
import ItemListChapter from "./ItemListChapter";
import ItemListGenre from "./ItemListGenre";
import ItemListLoveBook from "./ItemListLoveBook";
import BookApi from "../../../API/User/BookApi";
import UserApi from "../../../API/User/UserApi";
import ChapterApi from "../../../API/User/ChapterApi";
import RatingApi from "../../../API/User/RatingApi";
import Rating from "@mui/material/Rating";
const InfoBook = () => {
    const [book, setBook] = useState({});
    const id = window.location.pathname.split("/")[2];
    const [listChapter, setListChapter] = useState([]);
    const [listFollowBook, setListFollowBook] = useState([]);
    const [checkEdit, setCheckEdit] = useState(false);
    const [listGenre, setListGenre] = useState([]);
    const [valueRating, setValueRating] = useState(0);
    localStorage.setItem("idBook", id);

    // fetch book by id
    useEffect(() => {
        const fetchBook = async () => {
            try {
                const response = await BookApi.getBookById(id);
                setBook(response.data.data);
                // setListChapter(response.data.data.chapters);
                setListGenre(response.data.data.genres);
                localStorage.setItem("nameBook", response.data.data.title);
                if (response.data.data.userOwn.id === JSON.parse(localStorage.getItem("user")).id) {
                    setCheckEdit(true);
                }
            } catch (error) {
                console.log("Failed to fetch book: ", error);
            }
        };
        fetchBook();
    }, [id, listChapter]);

    // fetch chapter by book id
    useEffect(() => {
        const fetchChapter = async () => {
            try {
                const response = await ChapterApi.getChapterByBook(id);
                console.log(response);
                setListChapter(response.data.data);
            } catch (error) {
                console.log("Failed to fetch chapter: ", error);
            }
        };
        fetchChapter();
    }, [id]);

    useEffect(() => {
        const fetchFollowBook = async () => {
            try {
                const response = await UserApi.getFollowBooks();
                setListFollowBook(response.data.data);
            } catch (error) {
                console.log("Failed to fetch follow book: ", error);
            }
        };
        fetchFollowBook();
    }, [id]);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "/src/pages/User/InfoBook/script.jsx";
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, [id]);

    const renderNumberFollowBook = () => {
        if (listFollowBook.length > 0) {
            return <span>Follow: {listFollowBook.length}</span>;
        }
        return <span>0</span>;
    }

    const renderButton = (check) => {
        if (check) {
            return (
                <>
                    <div className="btn_action">
                        <button className="btn_edit_book" onClick={() => { window.location.href = `/update-book/${id}` }}>Sửa</button>
                        <button className="btn_add_chapter" onClick={() => { window.location.href = `/add-chapter` }}>Thêm chương</button>
                    </div>
                </>

            )
        }
    }
    

    const handleToggleActiveChapter = (chapter, index) => {
        const newChapter = { ...chapter, active: !chapter.active, book: chapter.bookId };
        ChapterApi.updateChapter(newChapter, chapter.id)
            .then(() => {
                const newChapterList = [...listChapter];
                newChapterList[index] = newChapter;
                console.log(newChapterList[index]);
                setListChapter(newChapterList);
                toast.success("Cập nhật trạng thái chương thành công");
            });
    }
    return (
        <DefaultLayout>
            <div className="container_info_book">
                <div className="container_info_book_body">
                    <div className="container_info_book_body_image_title_box">
                        <div className="container_info_book_body_image_title_left">
                            <span className="title_bold">{book.title}</span>
                            <span>Lượt xem</span>
                            <span>Rate: {book.avgRating}</span>
                            {renderNumberFollowBook()}
                        </div>
                        <div className="container_info_book_body_image_title_center">
                            <img src={book.coverImage || PlaceholderImage} alt="book" />
                        </div>
                        <div className="container_info_book_body_image_title_right">
                            <div className="container_info_book_body_image_title_right_author">
                                <span>
                                    Tác giả: {book.userOwn?.displayName}
                                </span>
                            </div>
                            <div className="container_info_book_body_image_title_right_list_genre">
                                <span>Genre</span>
                                <div className="container_info_book_body_image_title_right_list_genre_body">

                                    <ItemListGenre listGenre={listGenre} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container_info_book_body_description">
                        <div className="container_info_book_body_description_left">
                            <div className="container_info_book_body_description_left_item_long_desc">
                                <span>Long desc:</span>
                                <pre>{book.description} </pre>
                            </div>

                            <div className="container_info_book_body_description_left_list_genre">
                                <div className="box_item_info_title">
                                    <span>Danh sách chương</span>
                                </div>

                                <div className="container_info_book_body_description_left_list_genre_box">

                                    <ItemListChapter onToggleActiveChapter={handleToggleActiveChapter} list={listChapter} checkEdit={checkEdit} />
                                </div>
                            </div>

                            <div className="container_info_book_body_description_left_rating">
                                <div className="container_info_book_body_description_left_rating_title">
                                    <span>Đánh giá</span>
                                </div>
                                <div className="container_info_book_body_description_left_rating_body">
                                    <Rating
                                        name="simple-controlled"
                                        value={valueRating}
                                        onChange={(event, newValue) => {
                                            setValueRating(newValue);
                                        }}
                                    />
                                    <button className="btn_rating" onClick={() => {
                                        RatingApi.createRating({ rating: valueRating, book: id, content: ""})
                                            .then(() => {
                                                toast.success("Đánh giá thành công");
                                            })
                                            .catch(() => {
                                                toast.error("Đánh giá thất bại");
                                            });
                                    }}>Đánh giá</button>
                                </div>
                            </div>
                        </div>

                        <div className="container_info_book_body_description_right">
                            <div className="container_info_book_body_description_right_action">
                                <button className="btn_like_book">
                                    <i className="fas fa-heart"></i>Yêu thích</button>

                                <button className="btn_liked_book">
                                    <i className="fas fa-heart"></i>Đã yêu thích</button>

                                <button className="btn_report_book">
                                    <i className="fas fa-exclamation-triangle"></i>Báo cáo</button>
                                {renderButton(checkEdit)}
                            </div>
                            <div className="container_info_book_body_description_right_maybe_like">
                                <div className="container_info_book_body_description_right_maybe_like_title">
                                    <span>Có thể bạn thích</span>
                                </div>
                                <div className="container_info_book_body_description_right_maybe_like_body">
                                    <ItemListLoveBook />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </DefaultLayout>

    )
}


export default InfoBook;