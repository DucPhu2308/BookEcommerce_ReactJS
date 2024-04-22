import "./NavigationBar.css";
import { NavLink } from 'react-router-dom';
import { useState } from "react";

const Dropdown = ({ categories }) => {
  const numCols = 4; // Số cột

  const numRows = Math.ceil(categories.length / numCols); // Số hàng

  const renderGrid = () => {
    return Array(numRows)
      .fill()
      .map((_, rowIndex) => (
        <div className="dropdown-row" key={rowIndex}>
          {categories.slice(rowIndex * numCols, (rowIndex + 1) * numCols).map((category, colIndex) => (
            <div key={colIndex} className="dropdown-item">
              {category}
            </div>
          ))}
        </div>
      ));
  };

  return <div className="dropdown">{renderGrid()}</div>;
};

function NavigationBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const categories = ["Action", "Horror", "Fantasy", "Comedy", "Romance"];

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
