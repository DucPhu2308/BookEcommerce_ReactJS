import './ChangeInfo.css';

const ChangeInfo = () => {
    return (
        <div>
            <div className="container_user_change_info_title">
                <div className="container_user_change_info_title_paga">
                    <span>Thông tin cá nhân</span>
                </div>
            </div >
            <form>
                <div className="container_user_change_info_item">
                    <label>Username</label>
                    <input type="text" />
                </div>

                <div className="container_user_change_info_item">
                    <label>Email</label>
                    <input type="text" />
                </div>

                <div className="container_user_change_info_item">
                    <label>Họ</label>
                    <input type="text" />
                </div>
                <div className="container_user_change_info_item">
                    <label>Tên</label>
                    <input type="text" />
                </div>
                <div className="container_user_change_info_item">
                    <label>Giới thiệu</label>
                    <textarea name="name" id="name" cols="30" rows="10"></textarea>
                </div>
                <div className="container_user_change_info_item">
                    <button>Cập nhật</button>
                </div>
            </form>
        </div >
    );
}
export default ChangeInfo;