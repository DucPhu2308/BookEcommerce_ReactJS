import DefaultLayout from "@/layouts/DefaultLayout/DefaultLayout";
import "./MyBooks.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import BookApi from "../../../API/User/BookApi";
import RowItemMyBook from "../MyBooks/RowItemMyBook/RowItemMyBook";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const MyBooks = () => {

  const [listBook, setListBook] = useState([]);

  useEffect(() => {
    const user= JSON.parse(localStorage.getItem("user"));
    const fetchListBook = async () => {
      try {
        const response = await BookApi.getBookByUserId(user.id);
        console.log(response);
        setListBook(response.data.data);
      } catch (error) {
        console.log("Failed to fetch list book: ", error);
      }
    };
    fetchListBook();
  }, []);


  const renderListBook = () => {
    if (listBook != null) {
      return (
        listBook.map((book) => (
          <RowItemMyBook book={book} book_id={book.id} listBooks={listBook}  key={book.id} />
        ))
      )
    }
    else {
      return (
        <span style={{ fontSize: "16px", margin: "20px 0 0 10px", fontWeight: "600" }}>Không có truyện nào</span>
      )
    }
  }

  return (

    <DefaultLayout>
      {listBook.length === 0 && (
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={true}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      <div className="container_mybooks_body">
        <div className="container_mybooks_content">
          <div className="container_mybooks_content_header">
            <span>Truyện của tôi</span>
            <Link to="/add-book" >
              <button>Thêm truyện mới
                <i className="fas fa-circle-plus"></i>
              </button>
            </Link>

          </div>
          <div className="container_mybooks_content_body">
            <div className="container_mybooks_content_body_title">
              <div className="container_mybooks_content_body_title_paga">
                <span>Tất cả truyện</span>
              </div>
            </div>
            <div className="container_mybooks_content_body_box">
              {renderListBook()}
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default MyBooks;
