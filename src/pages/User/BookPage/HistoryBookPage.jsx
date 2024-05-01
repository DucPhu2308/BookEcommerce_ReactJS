import DefaultLayout from "@/layouts/DefaultLayout/DefaultLayout";
import NavigationBar from "@/components/User/NavigationBar/NavigationBar";
import SeenBookList from "../Home/UpdateBook_SeenBookList/SeenBookList/SeenBookList";
import Reveal from "../../../components/utils/Reveal";
import BookItem from "../../../components/User/BookItem/BookItem";
import './BookPage.css'

const colNumber = 3;
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
        id: 5,
        title: "Truyện 5",
        coverImage: "https://i.imgur.com/0y5CnXh.jpg",
    },
    {
        id: 5,
        title: "Truyện 5",
        coverImage: "https://i.imgur.com/0y5CnXh.jpg",
    },
];


const HistoryBookPage = () => {
    return (
        <>
            <DefaultLayout>
                <div className="container_body">
                    <NavigationBar />
                    <div className="container_nav_2">
                        <div className="book_page_list">
                            <div className="book_page_list_title">
                                Lịch sử đọc truyện
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
                                                {index + 2 < listBooks.length && (
                                                    <td>
                                                        <Reveal>
                                                            <BookItem book={listBooks[index + 2]} />
                                                        </Reveal>
                                                    </td>
                                                )}
                                            </tr>
                                        );
                                    }
                                })}
                            </table>
                        </div>
                    </div>
                </div>
            </DefaultLayout>

        </>
    );
};
export default HistoryBookPage;
