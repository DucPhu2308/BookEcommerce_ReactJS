import DefaultLayout from "@/layouts/DefaultLayout/DefaultLayout";
import NavigationBar from "@/components/User/NavigationBar/NavigationBar";
import SeenBookList from "../Home/UpdateBook_SeenBookList/SeenBookList/SeenBookList";
import Pagination from './Pagination';
import './BookPage.css'
import { useState, useEffect } from "react";
import BookApi from "../../../API/User/BookApi";

const colNumber = 3;
const recordsPerPage = 15;

const HistoryBookPage = () => {

    const [listBooks, setListBooks] = useState([]);
    // Load books
    useEffect(() => {
        BookApi.getBookInHistory().then((res) => {
            // Lấy danh sách bookRead từ dữ liệu trả về
            const bookReadList = res.data.data.map((item) => item.bookRead);
            setListBooks(bookReadList);
        });
    }, []);

    return (
        <>
            <DefaultLayout>
                <div className="container_body">
                    <NavigationBar />
                    <div className="container_nav_2">
                        <div className="book_page_list">
                            <div className="book_page_list_title">
                                Truyện đang theo dõi
                            </div>
                            {listBooks.length === 0 && (
                                <div className="book_page_list_notice">
                                    <span>Bạn chưa xem truyện nào</span>
                                </div>
                            )}
                            {listBooks.length > 0 && (
                                <Pagination
                                    list={listBooks}
                                    colNumber={colNumber}
                                    recordsPerPage={recordsPerPage}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </DefaultLayout>
        </>
    );
};
export default HistoryBookPage;
