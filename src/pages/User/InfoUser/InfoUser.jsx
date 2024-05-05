import DefaultLayout from '../../../layouts/DefaultLayout/DefaultLayout';
import './InfoUser.css';
import accountImage from '../../../assets/images/account.png';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import ChangePassword from './ChangePassword/ChangePassword';
import HistoryBuy from './HistoryBuy/HistoryBuy';
import HistoryTrans from './HistoryTrans/HistoryTrans';
import SubcribeBook from './SubcribeBook/SubcribeBook';
import OwnBook from './OwnBook/OwnBook';
import Comment from './Comment/Comment';
import Notification from './Notification/Notification'
// left menu
const Menu = ({ onSelect }) => {
    

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "/src/pages/User/InfoUser/script.js";
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);
    return (
        <ul>
            <li>
                <button className='activeButton' onClick={() => onSelect("Lịch sử nạp")}>
                    <i className="fas fa-history"></i>
                    Lịch sử nạp
                </button>
            </li>

            <li>
                <button onClick={() => onSelect("Lịch sử mua")}>
                    <i className="fas fa-history"></i>
                    Lịch sử mua
                </button>
            </li>

            <li>
                <button onClick={() => onSelect("Thông tin cá nhân")}>
                    <i className="fas fa-user"></i>
                    Thông tin cá nhân
                </button>
            </li>

            <li>
                <button onClick={() => onSelect("Truyện theo dõi")}>
                    <i className="fas fa-book"></i>
                    Truyện theo dõi
                </button>
            </li>

            <li>
                <button onClick={() => onSelect("Truyện đã đăng")}>
                    <i className="fas fa-book"></i>
                    Truyện đã đăng
                </button>
            </li>

            <li>
                <button onClick={() => onSelect("Bình luận")}>
                    <i className="fa fa-comment"></i>
                    Bình luận
                </button>
            </li>

            <li>
                <button onClick={() => onSelect("Thông báo")}>
                    <i className="fas fa-bell"></i>
                    Thông báo
                </button>
            </li>

            <li>
                <button onClick={() => onSelect("Đổi mật khẩu")}>
                    <i className="fas fa-key"></i>
                    Đổi mật khẩu
                </button>
            </li>

            <li>
                <button onClick={() => onSelect("Đăng xuất")}>
                    <i className="fas fa-sign-out-alt"></i>
                    Đăng xuất
                </button>
            </li>
        </ul>
    );
};

const Form = ({ selectedItem }) => {
    let form;
    
    switch (selectedItem) {
        case "Thông tin cá nhân":
            form = <ChangeInfo  />;
            break;
        case "Đổi mật khẩu":
            form = <ChangePassword />;
            break;
        case "Lịch sử mua":
            form = <HistoryBuy />;
            break;
        case "Lịch sử nạp":
            form = <HistoryTrans />;
            break;
        case "Truyện theo dõi":
            form = <SubcribeBook />;
            break;
        case "Truyện đã đăng":
            form = <OwnBook />;
            break;
        case "Bình luận":
            form = <Comment />;
            break;
        case "Thông báo":
            form = <Notification />;
            break;
        case "Đăng xuất":
            break;
        default:
            form = <HistoryTrans />;
            break;
    }
    return (
        <div>
            {form}
        </div>
    );
};


const InfoUser = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [user,setUser]=useState(()=>JSON.parse(localStorage.getItem('user')));
    
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')));
    }, []);
    return (
        <DefaultLayout>
            <div className="container_user_page">
                <div className="container_user_page_body">
                    <div className="container_user_page_body_nav"></div>
                    <div className="container_user_page_body_info">
                        <div className="container_user_page_body_info_avatar">
                            <img src={accountImage} alt="avatar" />
                        </div>
                        <div className="container_user_page_body_info_name">
                            <div className="container_user_page_body_info_name_title">
                                <span>{user.displayName} </span>
                            </div>
                            <div className="container_user_page_body_info_name_coin">
                                <span>Số xu: {user.coin} </span>
                                <Link to="/buy-coins">
                                    Nạp xu
                                </Link>
                            </div>
                        </div>

                    </div>
                    <div className="container_user_page_body_function">
                        <div className="container_user_page_body_function_left">
                            <div style={{ display: 'flex' }}>
                                <Menu onSelect={setSelectedItem} />
                            </div>
                        </div>
                        <div className="container_user_page_body_function_right">
                            <div className="container_user_page_body_function_right_box">
                                <Form selectedItem={selectedItem} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}
export default InfoUser;