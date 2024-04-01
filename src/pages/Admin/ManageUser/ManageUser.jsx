import BanUser from './BanUser/BanUser';
import DetailUser from './DetailUser/DetailUser';
import './ManageUser.css';
import { useState } from 'react';

const users = [
    {
        id: 1,
        name: "Nguyễn Văn A",
        username: "nguyenvana",
        email: "abc@gmail.com",
        address: "Hà Nội",
        phone: "0123456789",
    },
    {
        id: 2,
        name: "Nguyễn Văn B",
        username: "nguyenvanb",
        email: "nguyenVanB@gmail.com",
        address: "Hà Nội",
        phone: "0123456789",
    },
    {
        id: 3,
        name: "Nguyễn Văn C",
        username: "nguyenvanc",
        email: "NguyenVanC@gmail.com",
        address: "Hà Nội",
        phone: "0123456789",
    },
]

const ManageUser = () => {
    const [detailUser, setDetailUser] = useState(false);
    const [banUser, setBanUser] = useState(false);
    const handleClickDetailUser = () => {
        setDetailUser(true);
    }
    const handleClickDelete = () => {
        setBanUser(true);
    }
    if (detailUser) {
        return <DetailUser />
    }
    if (banUser) {
        return <BanUser />
    }


    return (
        <div className="container_admin_manage_users">
            <div className="container_admin_manage_users_body">
                <div className="container_admin_manage_users_body_title">
                    <div className="container_admin_manage_users_body_title_paga">
                        <span>Quản lý khách hàng</span>
                    </div>
                    <div className="container_admin_manage_users_body_title_search">
                        <input type="text" placeholder="Tìm kiếm" />
                        <button>
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                </div>
                <div className="container_admin_manage_users_body_content">
                    <div className="container_admin_manage_users_body_content_box">
                        <table>
                            {users.map((user) => (
                                <tr key={user.id}>
                                    <th className="width_check_tick">
                                        <div className="check_tick ">
                                            <i className="fas fa-check"></i>
                                        </div>
                                    </th>
                                    <th>
                                        <div className="user_name_image">
                                            <img src="/user/download.png" alt="user" />
                                        </div>
                                    </th>
                                    <th className="width_row">
                                        <div className="user_name_title">
                                            <span>{user.name}</span>
                                            <span>ID: {user.id}</span>
                                        </div>
                                    </th>
                                    <th>
                                        <div className="container_admin_manage_users_body_content_box_actions_btn">
                                            <button className="detail_user_white" onClick={handleClickDetailUser}>
                                                <i className="fas fa-info-circle" ></i>
                                            </button>
                                            <button className="delete" onClick={handleClickDelete}>
                                                <i className="fas fa-trash-alt"></i>
                                            </button>
                                        </div>
                                    </th>
                                </tr>
                                
                            ))}
                            
                        </table>
                        {/* <div className="container_admin_manage_users_body_content_box_title">
                            <div className="check_tick">
                                
                            </div>
                            <div className="user_name_image">
                                
                            </div>
                            <div className="user_name_title">
                                <span>Tên khách hàng:</span>
                                <span>ID: </span>
                            </div>

                        </div>
                        <div className="container_admin_manage_users_body_content_box_actions">
                            <div className="container_admin_manage_users_body_content_box_actions_edit">
                                <button></button>
                            </div>
                            <div className="container_admin_manage_users_body_content_box_actions_delete">
                                <button></button>
                            </div>
                        </div> 
                    </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ManageUser;