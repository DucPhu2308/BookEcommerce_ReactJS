import { NavLink } from "react-router-dom";
import BookItem from "@/components/User/BookItem/BookItem";
import './UpdateBookList.css';
import Reveal from "../../../../../components/utils/Reveal";

const colNumber = 2;
const UpdateBookList = ({ list }) => {
  return (
    <div className="container_nav_2_listBooks">
      <div className="container_nav_2_listBooks_title">
        <span className="SeeUpdate">Truyện mới cập nhật</span>
        <NavLink to="/NewBook">
          <div className="SeeTotal">
            Xem tất cả {">>"}
          </div>
        </NavLink>
      </div>
      <table>
        <tbody>
          {/* display list in colNumber column */}
          {list.map((book, index) => {
            if (index % colNumber === 0) {
              return (
                <tr key={index}>
                  <td>
                    <NavLink to={`/infoBook/${book.id}`}>
                      <Reveal>
                        <BookItem book={book} />
                      </Reveal>
                    </NavLink>
                  </td>

                  {index + 1 < list.length && (
                    <td>
                      <NavLink to={`/infoBook/${list[index + 1].id}`}>
                        <Reveal>
                          <BookItem book={list[index + 1]} />
                        </Reveal>
                      </NavLink>
                    </td>
                  )}
                </tr>
              );
            }
            return null; // Add this line to handle the case when the condition is not met
          })}
        </tbody>

      </table>
    </div>
  )
}

export default UpdateBookList;
