import "./NavigationBar.css";

function NavigationBar() {
  return (
    
      <div className="container_options">
        <ul>
          <li>
            <div className="container_options_item">
              <span>Trang chủ</span>
            </div>
          </li>
          <li>
            <div className="container_options_item">
              <span>Theo dõi</span>
            </div>
          </li>
          <li>
            <div className="container_options_item">
              <span>Lịch sử</span>
            </div>
          </li>
          <li>
            <div className="container_options_item">
              <span>Thể loại</span>
            </div>
          </li>
        </ul>
      </div>
  );
}

export default NavigationBar;
