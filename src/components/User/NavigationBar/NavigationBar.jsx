import "./NavigationBar.css";
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from "react";
import GenreApi from "../../../API/Admin/GenreApi";

const Dropdown = ({ genre }) => {
  const numCols = 4;
  const numRows = genre ? Math.ceil(genre.length / numCols) : 0;

  const renderGrid = () => {
    return Array(numRows)
      .fill()
      .map((_, rowIndex) => (
        <div className="dropdown-row" key={rowIndex}>
          {genre.slice(rowIndex * numCols, (rowIndex + 1) * numCols).map((category, colIndex) => (
            <div key={colIndex} className="dropdown-item">
              {category.name}
            </div>
          ))}
        </div>
      ));
  };

  return <div className="dropdown">{renderGrid()}</div>;
};

function NavigationBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [listGenre, setListGenre] = useState([]);

  useEffect(() => {
    async function fetchgenre() {
      try {
        const response = await GenreApi.getAll();
        setListGenre(response.data.data);
      } catch (error) {
        console.error("Error fetching genre:", error);
      }
    }

    fetchgenre();
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="container_options">
      <ul>
        <li>
          <NavLink to="/" activeClassName="active">
            Trang chủ
          </NavLink>
        </li>
        <li>
          <NavLink to="/NewBook" activeClassName="active">
            Truyện mới
          </NavLink>
        </li>
        <li>
          <NavLink to="/SubcribeBook" activeClassName="active">
            Theo dõi
          </NavLink>
        </li>
        <li>
          <NavLink to="/HistoryBook" activeClassName="active">
            Lịch sử
          </NavLink>
        </li>
        <li>
          <NavLink to="/Search" activeClassName="active">
            Tìm kiếm
          </NavLink>
        </li>
        <li>
          <div className="category" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
            Thể loại
            {isDropdownOpen && <Dropdown genre={listGenre} />}
          </div>
        </li>

      </ul>
    </div>
  );
}

export default NavigationBar;