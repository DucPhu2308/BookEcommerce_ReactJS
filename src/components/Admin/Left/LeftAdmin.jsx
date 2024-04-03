
import { useEffect } from 'react';
import './LeftAdmin.css'


import PropTypes from 'prop-types';

const LeftAdmin = ({onSelect}) => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "/src/components/Admin/Left/script.js";
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="left_admin">
            <div className="left_admin_container">
                <ul>
                    <li>
                        <div className="left_admin_container_option active_block" onClick={()=>onSelect('Quản lý truyện')}>
                            <div className="left_admin_container_option_icon">
                                <i className="fas fa-book"></i>
                            </div>
                            <span>Quản lý truyện</span>
                        </div>
                    </li>
                    <li>
                        <div className="left_admin_container_option" onClick={()=>onSelect('Quản lý bình luận')} >
                            <div className="left_admin_container_option_icon">
                                <i className="fas fa-comments"></i>
                            </div>
                            <span>Quản lý bình luận</span>
                        </div>
                    </li>
                    <li>
                        <div className="left_admin_container_option" onClick={()=>onSelect('Quản lý khách hàng')}>
                            <div className="left_admin_container_option_icon">
                                <i className="fas fa-users"></i>
                            </div>
                            <span>Quản lý khách hàng</span>
                        </div>
                    </li>
                    <li>
                        <div className="left_admin_container_option" onClick={()=>onSelect('Quản lý thể loại')}>
                            <div className="left_admin_container_option_icon">
                                <i className="fas fa-bookmark"></i>
                            </div>
                            <span>Quản lý thể loại</span>
                        </div>
                    </li>
                    <li>
                        <div className="left_admin_container_option" onClick={()=>onSelect('Cấp quyền')}>
                            <div className="left_admin_container_option_icon">
                                <i className="fas fa-user-shield"></i>
                            </div>
                            <span>Cấp quyền</span>
                        </div>
                    </li>
                    <li>
                        <div className="left_admin_container_option" onClick={()=>onSelect('Theo dõi doanh thu')}>
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

LeftAdmin.propTypes = {
    onSelect: PropTypes.func
}
export default LeftAdmin