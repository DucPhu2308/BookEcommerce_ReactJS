import { useState, useEffect,useRef, useContext } from "react";
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
  
  const inputSearch = useRef(null);
  const keyBox = useRef(null);

  useEffect(() => {
    const inputSearchRef = inputSearch.current;
    const keyBoxRef = keyBox.current;
    const handleFocus = () => {
      keyBoxRef.style.display = "block";
    };
    const handleBlur = () => {
      keyBoxRef.style.display = "none";
    }
    const handleKeyUp = (e) => {
      const searchValue = e.target.value.toLowerCase();
      const searchItems = document.querySelectorAll(".header_search_keybox li");
      searchItems.forEach((item) => {
          if (item.textContent.toLowerCase().indexOf(searchValue) > -1) {
              item.style.display = "block";
          } else {
              item.style.display = "none";
          }
      }

      );
    }
    if (inputSearchRef) {
      inputSearchRef.addEventListener("focus", handleFocus);
      inputSearchRef.addEventListener("blur", handleBlur);
      inputSearchRef.addEventListener("keyup", handleKeyUp);
    }
    return () => {
      if (inputSearchRef) {
        inputSearchRef.removeEventListener("focus", handleFocus);
        inputSearchRef.removeEventListener("blur", handleBlur);
        inputSearchRef.removeEventListener("keyup", handleKeyUp);
      }
    }
  }, []);


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
  }, [books]);

  const handleDirectInfoBook = (id) => {
    window.location.href = `/book/${id}`;
  }

  const handleSearchBoxKeyDown = (event) => {
    if (event.key === 'Enter') {
      let params = `?title=${inputSearch.current.value}`;
      navigate(`/search${params}`);
    }
  }


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
              <input onKeyDown={handleSearchBoxKeyDown} type="text" name="search" placeholder="Search..." ref={inputSearch}/>
              <div className="header_search_icon">
                <button>
                  <i className="fas fa-search"></i>
                </button>
              </div>
              <div className="header_search_keybox" ref={keyBox}>
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
                    <li onClick={() => handleDirectInfoBook(book.id)} key={book.id}>
                      <ItemBoxSearchName key={book.id} book={book} />
                    </li>
                  ))}
                </ul>
              </div>

            </div>
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
}

export default Header;
