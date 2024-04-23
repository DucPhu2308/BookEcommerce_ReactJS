import { useEffect, useState } from "react";

import DefaultLayout from "@/layouts/DefaultLayout/DefaultLayout";
import NavigationBar from "@/components/User/NavigationBar/NavigationBar";
import RankingList from "./RankingList/RankingList";
import HotBookList from "./HotBookList/HotBookList";
import UpdateBookList from "./UpdateBook_SeenBookList/UpdateBookList/UpdateBookList";
import SeenBookList from "./UpdateBook_SeenBookList/SeenBookList/SeenBookList";


import './Home.css';
import BookApi from "../../../API/User/BookApi";

/*
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
*/

const UserHome = () => {
  const [listBooks, setListBooks] = useState([]);
  // load books
  useEffect(() => {
    BookApi.getTopNBooksSortByDate(10).then((res) => {
      setListBooks(res.data.data);
    });
  }, []);
  return (
    <>
      <DefaultLayout>

        <div className="container_body">
          <NavigationBar />
          {/* Truyện hot trong ngày */}

          <div className="container_nav_1">
            <HotBookList />
          </div>
          <div className="container_nav_2">
            {/* Truyện mới cập nhật */}

            <UpdateBookList list={listBooks} />

            {/* Truyện đã xem */}

            <SeenBookList />
          </div>
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

