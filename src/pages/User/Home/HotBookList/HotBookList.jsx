import './HotBookList.css';
import HotBookItem from '@/components/User/HotBookItem/HotBookItem';
import { useEffect } from 'react';

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

const HotBookList = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "/src/pages/User/Home/HotBookList/script.js";
        script.async = true;
        document.body.appendChild(script);
    
        return () => {
            document.body.removeChild(script);
        };
    }, []);
    return (
        <>
            <div className="container_nav_1_title">
                <span>Truyện hot trong ngày</span>
            </div>
            <div className="container_nav_1_listBooks">
                <div className="container_nav_1_listBooks_box">
                    <ul>
                        {listBooks.map((book, index) => (
                            <li key={index}>
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
        </>

    )
}

export default HotBookList;