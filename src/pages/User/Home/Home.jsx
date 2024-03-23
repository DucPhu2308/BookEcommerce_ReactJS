import { useEffect } from 'react';
import BookItem from '@/components/User/BookItem/BookItem';
import DefaultLayout from '@/layouts/DefaultLayout/DefaultLayout';
import NavigationBar from "@/components/User/NavigationBar/NavigationBar";
import SeenBookItem from '@/components/User/SeenBookItem/SeenBookItem'
import './Home.css';
import HotBookItem from '../../../components/User/HotBookItem/HotBookItem';

const colNumber = 2;
const maxSeenBooks = 3;

const listBooks = [
  {
    id: 1,
    name: 'Truyện 1',
    img: 'https://i.imgur.com/0y5CnXh.jpg',
  },
  {
    id: 2,
    name: 'Truyện 2',
    img: 'https://i.imgur.com/0y5CnXh.jpg',
  },
  {
    id: 2,
    name: 'Truyện 2',
    img: 'https://i.imgur.com/0y5CnXh.jpg',
  },
  {
    id: 2,
    name: 'Truyện 2',
    img: 'https://i.imgur.com/0y5CnXh.jpg',
  },
  {
    id: 2,
    name: 'Truyện 2',
    img: 'https://i.imgur.com/0y5CnXh.jpg',
  }
];

const UserHome = () => {
  // add Home.js logic here
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/src/pages/User/Home/script.js';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [])

  return (
    <>
      <DefaultLayout>
        <div className="container_body">
          <NavigationBar />
          {/* Truyện hot trong ngày */}
          <div className="container_nav_1">
            <div className="container_nav_1_title">
              <span>Truyện hot trong ngày</span>
            </div>
            <div className="container_nav_1_listBooks">
              <div className="container_nav_1_listBooks_box">
                <ul>
                  {listBooks.map((book) => (
                    <li key={book.id}>
                      <a href="#">
                        <HotBookItem book={book} />
                      </a>
                      
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="container_nav_1_listBooks_button">
              <div className="btn_nav_1_listBooks left">
                <span> {"<"} </span>

              </div>
              <div className="btn_nav_1_listBooks right">
                <span>{">"}</span>

              </div>
            </div>
            <div className="container_nav_1_listBooks_circles">
              <ul>
                <li>
                  <div className="circle been"></div>
                </li>
                <li>
                  <div className="circle"></div>
                </li>
                <li>
                  <div className="circle"></div>
                </li>
              </ul>
            </div>
          </div>

          <div className="container_nav_2">
            {/* Truyện mới cập nhật */}
            <div className="container_nav_2_listBooks">
              <div className="container_nav_2_listBooks_title">
                <span className="SeeUpdate">Truyện mới cập nhật</span>
                <a href="#" className="SeeTotal">Xem tất cả {'>>'}</a>
              </div>
              <table>
                {/* display list in colNumber column */}
                {
                  listBooks.map((book, index) => {
                    if (index % colNumber === 0) {
                      return (
                        <tr key={index}>
                          <td>
                            <a href="index.html">
                              <BookItem book={book} />
                            </a>

                          </td>
                          {index + 1 < listBooks.length && (
                            <td>
                              <a href="index.html">
                                <BookItem book={listBooks[index + 1]} />
                              </a>
                            </td>
                          )}
                        </tr>
                      );
                    }
                  })
                }

              </table>
            </div>

            {/* Truyện đã xem */}
            <div className="container_nav_2_seenBooks">
              <div className="container_nav_2_seenBooks_title">
                <span>Truyện đã xem</span>
              </div>

              <ul>
                {/* display to maxSeenBooks */}
                {listBooks.slice(0, maxSeenBooks).map((book) => (
                  <li key={book.id}>
                    <a href="#">
                      <SeenBookItem book={book} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export default UserHome;