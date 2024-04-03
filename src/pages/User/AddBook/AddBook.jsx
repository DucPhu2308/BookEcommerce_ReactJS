import { useEffect } from 'react'
import DefaultLayout from '../../../layouts/DefaultLayout/DefaultLayout'
import './AddBook.css'

const AddBook = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "/src/pages/User/AddBook/script.js";
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, [])
    return (
        <DefaultLayout>
            <div className="container_addBook_body">
                <div className="container_addBook_taskbar">
                    <ul>
                        <li>
                            <a href="addBook.html"> {'<'} Thêm truyện</a>
                        </li>
                        <li>
                            <div className="container_addBook_taskbar_button">
                                <button className="dark">Hủy</button>
                                <button className="white">Tiếp theo</button>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="container_addBook_nav">
                    <div className="container_addBook_nav_image">
                        <div className="image_form">
                            <span>+ Add image</span>
                        </div>
                    </div>
                    <div className="container_addBook_nav_form">
                        <div className="container_addBook_nav_form_box">
                            <div className="container_addBook_nav_form_box_title">
                                <div className="container_addBook_nav_form_box_paga">
                                    <span>Chi tiết truyện</span>
                                </div>
                            </div>
                            <div className="container_addBook_nav_form_box_body">
                                <form action="#">
                                    <div className="container_addBook_nav_form_box_body_item">
                                        <div className="container_addBook_nav_form_box_body_item_name">
                                            <span>Tiêu đề</span>
                                        </div>
                                        <div className="container_addBook_nav_form_box_body_item_input">
                                            <input type="text" name="bookName" placeholder="Nhập tiêu đề" />
                                        </div>
                                    </div>
                                    <div className="container_addBook_nav_form_box_body_item">
                                        <div className="container_addBook_nav_form_box_body_item_name">
                                            <span>Mô tả</span>
                                        </div>
                                        <div className="container_addBook_nav_form_box_body_item_input">
                                            <textarea name="bookDescription" placeholder="Nhập mô tả truyện"></textarea>
                                        </div>
                                    </div>
                                    <div className="container_addBook_nav_form_box_body_item select_option">
                                        <div className="container_addBook_nav_form_box_body_item_name">
                                            <span>Thể loại</span>
                                        </div>
                                        <div className="container_addBook_nav_form_box_body_item_input">
                                            <select name="bookType" id="bookType">
                                                <option value="1">Truyện tranh</option>
                                                <option value="2">Truyện chữ</option>
                                            </select>

                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    )
}

export default AddBook