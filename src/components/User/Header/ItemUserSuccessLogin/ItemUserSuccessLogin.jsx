import { useEffect, useRef } from "react";
import "./ItemUserSuccessLogin.css"
import accountImage from "@/assets/images/account.png"
import { Link } from 'react-router-dom';

const ItemUserSuccessLogin = () => {
    const selectWriteRef = useRef(null);
    const selectBoxRef = useRef(null);
    const selectIconRef = useRef(null);

    const selectInfoUserRef = useRef(null);
    const selectInfoUserBoxRef = useRef(null);
    const selectInfoUserIconRef = useRef(null);

    useEffect(() => {
        const selectInfoUser= selectInfoUserRef.current;
        const selectInfoUserBox = selectInfoUserBoxRef.current;
        const selectInfoUserIcon = selectInfoUserIconRef.current;

        const handleClick = () => {
            if (selectInfoUserIcon.classList.contains('rotate')) {
                selectInfoUserIcon.classList.remove('rotate');
                selectInfoUserIcon.classList.add('rev_rotate');
            } else {
                selectInfoUserIcon.classList.add('rotate');
                selectInfoUserIcon.classList.remove('rev_rotate');
            }
        };

        const handleShowBox = () => {
            if (selectInfoUserBox.classList.contains('fade_in')) {
                selectInfoUserBox.classList.remove('fade_in');
                selectInfoUserBox.classList.add('fade_down');
            } else {
                selectInfoUserBox.style.display = 'block';
                selectInfoUserBox.classList.add('fade_in');
                selectInfoUserBox.classList.remove('fade_down');
            }
        };

        if (selectInfoUser && selectInfoUserBox && selectInfoUserIcon) {
            selectInfoUser.addEventListener('click', handleClick);
            selectInfoUser.addEventListener('click', handleShowBox);
        }

        // Clean-up
        return () => {
            if (selectInfoUser && selectInfoUserBox && selectInfoUserIcon) {
                selectInfoUser.removeEventListener('click', handleClick);
                selectInfoUser.removeEventListener('click', handleShowBox);
            }
        };
    }, []);


    useEffect(() => {
        const selectWrite = selectWriteRef.current;
        const selectBox = selectBoxRef.current;
        const selectIcon = selectIconRef.current;
    
        const handleClick = () => {
            if (selectIcon.classList.contains('rotate')) {
                selectIcon.classList.remove('rotate');
                selectIcon.classList.add('rev_rotate');
            } else {
                selectIcon.classList.add('rotate');
                selectIcon.classList.remove('rev_rotate');
            }
        };
    
        const handleShowBox = () => {
            if (selectBox.classList.contains('fade_in')) {
                selectBox.classList.remove('fade_in');
                selectBox.classList.add('fade_down');
            } else {
                selectBox.style.display = 'block';
                selectBox.classList.add('fade_in');
                selectBox.classList.remove('fade_down');
            }
        };
    
        if (selectWrite && selectBox && selectIcon) {
            selectWrite.addEventListener('click', handleClick);
            selectWrite.addEventListener('click', handleShowBox);
        }
    
        // Clean-up
        return () => {
            if (selectWrite && selectBox && selectIcon) {
                selectWrite.removeEventListener('click', handleClick);
                selectWrite.removeEventListener('click', handleShowBox);
            }
        };
    }, []);

    const handleLogout = () => {
        localStorage.clear();
        window.location.reload();
    };

    return (
        <>
            <li>
                <div className="header_nav_select">
                    <div className="header_nav_select_title" ref={selectWriteRef}>
                        <span>viết</span>
                        <i className="fas fa-chevron-down" ref={selectIconRef}></i>
                    </div>

                    <div className="header_nav_select_body" ref={selectBoxRef}>
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
                <div className="header_nav_user" ref={selectInfoUserRef}>
                    <img src={accountImage} alt="user" />
                    <span>{JSON.parse(localStorage.getItem("user")).displayName}
                        <i className="fas fa-circle-chevron-down" ref={selectInfoUserIconRef}></i>
                    </span>
                </div>
                <div className="header_nav_user_box" ref={selectInfoUserBoxRef}>
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

export default ItemUserSuccessLogin;