import logo from '@/assets/images/logo.png';
import './HeaderAdmin.css'
import logoAdmin from '@/assets/images/account.png';

function HeaderAdmin() {
    return (
        <nav className="header_admin">
            <div className="header_admin_container">
                <ul>
                    <li>
                        <div className="header_admin_logo">
                            <img src={logo} alt="Logo" />
                            <div className="header_admin_title_admin">
                                <span>Admin</span>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="header_admin_action">
                            <div className="header_admin_nav">
                                <img src={logoAdmin} alt="user" />
                                <span>Username</span>
                            </div>
                            <div className="header_admin_exit">
                                <button>
                                    <i className="fas fa-sign-out-alt"></i>
                                </button>
                            </div>
                        </div>

                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default HeaderAdmin