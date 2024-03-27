

const ChangePassword = () => {
    return (
        <div className="container_user_page_body_function_right_box_change_password">
            <form action="#">
                <div className="container_user_page_body_function_right_box_form_item">
                    <label>Mật khẩu cũ</label>
                    <input type="password" name="name" id="name" />
                </div>

                <div className="container_user_page_body_function_right_box_form_item">
                    <label>Mật khẩu mới</label>
                    <input type="password" name="name" id="name" />
                </div>

                <div className="container_user_page_body_function_right_box_form_item">
                    <label>Nhập lại mật khẩu mới</label>
                    <input type="password" name="name" id="name" />
                </div>
                <div className="container_user_page_body_function_right_box_form_item">
                    <button>Đổi mật khẩu</button>
                </div>
            </form>
        </div>
    )
}

export default ChangePassword