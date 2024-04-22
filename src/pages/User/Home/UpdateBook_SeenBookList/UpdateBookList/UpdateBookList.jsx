import { Link } from "react-router-dom";
import BookItem from "@/components/User/BookItem/BookItem";
import './UpdateBookList.css';
import Reveal from "../../../../../components/utils/Reveal";
import BookApi from "../../../../../API/User/BookApi";
import { useEffect, useState } from 'react';


const colNumber = 2;
const UpdateBookList = () => {
  const [listBooks, setListBooks] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await BookApi.getAll();
        console.log(response.data);
        // lấy 10 sách cuối cùng trong mảng
        setListBooks(response.data.slice(-10));
      } catch (error) {
        console.log(error);
      }
    };
    fetchBooks();
  });

  return (
    <div className="container_nav_2_listBooks">
      <div className="container_nav_2_listBooks_title">
        <span className="SeeUpdate">Truyện mới cập nhật</span>
        <a href="#" className="SeeTotal">
          Xem tất cả {">>"}
        </a>
      </div>
      <table>
        {/* display list in colNumber column */}
        {listBooks.map((book, index) => {
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

                {index + 1 < listBooks.length && (
                  <td>
                    <Reveal>
                      <BookItem book={listBooks[index + 1]} />
                    </Reveal>
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