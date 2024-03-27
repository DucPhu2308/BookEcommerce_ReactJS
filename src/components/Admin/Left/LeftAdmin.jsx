import './LeftAdmin.css'

function LeftAdmin() {

    return (
        <div className="left_admin">
            <div className="left_admin_container">
                <ul>
                    <li>
                        <div className="left_admin_container_option active_block">
                            <div className="left_admin_container_option_icon">
                                <i className="fas fa-book"></i>
                            </div>
                            <span>Quản lý truyện</span>
                        </div>
                    </li>
                    <li>
                        <div className="left_admin_container_option">
                            <div className="left_admin_container_option_icon">
                                <i className="fas fa-comments"></i>
                            </div>
                            <span>Quản lý bình luận</span>
                        </div>
                    </li>
                    <li>
                        <div className="left_admin_container_option">
                            <div className="left_admin_container_option_icon">
                                <i className="fas fa-users"></i>
                            </div>
                            <span>Quản lý khách hàng</span>
                        </div>
                    </li>
                    <li>
                        <div className="left_admin_container_option">
                            <div className="left_admin_container_option_icon">
                                <i className="fas fa-bookmark"></i>
                            </div>
                            <span>Quản lý thể loại</span>
                        </div>
                    </li>
                    <li>
                        <div className="left_admin_container_option">
                            <div className="left_admin_container_option_icon">
                                <i className="fas fa-flag"></i>
                            </div>
                            <span>Quản lý báo cáo</span>
                        </div>
                    </li>
                    <li>
                        <div className="left_admin_container_option">
                            <div className="left_admin_container_option_icon">
                                <i className="fas fa-user-shield"></i>
                            </div>
                            <span>Cấp quyền</span>
                        </div>
                    </li>
                    <li>
                        <div className="left_admin_container_option">
                            <div className="left_admin_container_option_icon">
                                <i className="fas fa-chart-line"></i>
                            </div>
                            <span>Theo dõi doanh thu</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default LeftAdmin