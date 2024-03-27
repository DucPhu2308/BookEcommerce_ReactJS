
import BookItem from "@/components/User/BookItem/BookItem";
import './UpdateBookList.css';
import Reveal from "../../../../../components/utils/Reveal";

const colNumber = 2;
const listBooks = [
    {
      id: 1,
      title: "Truyện 1",
      coverImage: "https://picsum.photos/200",
    },
    {
      id: 2,
      title: "Truyện 2",
      coverImage: "https://placehold.jp/150x150.png",
    },
    {
      id: 2,
      title: "Truyện 2",
      coverImage: "https://i.imgur.com/0y5CnXh.jpg",
    },
    {
      id: 2,
      title: "Truyện 2",
      coverImage: "https://i.imgur.com/0y5CnXh.jpg",
    },
    {
      id: 2,
      title: "Truyện 2",
      coverImage: "https://i.imgur.com/0y5CnXh.jpg",
    },
  ];

const UpdateBookList = () => {
    return(
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
                        <td>
                          <Reveal>
                            <BookItem book={book} />
                          </Reveal>
                        </td>
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