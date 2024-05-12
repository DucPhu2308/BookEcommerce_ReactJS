import DefaultLayout from "@/layouts/DefaultLayout/DefaultLayout";
import NavigationBar from "@/components/User/NavigationBar/NavigationBar";
import SeenBookList from "../Home/UpdateBook_SeenBookList/SeenBookList/SeenBookList";
import './BookPage.css'
import { useState, useEffect } from "react";
import BookApi from "../../../API/User/BookApi";
import Pagination from './Pagination';


const NewBookPage = () => {
    const [listBooks, setListBooks] = useState([]);

    // load books
    useEffect(() => {
        BookApi.getAll().then((res) => {
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
                                Truyện mới cập nhật
                            </div>
                            <Pagination
                                list={listBooks}
                            />
                        </div>
                    </div>
                </div>
            </DefaultLayout>
        </>
    );
}

export default NewBookPage;
