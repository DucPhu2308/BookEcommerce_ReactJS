import { useState, useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "@/assets/images/logo.png";
import ItemUserSuccessLogin from "./ItemUserSuccessLogin/ItemUserSuccessLogin";
import BookApi from "../../../API/User/BookApi";
import ItemBoxSearchName from "./ItemBoxSearchName/ItemBoxSearchName";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

function Header() {
  const loggedIn = localStorage.getItem("token");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await BookApi.getAll();
        setBooks(response.data.data);
      } catch (error) {
        console.log("Failed to fetch book list: ", error);
      }
    };
    fetchBooks();
  }, []); 
  
  const handleDirectInfoBook = (id) => {
    window.location.href = `/infoBook/${id}`;
  }

  const inputSearch = document.querySelector(".header_search input");
  const keyBox = document.querySelector(".header_search_keybox");
  if(inputSearch){
    inputSearch.addEventListener("focus", () => {
      keyBox.style.display = "block";
    });
    inputSearch.addEventListener("blur", () => {
      keyBox.style.display = "none";
    });
  }

  inputSearch.addEventListener("keyup", (e) => {
    const searchValue = e.target.value.toLowerCase();
    const searchItems = document.querySelectorAll(".header_search_keybox li");
    searchItems.forEach((item) => {
      if (item.textContent.toLowerCase().indexOf(searchValue) > -1) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });

  return (
    <nav className="header">
      <div className="header_container">
        <ul>
          <li>
            <div className="header_logo">
              <Link to="/">
                <img src={logo} alt="Logo" />
              </Link>
            </div>
          </li>
          <li>
            <div className="header_search">
              <input type="text" name="search" placeholder="Search..." />
              <div className="header_search_icon">
                <button>
                  <i className="fas fa-search"></i>
                </button>
              </div>
              <div className="header_search_keybox">
                <ul>
                    {books.length === 0 ? (
                      <Backdrop
                        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open
                      >
                        <CircularProgress color="inherit" />
                      </Backdrop>
                    ) : null}
                    {books.map((book) => (
                      <li onClick={()=>handleDirectInfoBook(book.id)} key={book.id}>
                        <ItemBoxSearchName key={book.id} book={book} />
                      </li>
                    ))}
                </ul>
              </div>

            </div>
          </li>
          {loggedIn ? (
            <ItemUserSuccessLogin />
          ) : (
            <li>
              <div className="header_nav">
                <ul>
                  <li>
                    <Link to="/login">Đăng nhập</Link>
                  </li>
                  <li>
                    <Link to="/register">Đăng ký</Link>
                  </li>
                </ul>
              </div>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Header;
