
import './ChangePassword.css';

const ChangePassword = () => {
    return (
        <div>
            <div className="container_user_change_password_title">
                <div className="container_user_change_password_title_paga">
                    <span>Đổi mật khẩu</span>
                </div>
            </div >
            <form>
                <div className="container_user_change_password_item">
                    <label>Mật khẩu cũ</label>
                    <input type="password" name="name" id="name" />
                </div>

                <div className="container_user_change_password_item">
                    <label>Mật khẩu mới</label>
                    <input type="password" name="name" id="name" />
                </div>

                <div className="container_user_change_password_item">
                    <label>Nhập lại mật khẩu mới</label>
                    <input type="password" name="name" id="name" />
                </div>
                <div className="container_user_change_password_item">
                    <button>Đổi mật khẩu</button>
                </div>
            </form>
        </div>
    )
}

export default ChangePassword