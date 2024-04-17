import { useEffect } from "react";
import "./ItemUserSuccessLogin.css"
import accountImage from "@/assets/images/account.png"
import { Link } from 'react-router-dom';

const ItemUserSuccessLogin = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "/src/components/User/Header/ItemUserSuccessLogin/script.js";
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const handleLogout = () => {
        localStorage.clear();
        window.location.reload();
    }
    return (
        <>
            <li>
                <div className="header_nav_select">
                    <div className="header_nav_select_title">
                        <span>viết</span>
                        <i className="fas fa-chevron-down"></i>
                    </div>

                    <div className="header_nav_select_body">
                        <div className="header_nav_select_rect"></div>
                        <div className="header_nav_select_box">
                            <ul>
                                <li><Link to="#">Viết bài</Link></li>
                                <li><Link to="#">Quản lý bài viết</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </li>

            <li>
                <div className="header_nav_user">
                    <img src={accountImage} alt="user" />
                    <span>username
                        <i className="fas fa-circle-chevron-down"></i>
                    </span>
                </div>
                <div className="header_nav_user_box">
                    <ul>
                        <li><Link to="/infoUser">
                            <span>
                            <i className="fas fa-user"></i>
                                Trang cá nhân</span></Link></li>
                        <li>
                            <span>
                                <i className="fas fa-cog"></i>
                                Cài đặt</span></li>
                        <li>
                            <span onClick={handleLogout}>
                                <i className="fas fa-sign-out-alt"></i>
                                Đăng xuất</span></li>
                    </ul>
                </div>
            </li >
        </>

    )
}



export default ItemUserSuccessLogin