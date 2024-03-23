import { useEffect } from "react";

import BookItem from "@/components/User/BookItem/BookItem";
import DefaultLayout from "@/layouts/DefaultLayout/DefaultLayout";
import NavigationBar from "@/components/User/NavigationBar/NavigationBar";
import SeenBookItem from '@/components/User/SeenBookItem/SeenBookItem'
import './Home.css';
import HotBookItem from '../../../components/User/HotBookItem/HotBookItem';
import RankingList from "./RankingList/RankingList";
import "./Home.css";




const colNumber = 2;
const maxSeenBooks = 3;

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

const UserHome = () => {
  // add Home.js logic here
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/src/pages/User/Home/script.js";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
            <div className="btn_nav_1_listBooks right">
              <span>{">"}</span>
            </div>
          </div>

          <div className="container_nav_2">
            {/* Truyện mới cập nhật */}
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
                          <BookItem book={book} />
                        </td>
                        {index + 1 < listBooks.length && (
                          <td>
                            <BookItem book={listBooks[index + 1]} />
                          </td>
                        )}
                      </tr>
                    );
                  }
                })}
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
                    <SeenBookItem book={book} />
                  </li>
                ))}
              </ul>
            </div>


          </div>
          {/* Truyện đã xem */}

          <div className="container_nav_3">
            <RankingList title="Đọc nhiều" list={listBooks} />
            <RankingList title="Đề cử nhiều" list={listBooks} />
            <RankingList title="Thịnh hành" list={listBooks} />


          </div>
        </div>










      </DefaultLayout>
    </>
  );
};


export default UserHome;

