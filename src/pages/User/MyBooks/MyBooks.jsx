import DefaultLayout from "@/layouts/DefaultLayout/DefaultLayout";
import "./MyBooks.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import AuthorApi from "../../../API/User/AuthorApi";
import RowItemMyBook from "../MyBooks/RowItemMyBook/RowItemMyBook";
const listBook =[
  {
    id:1,
    title:"Truyện 1",
    chapter:3,
    rate:4,
    comment:200,
    view:1000
  },
  {
    id:2,
    title:"Truyện 2",
    chapter:3,
    rate:4,
    comment:200,
    view:1000
  }
]
const MyBooks = () => {
  
  // const [listBook, setListBook] = useState([]);

  // useEffect(() => {
  //   const userId= localStorage.getItem("id");
  //   const fetchListBook = async () => {
  //     try {
  //       const response = await AuthorApi.getBooksByAuthor(1);
  //       console.log(response);
  //       setListBook(response.data.data);
  //     } catch (error) {
  //       console.log("Failed to fetch list book: ", error);
  //     }
  //   };
  //   fetchListBook();
  // });

  
  const renderListBook = () =>{
    if(listBook!=null){
      return(
        listBook.map((book) => (
          <RowItemMyBook book={book} key={book.id} />
        ))
      )
    }
    else{
      return(
        <span style={{fontSize:"16px",margin:"20px 0 0 10px",fontWeight:"600"}}>Không có truyện nào</span>
      )
    }
  }
  

  return (

    <DefaultLayout>
      <div className="container_mybooks_body">
        <div className="container_mybooks_content">
          <div className="container_mybooks_content_header">
            <span>Truyện của tôi</span>
            <Link to="/add-book">
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
