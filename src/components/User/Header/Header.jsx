
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '@/assets/images/logo.png';
import ItemUserSuccessLogin from './ItemUserSuccessLogin/ItemUserSuccessLogin';

function Header() {
    return (
        <nav className="header">
            <div className="header_container">
                <ul>
                    <li>
                        <div className="header_logo">
                            <Link to="/"><img src={logo} alt="Logo" /></Link>
                        </div>
                    </li>
                    <li>
                        <div className="header_search">
                            <input type="text" name="search" placeholder="Search..." />
                            <div className="header_search_icon">
                                <button>
                                    <i className="fas fa-search"></i>
                                </button>
                            </div>

                            <div className="header_search_keybox">
                            </div>
                        </div>

                    </li>

                    {/* phần user đăng nhập thành công */}

                    <ItemUserSuccessLogin />

                    {/* Phần user vãng lai */}

                    {/* <li>
                    <div className="header_nav">
                        <ul>
                            <li><Link to="/login">Đăng nhập</Link></li>
                            <li><Link to="/register">Đăng ký</Link></li>
                        </ul>
                    </div>
                </li> */}
                </ul>
            </div>
        </nav>
    );
}

export default Header;