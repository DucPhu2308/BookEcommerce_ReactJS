import { useEffect } from "react";
import "./ItemUserSuccessLogin.css"
import accountImage from "@/assets/images/account.png"

const ItemUserSuccessLogin = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "/src/components/User/Header/ItemUserSuccessLogin/script.js";
        document.body.appendChild(script);
    
        return () => {
            document.body.removeChild(script);
        };
    }, []);
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
                                <li><a href="write.html">Viết bài</a></li>
                                <li><a href="manage.html">Quản lý bài viết</a></li>
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
                        <li><a href="#">
                            <span>
                                <i className="fas fa-user"></i>
                                Trang cá nhân</span></a></li>
                        <li><a href="#">
                            <span>
                                <i className="fas fa-cog"></i>
                                Cài đặt</span></a></li>
                        <li><a href="#">
                            <span>
                                <i className="fas fa-sign-out-alt"></i>
                                Đăng xuất</span></a></li>
                    </ul>
                </div>
            </li>
        </>

    )
}



export default ItemUserSuccessLogin