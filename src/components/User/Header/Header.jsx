import { useState, useEffect, useRef, useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/images/logo.png";
import ItemUserSuccessLogin from "./ItemUserSuccessLogin/ItemUserSuccessLogin";
import BookApi from "../../../API/User/BookApi";
import ItemBoxSearchName from "./ItemBoxSearchName/ItemBoxSearchName";
import { UserContext } from "@/providers/UserProvider";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const Header = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [books, setBooks] = useState([]);
  const [showSearchBox, setShowSearchBox] = useState(false);
  const inputSearch = useRef(null);
  const [noSearchResults, setNoSearchResults] = useState(false);

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
    navigate(`/book/${id}`);
  };

  const handleSearchBoxKeyDown = (event) => {
    if (event.key === "Enter") {
      let params = `?title=${inputSearch.current.value}`;
      navigate(`/search${params}`);
    }
  };

  const handleSearchInputChange = (e) => {
    
    const searchValue = e.target.value.toLowerCase();
    const searchItems = document.querySelectorAll(".header_search_keybox li");
    let found = false;

    searchItems.forEach((item) => {
      if (item.textContent.toLowerCase().indexOf(searchValue) > -1) {
        item.style.display = "block";
        found = true;

      } else {
        item.style.display = "none";

      }

    });
    if (!found) {
      setNoSearchResults(true);
    } else {
      setNoSearchResults(false);
    }
  };

  const handleSearchBoxFocus = () => {
    setShowSearchBox(true);
  };

  const handleSearchBoxBlur = () => {
    setShowSearchBox(false);
  };





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
              <input
                onKeyDown={handleSearchBoxKeyDown}
                onChange={handleSearchInputChange}
                onFocus={handleSearchBoxFocus}
                onBlur={handleSearchBoxBlur}
                type="text"
                name="search"
                placeholder="Search..."
                ref={inputSearch}
              />
              <div className="header_search_icon">
                <button>
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
            {showSearchBox && (
              <div className="header_search_keybox">
                <ul>
                  {books.map((book) => (
                    <li key={book.id} onClick={() => handleDirectInfoBook(book.id)}>
                      <ItemBoxSearchName key={book.id} book={book} />
                    </li>
                  ))
                  }
                  {noSearchResults && (
                    <li>
                      <p>Không thấy kết quả</p>
                    </li>
                  )}
                </ul>
              </div>
            )}
          </li>
          {user ? (
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
};

export default Header;