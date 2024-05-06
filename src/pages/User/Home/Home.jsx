import { useEffect, useState } from "react";

import DefaultLayout from "@/layouts/DefaultLayout/DefaultLayout";
import NavigationBar from "@/components/User/NavigationBar/NavigationBar";
import RankingList from "./RankingList/RankingList";
import HotBookList from "./HotBookList/HotBookList";
import UpdateBookList from "./UpdateBook_SeenBookList/UpdateBookList/UpdateBookList";
import SeenBookList from "./UpdateBook_SeenBookList/SeenBookList/SeenBookList";


import './Home.css';
import BookApi from "../../../API/User/BookApi";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const UserHome = () => {
  const [listNewBooks, setListNewBooks] = useState([]);
  const [listBestRateBooks, setListBestRateBooks] = useState([]);
  const [listMostViewBooks, setListMostViewBooks] = useState([]);
  const [listMostFollowBooks, setListMostFollowBooks] = useState([]);
  const [listSeenBooks, setListSeenBooks] = useState([]);
  const [listMostBuyBooks, setListMostBuyBooks] = useState([]);
  const [post, setPost] = useState(null);

  // load books
  useEffect(() => {
    BookApi.getTopNBooksSortByDate(10).then((res) => {
      setListNewBooks(res.data.data);
      setPost(res.data.data);
    });

    BookApi.getBestRateBooks().then((res) => {
      setListBestRateBooks(res.data.data);
    });

    BookApi.getMostViewBooks().then((res) => {
      setListMostViewBooks(res.data.data);
    });

    BookApi.getMostFollowBooks().then((res) => {
      setListMostFollowBooks(res.data.data);
    });

    BookApi.getMostBuyBooks().then((res) => {
      setListMostBuyBooks(res.data.data);
    });

    if (localStorage.getItem("token")) {
      BookApi.getBookInHistory().then((res) => {
        setListSeenBooks(res.data.data);
      });
    }
    
  }, []);
  return (
    <>
      <DefaultLayout>
        {post === null ? (
          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        ) : null}

        <div className="container_body">
          <NavigationBar />
          {/* Truyện hot trong ngày */}

          <div className="container_nav_1">
            <HotBookList list={listMostViewBooks} />
          </div>
          <div className="container_nav_2">
            {/* Truyện mới cập nhật */}
            <UpdateBookList list={listNewBooks} />

            {/* Truyện đã xem */}
            <SeenBookList list={listSeenBooks} max={4} />
          </div>
          <div className="container_nav_3">

            <RankingList title="Trả phí phổ biến nhất" list={listMostBuyBooks} />
            <RankingList title="Theo dõi nhiều" list={listMostFollowBooks} />
            <RankingList title="Đánh giá tốt" list={listBestRateBooks} />

          </div>
        </div>



      </DefaultLayout>
    </>
  );
};


export default UserHome;

