import DefaultLayout from "@/layouts/DefaultLayout/DefaultLayout";
import NavigationBar from "@/components/User/NavigationBar/NavigationBar";
import SeenBookList from "../Home/UpdateBook_SeenBookList/SeenBookList/SeenBookList";
import Reveal from "../../../components/utils/Reveal";
import BookItem from "../../../components/User/BookItem/BookItem";
import './SubcribeBookPage.css'
import { useState } from "react";

const colNumber = 3;
const recordsPerPage = 3;
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
        id: 3,
        title: "Truyện 3",
        coverImage: "https://i.imgur.com/0y5CnXh.jpg",
    },
    {
        id: 4,
        title: "Truyện 4",
        coverImage: "https://i.imgur.com/0y5CnXh.jpg",
    },
    {
        id: 5,
        title: "Truyện 5",
        coverImage: "https://i.imgur.com/0y5CnXh.jpg",
    },
    {
        id: 6,
        title: "Truyện 6",
        coverImage: "https://i.imgur.com/0y5CnXh.jpg",
    },
    {
        id: 7,
        title: "Truyện 7",
        coverImage: "https://i.imgur.com/0y5CnXh.jpg",
    },
    {
        id: 8,
        title: "Truyện 8",
        coverImage: "https://i.imgur.com/0y5CnXh.jpg",
    },
    {
        id: 9,
        title: "Truyện 9",
        coverImage: "https://i.imgur.com/0y5CnXh.jpg",
    },
];

const SubcribeBookPage = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const npage = Math.ceil(listBooks.length / recordsPerPage);
    const numbers = [...Array(npage + 1).keys()].slice(1);
    const lastIndex = numbers[numbers.length - 1];
    const firstIndex = 0;
    const records = listBooks.slice((currentPage - 1) * recordsPerPage, currentPage * recordsPerPage);

    // console.log("f: ", firstIndex, ", l: ", lastIndex, ", c: ", currentPage);
    return (
        <>
            <DefaultLayout>
                <div className="container_body">
                    <NavigationBar />
                    <div className="container_nav_2">
                        <div className="sub_book_page_list">
                            <div className="sub_book_page_list_title">
                                Truyện đang theo dõi
                            </div>
                            <table>
                                {records.map((book, index) => (
                                    index % colNumber === 0 && (
                                        <tr key={index / colNumber}>
                                            {records.slice(index, index + 3).map((bookInRow, indexInRow) => (
                                                <td key={indexInRow}>
                                                    <Reveal>
                                                        <BookItem book={bookInRow} />
                                                    </Reveal>
                                                </td>
                                            ))}
                                        </tr>
                                    )
                                ))}
                            </table>
                            <nav>
                                <ul className="sub_book_page_pagination">
                                    <li className="sub_book_page_item">
                                        <button className="sub_book_page_link"
                                            onClick={prePage}>
                                            Prev </button >
                                    </li>
                                    <div className="sub_book_page_number_container">
                                        {
                                            numbers.map((n, i) => (
                                                <li className="sub_book_page_item" key={i}>
                                                    <button className={`sub_book_page_link ${currentPage === n ? "active" : ""}`}
                                                        onClick={() => changeCPage(n)} >{n}</button >
                                                </li>
                                            ))
                                        }
                                    </div>
                                    <li className="sub_book_page_item">
                                        <button className="sub_book_page_link"
                                            onClick={nextPage}>
                                            Next </button >
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <SeenBookList />
                    </div>
                </div>
            </DefaultLayout>

        </>
    )
    function prePage() {
        if (currentPage > firstIndex + 1) {
            setCurrentPage(currentPage - 1)
        }
        else
            setCurrentPage(firstIndex + 1)
    }
    function nextPage() {
        if (currentPage < lastIndex) {
            setCurrentPage(currentPage + 1)
        }
        else
            setCurrentPage(lastIndex)

    }
    function changeCPage(id) {
        setCurrentPage(id)
    }
}

export default SubcribeBookPage;
