
import ManageUser from '../ManageUser';
import './DetailUser.css'
import { useEffect, useState } from 'react';
import UserApi from '../../../../API/User/UserApi';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const DetailUser = ({user}) => {
    const [returnUser, setReturnUser] = useState(false);
    const handleReturn = () => {
        setReturnUser(true);
    }
    if (returnUser) {
        return <ManageUser />
    }
    
    const handleUpdateUser = (user, active) => {
        UserApi.updateUser({
            displayName: user.displayName,
            introduction: user.introduction,
            coin: user.coin,
            active: active,
        }, user.id).then(() => {
            toast.success('Cập nhật thành công');
            setReturnUser(true);
        }).catch((err) => {
            console.log(err);
            toast.error('Cập nhật thất bại');
        })
    }

    const handleClickUpdate = (user) => {
        handleUpdateUser(user, false);
    }
    
    const handleClickChangeUpdate = (user) => {
        handleUpdateUser(user, true);
    }

    const renderButton = (user) => {
        if (user.active) {
            return (
                <button onClick={() => handleClickUpdate(user)}>Khóa</button>
            )
        }
        else {
            return (
                <button onClick={() => handleClickChangeUpdate(user)}>Mở khóa</button>
            )
        }
    }

    return (
        <div className="container_admin_detail_user">
            <ToastContainer/>
            <div className="container_admin_detail_user_body">
                <div className="container_admin_detail_user_header">
                    <div className="container_admin_detail_user_header_item">
                        <span>Chi tiết người dùng</span>
                    </div>
                </div>
                <div className="container_admin_detail_user_content">
                    <div className="container_admin_detail_user_content_info">
                        <div className="container_admin_detail_user_content_info_avatar">
                            <img src={user.avatar} alt="avatar" />
                        </div>
                        <div className="container_admin_detail_user_content_info_text">
                            <span>Username: {user.userName == "" ? user.userName : "Không có thông tin"}</span>
                            <span>Tên:{user.displayName} </span>
                            <span>Email: {user.email}</span>
                        </div>
                    </div>
                    <div className="container_admin_detail_user_content_history">
                        <span>Lịch sử hoạt động</span>
                        <div className="container_admin_detail_user_content_history_box">

                        </div>
                    </div>
                    <div className="container_admin_detail_user_content_action">
                        <button className="btn_white_detail_user" onClick={handleReturn}>Quay lại</button>
                        {renderButton(user)}
                    </div>
                </div>
            </div>
        </div>
    
    )
};


export default DetailUser;