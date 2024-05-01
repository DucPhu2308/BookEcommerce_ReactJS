import { Link } from "react-router-dom";
import BookItem from "@/components/User/BookItem/BookItem";
import './UpdateBookList.css';
import Reveal from "../../../../../components/utils/Reveal";

const colNumber = 2;
const UpdateBookList = ({ list }) => {
  return (
    <div className="container_nav_2_listBooks">
      <div className="container_nav_2_listBooks_title">
        <span className="SeeUpdate">Truyện mới cập nhật</span>
        <Link to="/NewBook">
          <div className="SeeTotal">
            Xem tất cả {">>"}
          </div>
        </Link>
      </div>
      <table>
        {/* display list in colNumber column */}
        {list.map((book, index) => {
          if (index % colNumber === 0) {
            return (
              <tr key={index}>
                <Link to={`/infoBook/${book.id}`}>
                  <td>
                    <Reveal>
                      <BookItem book={book} />
                    </Reveal>
                  </td>
                </Link>

                {index + 1 < list.length && (
                  <td>
                    <Link to={`/infoBook/${list[index + 1].id}`}>
                      <Reveal>
                        <BookItem book={list[index + 1]} />
                      </Reveal>
                    </Link>
                  </td>
                )}
              </tr>
            );
          }
        })}
      </table>
    </div>
  )
}

export default UpdateBookList;