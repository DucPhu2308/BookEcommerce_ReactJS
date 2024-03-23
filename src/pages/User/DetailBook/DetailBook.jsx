import DefaultLayout from "../../../layouts/DefaultLayout/DefaultLayout";
import "./DetailBook.css";

const DetailBook = () => {
    return (
        <DefaultLayout>
            <div className="container_bookDetail_body">
                <div className="container_bookDetail_taskbar">
                    <ul>
                        <li>
                            <div className="container_bookDetail_taskbar_box">
                                <div className="container_bookDetail_taskbar_box_img">

                                </div>
                                <div className="container_bookDetail_taskbar_box_title">
                                    <h3>Title</h3>
                                    <span>author</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="container_bookDetail_taskbar_button">
                                <button className="dark">Theo dõi</button>
                                <button className="white">Đánh giá</button>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="container_bookDetail_nav_1">
                    <div className="container_bookDetail_nav_1_author">


                        <div className="container_bookDetail_nav_1_author_info">
                            <img src="download.png" alt="account" />
                            <span>Nguyễn Nhật Ánh</span>
                        </div>

                    </div>
                    <div className="container_bookDetail_nav_1_displayBook">
                        <div className="container_bookDetail_nav_1_displayBook_body">

                            <div className="container_bookDetail_nav_1_displayBook_body_tittle">
                                <span>Chương: Title</span>

                            </div>


                        </div>
                        <div className="container_bookDetail_nav_1_displayBook_body_button">
                            <button className="dark">Tập trước</button>
                            <button className="dark">Tập sau</button>
                        </div>
                        <div className="container_bookDetail_nav_1_displayBook_comment">
                            <div className="container_bookDetail_nav_1_displayBook_comment_title">
                                <span>Bình luận </span>
                            </div>
                            <div className="container_bookDetail_nav_1_displayBook_comment_form">
                                <div className="container_bookDetail_nav_1_displayBook_comment_form_img">
                                    <img src="download.png" alt="account" />
                                </div>
                                <form action="">
                                    <textarea name="" id="" ></textarea>
                                </form>


                            </div>

                            <div className="container_bookDetail_nav_1_displayBook_comment_form_listComments">
                                <div className="container_bookDetail_nav_1_displayBook_comment_form_listComments_item">
                                    <div className="container_bookDetail_nav_1_displayBook_comment_form_listComments_item_img">
                                        <img src="download.png" alt="account" />
                                    </div>
                                    <div className="container_bookDetail_nav_1_displayBook_comment_form_listComments_item_content">
                                        <span className="author">Nguyễn Nhật Ánh</span>
                                        <span className="content">Chương hay quá</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout >
    )
}

export default DetailBook;