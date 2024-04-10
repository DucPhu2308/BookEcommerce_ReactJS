import BanUser from './BanUser/BanUser';
import DetailUser from './DetailUser/DetailUser';
import './ManageUser.css';
import { useState, useEffect } from 'react';
import AuthorApi from '../../../API/Admin/AuthorApi';


const ManageUser = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await AuthorApi.getAllAuthor();
                setUsers(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchUsers();
    });




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