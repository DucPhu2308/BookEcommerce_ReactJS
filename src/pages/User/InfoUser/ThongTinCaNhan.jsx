import './InfoUser.css';

const ThongTinCaNhan = () => {
    return (
        <div >
            <div className="container_user_page_body_function_right_box">
                <form >
                    <div className="container_user_page_body_function_right_box_form_item">
                        <label>Username</label>
                    </div>

                    <div className="container_user_page_body_function_right_box_form_item">
                        <label>Email</label>
                    </div>

                    <div className="container_user_page_body_function_right_box_form_item">
                        <label>Họ</label>
                    </div>
                    <div className="container_user_page_body_function_right_box_form_item">
                        <label>Tên</label>
                    </div>
                    <div className="container_user_page_body_function_right_box_form_item">
                        <label>Giới thiệu</label>
                        <textarea name="name" id="name" cols="30" rows="10"></textarea>
                    </div>
                    <div className="container_user_page_body_function_right_box_form_item">
                        <button>Cập nhật</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default ThongTinCaNhan;