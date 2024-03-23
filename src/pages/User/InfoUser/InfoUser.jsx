import DefaultLayout from '../../../layouts/DefaultLayout/DefaultLayout';
import './InfoUser.css';
import accountImage from '../../../assets/images/account.png';
const InfoUser = () => {
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
                                <span>Name </span>
                            </div>
                            <div className="container_user_page_body_info_name_coin">
                                <span>Số xu: </span>
                                <a href="#">Nạp xu</a>
                            </div>
                        </div>

                    </div>
                    <div className="container_user_page_body_function">
                        <div className="container_user_page_body_function_left">
                            <ul>
                                <li><a href="#">
                                    <button>
                                        <i className="fas fa-history"></i>
                                        <span>Lịch sử nạp</span>
                                    </button>
                                </a></li>

                                <li><a href="#">
                                    <button>
                                        <i className="fas fa-history"></i>
                                        <span>Lịch sử mua</span>
                                    </button>

                                </a></li>
                                <li><a href="#">
                                    <button>
                                        <i className="fas fa-user"></i>
                                        <span>Thông tin cá nhân</span>
                                    </button>
                                </a></li>
                                <li><a href="#">
                                    <button>
                                        <i className="fas fa-book"></i>
                                        <span>Truyện theo dõi</span>
                                    </button>

                                </a></li>

                                <li><a href="#">
                                    <button>
                                        <i className="fas fa-book"></i>
                                        <span>Truyện đã đăng</span>
                                    </button>
                                </a></li>
                                <li><a href="#">
                                    <button>
                                        <i className="fa fa-comment"></i>
                                        <span>Bình luận</span>
                                    </button>
                                </a></li>
                                <li><a href="#">
                                    <button>
                                        <i className="fas fa-bell"></i>
                                        <span>Thông báo</span>
                                    </button>
                                </a></li>
                                <li><a href="#">
                                    <button>
                                        <i className="fas fa-key"></i>
                                        <span>Đổi mật khẩu</span>
                                    </button>
                                </a></li>
                                <li><a href="#">
                                    <button>
                                        <i className="fas fa-sign-out-alt"></i>
                                        <span>Đăng xuất</span>
                                    </button>
                                </a></li>

                            </ul>
                        </div>
                        <div className="container_user_page_body_function_right">


                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}
export default InfoUser;