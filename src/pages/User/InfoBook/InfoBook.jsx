import { useEffect, useRef, useState ,} from "react";
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
    const [listBook, setListBook] = useState([]);
    const [listFollowBook, setListFollowBook] = useState([]);
    const [listRating, setListRating] = useState([]);
    const [checkEdit, setCheckEdit] = useState(false);
    const [listGenre, setListGenre] = useState([]);
    const [valueRating, setValueRating] = useState(0);
    const [valueContent, setValueContent] = useState("");
    const [checkRating, setCheckRating] = useState(false);
    const [checkFollow, setCheckFollow] = useState(false);
    const [view, setView] = useState(0);
    const [avg_rating, setAvg_rating] = useState(0);
    localStorage.setItem("idBook", id);
    
    const inputChapterSearch= useRef(null);
    

    useEffect(() => {
        const inputChapterSearchRef = inputChapterSearch.current;
        const handleKeyUp = (e) => {
            const searchValue = e.target.value.toLowerCase();
            
            const searchItems = document.querySelectorAll(".container_info_book_body_description_left_list_genre_box ul li");
            searchItems.forEach((item) => {
                if (item.textContent.toLowerCase().indexOf(searchValue) > -1) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        }
        if (inputChapterSearchRef) {
            inputChapterSearchRef.addEventListener("keyup", handleKeyUp);
        }
        return () => {
            if (inputChapterSearchRef) {
                inputChapterSearchRef.removeEventListener("keyup", handleKeyUp);
            }
        }
    }, []);

    

    // fetch book by id
    useEffect(() => {
        const fetchBook = async () => {
            try {
                const response = await BookApi.getBookById(id);
                setBook(response.data.data);
                // setListChapter(response.data.data.chapters);
                setListGenre(response.data.data.genres);
                setListFollowBook(response.data.data.users_follow);
                if (response.data.data.users_follow.find((item) => item.id === JSON.parse(localStorage.getItem("user")).id)) {
                    setCheckFollow(true);
                }
                setView(response.data.data.views);
                localStorage.setItem("nameBook", response.data.data.title);
                if (response.data.data.userOwn?.id === JSON.parse(localStorage.getItem("user")).id) {
                    setCheckEdit(true);
                }
            } catch (error) {
                console.log("Failed to fetch book: ", error);
            }
        };
        fetchBook();
    }, []);

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const response = await BookApi.getAll();
                setListBook(response.data.data);
                
            } catch (error) {
                console.log("Failed to fetch book: ", error);
            }
        };
        fetchBook();
    }, []);


    // fetch chapter by book id
    useEffect(() => {
        const fetchChapter = async () => {
            try {
                const response = await ChapterApi.getChapterByBook(id);
                setListChapter(response.data.data);
            } catch (error) {
                console.log("Failed to fetch chapter: ", error);
            }
        };
        fetchChapter();
    }, [id, listChapter]);

    useEffect(() => {
        const fetchRating = async () => {
            try {
                const response = await RatingApi.getRatingByBook(id);
                setListRating(response.data.data);
            }
            catch (error) {
                console.log("Failed to fetch rating: ", error);
            }
        }
        fetchRating();
    }, []);

    useEffect(() => {
        const fetchRating = async () => {
            try {
                const response = await RatingApi.getRatingByBook(id);
                let sum = 0;
                response.data.data.map((rating) => {
                    sum += rating.star;
                })
                setAvg_rating(sum / response.data.data.length);
                console.log(avg_rating);
            } catch (error) {
                console.log("Failed to fetch rating: ", error);
            }
        }
        fetchRating();
    }, [id])

    const renderNumberFollowBook = () => {
        if (listFollowBook.length > 0) {
            return <span>Follow: {listFollowBook.length}</span>;
        }
        return <span> Follow: 0</span>;
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

    const handleFollowBook = (id) => {
        UserApi.followBook(id)
            .then(() => {
                const newFollowBook = [...listFollowBook];
                newFollowBook.push({ id: JSON.parse(localStorage.getItem("user")).id });
                setListFollowBook(newFollowBook);
                setCheckFollow(true);
            })
            .catch(() => {
                toast.error("Follow book thất bại");
            });
    }

    const handleUnFollowBook = (id) => {
        UserApi.followBook(id)
            .then(() => {
                const newFollowBook = listFollowBook.filter((item) => item.id !== JSON.parse(localStorage.getItem("user")).id);
                setListFollowBook(newFollowBook);
                setCheckFollow(false);
            })
            .catch(() => {
                toast.error("Unfollow book thất bại");
            });
    }

    const renderButtonFollow = (id) => {
        if (listFollowBook.length > 0) {
            if (checkFollow) {
                return (
                    <button className="btn_liked_book" onClick={() => handleUnFollowBook(id)}>
                        <i className="fas fa-heart"></i>Đã yêu thích</button>
                )
            }
            else {
                return (
                    <button className="btn_like_book" onClick={() => handleFollowBook(id)}>
                        <i className="fas fa-heart"></i>Yêu thích</button>
                )
            }
        }
        return (
            <button className="btn_like_book" onClick={() => handleFollowBook(id)}>
                <i className="fas fa-heart"></i>Yêu thích</button>
        )
    }
    const handleChangeContent = (event) => {
        setValueContent(event.target.value);
    }

    const handleBoxRating = () => {
        setCheckRating(true);
    }
    const handlePostRating = () => {
        const data = {
            content: valueContent,
            star: valueRating,
            book: book.id
        }
        RatingApi.createRating(data)
            .then(() => {
                toast.success("Đánh giá thành công");
                setCheckRating(false);
                setValueContent("");
                setValueRating(0);
                setListRating([...listRating, { user: JSON.parse(localStorage.getItem("user")), content: valueContent, star: valueRating, createdAt: new Date().toLocaleDateString() }]);
            })
            .catch(() => {
                toast.error("Đánh giá thất bại");
            });
    }

    const renderListRating = () => {
        if (listRating.length > 0) {
            return listRating.map((item, index) => {
                return (
                    <div className="container_info_book_body_description_left_listRating_body" key={index}>

                        <div className="container_info_book_body_description_left_listRating_body_item">
                            <div className="container_info_book_body_description_left_listRating_body_item_left">
                                <img src={item.user?.avatar || PlaceholderImage} alt="avatar" />
                            </div>
                            <div className="container_info_book_body_description_left_listRating_body_item_right">
                                <div className="title_1">
                                    <div className="title_2">
                                        <span>{item.user?.displayName}</span>
                                        <Rating
                                            name="read-only"
                                            value={avg_rating}
                                            readOnly
                                        />
                                    </div>
                                    <div className="title_3">
                                        <pre>{item.content}</pre>
                                    </div>

                                </div>
                                <span>{item.createdAt}</span>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    }


    const renderBoxRating = () => {
        if (checkRating) {
            return (
                <>

                    <div className="container_info_book_body_description_left_rating_body">
                        <div className="container_info_book_body_description_left_rating_title">
                            <span>Đánh giá</span>
                        </div>
                        <Rating
                            name="simple-controlled"
                            value={valueRating}
                            onChange={(event, newValue) => {
                                setValueRating(newValue);
                            }}
                        />
                        <div className="container_info_book_body_description_left_rating_body_textarea">
                            <textarea placeholder="Nhập đánh giá của bạn" value={valueContent} onChange={handleChangeContent} />
                        </div>
                    </div>
                    <div className="container_info_book_body_description_left_rating_buttonAction">
                        <button className="btn_cancel_rating" onClick={() => setCheckRating(false)}>Hủy</button>
                        <button className="btn_rating" onClick={handlePostRating}>Gửi</button>
                    </div>

                </>
            )
        }
        else {
            return (
                <button onClick={handleBoxRating}>
                    <i className="fas fa-star"></i>Đánh giá
                </button>
            )
        }
    }

    return (
        <DefaultLayout>
            <div className="container_info_book">
                <div className="container_info_book_body">
                    <div className="container_info_book_body_image_title_box">
                        <div className="container_info_book_body_image_title_left">
                            <span className="title_bold">{book.title}</span>
                            <span>Lượt xem:{view}</span>
                            <span>Rate: 
                                <Rating name="read-only" value={avg_rating} readOnly />
                                {book.avgRating}</span>
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
                                    <div className="container_info_book_body_description_left_list_genre_search">
                                        <input type="text" placeholder="Tìm kiếm chương" ref={inputChapterSearch} />
                                        <button><i className="fas fa-search"></i></button>
                                    </div>
                                    <ItemListChapter onToggleActiveChapter={handleToggleActiveChapter} list={listChapter} checkEdit={checkEdit} />
                                </div>
                            </div>

                            <div className="container_info_book_body_description_left_rating">
                                {renderBoxRating()}
                            </div>

                            <div className="container_info_book_body_description_left_listRating">
                                <div className="box_item_info_title">
                                    <span>Đánh giá</span>
                                </div>

                                {renderListRating()}

                            </div>
                        </div>

                        <div className="container_info_book_body_description_right">
                            <div className="container_info_book_body_description_right_action">
                                {renderButtonFollow(book.id)}

                                <button className="btn_report_book">
                                    <i className="fas fa-exclamation-triangle"></i>Báo cáo</button>
                                {renderButton(checkEdit)}
                            </div>
                            <div className="container_info_book_body_description_right_maybe_like">
                                <div className="container_info_book_body_description_right_maybe_like_title">
                                    <span>Có thể bạn thích</span>
                                </div>
                                <div className="container_info_book_body_description_right_maybe_like_body">
                                    <ItemListLoveBook listBook={listBook} userOwn={book.userOwn?.id}/>
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