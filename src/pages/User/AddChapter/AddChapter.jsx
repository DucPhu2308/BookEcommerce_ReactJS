import './AddChapter.css'
import DefaultLayout from '../../../layouts/DefaultLayout/DefaultLayout'

const AddChapter = () => {
    return (
        <DefaultLayout>
        <div className="container_add_chapter_body">
            <div className="container_add_chapter_taskbar">
                <ul>
                    <li>
                        <a href="addBook.html"> Thêm truyện</a>
                    </li>
                    <li>
                        <div className="container_add_chapter_taskbar_button">
                            <button className="white_btn_cancel">Hủy</button>
                            <button className="dark_btn_next">Tiếp theo</button>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="container_add_chapter_box_body">
                <div className="container_add_chapter_box">
                    <div className="container_add_chapter_box_title">
                        <span>Chưa đặt tiêu đề</span>
                    </div>
                    <div className="container_add_chapter_box_input">
                        <textarea name="chapter_content" id=""  placeholder="Nhập nội dung chương"></textarea>
                    </div>
                </div>
            </div>
        </div>
        </DefaultLayout>
    )
}

export default AddChapter;