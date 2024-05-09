import logo from '@/assets/images/logo.png';
import './HeaderAdmin.css'
import logoAdmin from '@/assets/images/account.png';

function HeaderAdmin() {
    const user = JSON.parse(localStorage.getItem('user'));

    const handleOut=()=>{
        window.location.href = '/login';
    }
    const handleBack=()=>{
        window.location.href = '/';
    }
    return (
        <nav className="header_admin">
            <div className="header_admin_container">
                <ul>
                    <li>
                        <div className="header_admin_logo" onClick={handleBack}>
                            <img src={logo} alt="Logo" />
                            <div className="header_admin_title_admin">
                                <span>Admin</span>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="header_admin_action">
                            <div className="header_admin_nav">
                                <img src={user.avatar} alt="user" />
                                <span>{user.displayName}</span>
                            </div>
                            <div className="header_admin_exit">
                                <button onClick={handleOut}>
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