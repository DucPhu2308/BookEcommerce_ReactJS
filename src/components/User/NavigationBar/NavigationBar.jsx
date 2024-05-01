import "./NavigationBar.css";
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from "react";
import GenreApi from "../../../API/Admin/GenreApi";

const Dropdown = ({ categories }) => {
  const numCols = 4;
  const numRows = categories ? Math.ceil(categories.length / numCols) : 0;

  const renderGrid = () => {
    return Array(numRows)
      .fill()
      .map((_, rowIndex) => (
        <div className="dropdown-row" key={rowIndex}>
          {categories.slice(rowIndex * numCols, (rowIndex + 1) * numCols).map((category, colIndex) => (
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
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await GenreApi.getAll();
        setCategories(response.data.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }

    fetchCategories();
  }, []); // Empty dependency array ensures this effect runs only once, equivalent to componentDidMount

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="container_options">
      <ul>
        <li>
          <NavLink to="/" activeClassName="active" >
            Trang chủ
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
          <div className="category" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
            Thể loại
            {isDropdownOpen && <Dropdown categories={categories} />}
          </div>
        </li>
      </ul>
    </div>
  );
}

export default NavigationBar;