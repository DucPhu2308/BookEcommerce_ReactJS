import SeenBookItem from "@/components/User/SeenBookItem/SeenBookItem";
import "./SeenBookList.css";

import { Link } from "react-router-dom";

const SeenBookList = ({ list, max }) => {
  if(!list) return null;
  const token = localStorage.getItem("token");

  return (
    <div className="container_nav_2_seenBooks">
      <div className="container_nav_2_seenBooks_title">
        <span>Truyện đã xem</span>
      </div>

      {/* if user not login */}
      {!token && (
        <div className="container_nav_2_seenBooks_message">
          <span><Link style={{
            backgroundColor: "#111",
            color: "#eee",
          }} to="/login">Đăng nhập</Link> để mở tính năng truyện đã xem</span>
        </div>
      )}

      {/* if user login but not seen any book */}
      {token && list.length === 0 && (
        <div className="container_nav_2_seenBooks_message">
          <span>Bạn chưa xem truyện nào</span>
        </div>
      )}
        
      {/* if user login and seen some books */}
      {token && list.length > 0 && 
      (<ul>
        {/* display to maxSeenBooks */}
        {list.slice(0, max).map(
          (book, index) => (
            console.log(book),
            (
              <li key={index}>
                <SeenBookItem book={book.bookRead} />
              </li>
            )
          )
        )}
      </ul>)}
    </div>
  );
};

export default SeenBookList;
