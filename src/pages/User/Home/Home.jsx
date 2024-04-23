import { useEffect, useState } from "react";

import DefaultLayout from "@/layouts/DefaultLayout/DefaultLayout";
import NavigationBar from "@/components/User/NavigationBar/NavigationBar";
import RankingList from "./RankingList/RankingList";
import HotBookList from "./HotBookList/HotBookList";
import UpdateBookList from "./UpdateBook_SeenBookList/UpdateBookList/UpdateBookList";
import SeenBookList from "./UpdateBook_SeenBookList/SeenBookList/SeenBookList";


import './Home.css';
import BookApi from "../../../API/User/BookApi";




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

