import "./NavigationBar.css";

function NavigationBar() {
  return (

    <div className="container_options">
      <ul>
        <li>
          <button className="container_options_item">
            <span>Trang chủ</span>
          </button>
        </li>
        <li>
          <button className="container_options_item">
            <span>Theo dõi</span>
          </button>
        </li>
        <li>
          <button className="container_options_item">
            <span>Lịch sử</span>
          </button>
        </li>
        <li>
          <button className="container_options_item">
            <span>Thể loại</span>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default NavigationBar;
