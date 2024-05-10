import DetailUser from './DetailUser/DetailUser';
import './ManageUser.css';
import { useState, useEffect, useRef } from 'react';
import UserApi from '../../../API/User/UserApi';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const ManageUser = () => {
    const [users, setUsers] = useState([]);
    const [objectUser, setObjectUser] = useState({});
    const [detailUser, setDetailUser] = useState(false);
    const admin = JSON.parse(localStorage.getItem('user'));
    const inputSearch = useRef(true);


    useEffect(() => {
        const inputSearchRef = inputSearch.current;
        const handleSearch = () => {
            const value = inputSearchRef.value.toLowerCase();
            
            const searchItems = document.querySelectorAll('.container_admin_manage_users_body_content_box table tr');
            searchItems.forEach((item) => {
                const text = item.textContent.toLowerCase();
                if (text.indexOf(value) === -1) {
                    item.style.display = 'none';
                } else {
                    item.style.display = '';
                }
            });
        }
        if (inputSearchRef) {
            inputSearchRef.addEventListener('keyup', handleSearch);
        }
        return () => {
            if (inputSearchRef) {
                inputSearchRef.removeEventListener('keyup', handleSearch);
            }
        }
    }, [inputSearch]);

            


    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await UserApi.getAll();
                setUsers(response.data.data);
                for(let i = 0; i < response.data.data.length; i++){
                    if(response.data.data[i].displayName === null){
                        response.data.data[i].displayName = "New User";
                        UserApi.updateUser({
                            displayName: response.data.data[i].displayName,
                            introduction: response.data.data[i].introduction,
                            coin: response.data.data[i].coin,
                            active: response.data.data[i].active,
                        },response.data.data[i].id).then(() => {
                            console.log('Cập nhật thành công');
                        }).catch((err) => {
                            console.log(err);
                        })
                    }
                    if(admin.id === response.data.data[i].id){
                        response.data.data.splice(i,1);
                    }
                }
            } catch (error) {
                console.log('Failed to fetch users: ', error);
            }
        }
        fetchUsers();
    }, []);


    const handleClickDetailUser = (user) => {
        setDetailUser(true);
        setObjectUser(user);
    }
    const handleUpdateUser = (user, active) => {
        UserApi.updateUserInfo({
            displayName: user.displayName,
            introduction: user.introduction,
            coin: user.coin,
            active: active,
        }).then(() => {
            toast.success('Cập nhật thông tin thành công');
            // cập nhật lại thông tin user đó
            const newUsers = users.map((item) => {
                if (item.id === user.id) {
                    return {
                        ...item,
                        active: active,
                    }
                }
                return item;
            });
            setUsers(newUsers);
        }).catch((err) => {
            console.log(err);
        });
    }
    
    const handleClickUpdate = (user) => {
        handleUpdateUser(user, false);
    }
    
    const handleClickChangeUpdate = (user) => {
        handleUpdateUser(user, true);
    }


    if (detailUser) {
        return <DetailUser user={objectUser} />
    }

    const renderButton = (user) => {
        if (user.active) {
            return (
                <button className="delete" onClick={() => handleClickUpdate(user)}>
                    <i className="fas fa-trash-alt"></i>
                </button>
            )
        } else {
            return (
                <button className="delete" onClick={() => handleClickChangeUpdate(user)}>
                    <i className="fas fa-check"></i>
                </button>
            )
        }
    }

    return (
        <div className="container_admin_manage_users">
            <ToastContainer/>
            <div className="container_admin_manage_users_body">
                <div className="container_admin_manage_users_body_title">
                    <div className="container_admin_manage_users_body_title_paga">
                        <span>Quản lý khách hàng</span>
                    </div>
                    <div className="container_admin_manage_users_body_title_search">
                        <input type="text" placeholder="Tìm kiếm" ref={inputSearch} />
                        <button>
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                </div>
                <div className="container_admin_manage_users_body_content">
                    <div className="container_admin_manage_users_body_content_box">
                        <table>
                            {users.map((user) => (
                                users.sort((a, b) => a.id - b.id),
                                <tr key={user.id}>
                                    <th className="width_check_tick">
                                        <div className="check_tick ">
                                            {user.active ? <i className="fas fa-check"></i> : <i className="fas fa-times" style={{color:"red"}}></i>}
                                        </div>
                                    </th>
                                    <th>
                                        <div className="user_name_image">
                                            <img src={user.avatar} alt="user" />
                                        </div>
                                    </th>
                                    <th className="width_row">
                                        <div className="user_name_title">
                                            <span>{user.displayName}</span>
                                            <span>ID: {user.id}</span>
                                        </div>
                                    </th>
                                    <th>
                                        <div className="container_admin_manage_users_body_content_box_actions_btn">
                                            <button className="detail_user_white" onClick={() => handleClickDetailUser(user)}>
                                                <i className="fas fa-info-circle" ></i>
                                            </button>

                                            {renderButton(user)}
                                        </div>
                                    </th>
                                </tr>

                            ))}

                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ManageUser;