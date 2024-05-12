import DefaultLayout from "@/layouts/DefaultLayout/DefaultLayout";
import NavigationBar from "@/components/User/NavigationBar/NavigationBar";
import SeenBookList from "../Home/UpdateBook_SeenBookList/SeenBookList/SeenBookList";
import Pagination from './Pagination';
import './BookPage.css';
import { useState, useEffect } from "react";
import UserApi from "../../../API/User/UserApi";

const SubcribeBookPage = () => {
    const [listBooks, setListBooks] = useState([]);

    // Load books
    useEffect(() => {
        UserApi.getFollowBooks().then((res) => {
            setListBooks(res.data.data);
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
                                    <span>Bạn chưa theo dõi truyện nào</span>
                                </div>
                            )}
                            {listBooks.length > 0 && (
                                <Pagination
                                    list={listBooks}
                                />
                            )}
                        </div>
                        <SeenBookList />
                    </div>
                </div>
            </DefaultLayout>
        </>
    );
};

export default SubcribeBookPage;
