
import ManageUser from '../ManageUser';
import './DetailUser.css'
import { useEffect, useState } from 'react';

const DetailUser = ({user}) => {
    const [returnUser, setReturnUser] = useState(false);
    const handleReturn = () => {
        setReturnUser(true);
    }
    if (returnUser) {
        return <ManageUser />
    }
    



    return (
        <div className="container_admin_detail_user">
            <div className="container_admin_detail_user_body">
                <div className="container_admin_detail_user_header">
                    <div className="container_admin_detail_user_header_item">
                        <span>Chi tiết người dùng</span>
                    </div>
                </div>
                <div className="container_admin_detail_user_content">
                    <div className="container_admin_detail_user_content_info">
                        <div className="container_admin_detail_user_content_info_avatar">
                            <img src="/user/download.png" alt="avatar" />
                        </div>
                        <div className="container_admin_detail_user_content_info_text">
                            <span>Username: </span>
                            <span>Ngày sinh: </span>
                            <span>Giới tính: </span>
                            <span>Email: </span>
                            <span>Địa chỉ: </span>
                            <span>Số điện thoại: </span>
                        </div>
                    </div>
                    <div className="container_admin_detail_user_content_history">
                        <span>Lịch sử hoạt động</span>
                        <div className="container_admin_detail_user_content_history_box">

                        </div>
                    </div>
                    <div className="container_admin_detail_user_content_action">
                        <button className="btn_white_detail_user" onClick={handleReturn}>Quay lại</button>
                        <button >Xóa</button>
                    </div>
                </div>
            </div>
        </div>
    
    )
};


export default DetailUser;