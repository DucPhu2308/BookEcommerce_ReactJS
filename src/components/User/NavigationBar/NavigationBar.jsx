import "./NavigationBar.css";
import { NavLink } from 'react-router-dom';
function NavigationBar() {
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
          <span>Thể loại</span>
        </li>
      </ul>
    </div>
  );
}

export default NavigationBar;
