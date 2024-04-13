import { useEffect ,useState} from "react";
import DefaultLayout from "../../../layouts/DefaultLayout/DefaultLayout";
import "./InfoBook.css";
import ItemListChapter from "./ItemListChapter";
import ItemListGenre from "./ItemListGenre";
import ItemListLoveBook from "./ItemListLoveBook";
import BookApi from "../../../API/User/BookApi";

const bookList=[
    {
        id:1,
        title:"Chapter 1",
    },
    {
        id:2,
        title:"Chapter 2",
    },
]

const InfoBook = () => {
    const [book, setBook] = useState({});
    const id=window.location.pathname.split("/")[2];
    const [listChapter,setListChapter]=useState([]);
    useEffect(() => {
        const fetchBook = async () => {
            try {
                const response = await BookApi.getBookById(id);
                setBook(response.data);
                setListChapter(response.data.chapters);
                
            } catch (error) {
                console.log(error);
            }
        }
        fetchBook();
    }, []);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "/src/pages/User/InfoBook/script.js";
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    });
    
    
    return (
        <DefaultLayout>
            <div className="container_info_book">
                <div className="container_info_book_body">
                    <div className="container_info_book_body_image_title_box">
                        <div className="container_info_book_body_image_title_left">
                            <span className="title_bold">{book.title}</span>
                            <span>Luot xem</span>
                            <span>Rate: {book.avgRating}</span>
                            <span>Follow</span>
                        </div>
                        <div className="container_info_book_body_image_title_center">
                            <img src="book.jpg" alt="book" />
                        </div>
                        <div className="container_info_book_body_image_title_right">
                            <div className="container_info_book_body_image_title_right_author">
                                <span>
                                    Tác giả: {book.userOwn?.username}
                                </span>
                            </div>
                            <div className="container_info_book_body_image_title_right_list_genre">
                                <span>Genre</span>
                                <div className="container_info_book_body_image_title_right_list_genre_body">
                                    
                                    <ItemListGenre />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container_info_book_body_description">
                        <div className="container_info_book_body_description_left">
                            <div className="container_info_book_body_description_left_item_long_desc">
                                <span>Long desc: {book.description} </span>
                            </div>

                            <div className="container_info_book_body_description_left_list_genre">
                                <div className="container_info_book_body_description_left_list_genre_box">
                                    <div className="box_item_info_title">
                                        <span>Danh sách chương</span>
                                    </div>
                                    
                                    <ItemListChapter list={listChapter}/>
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