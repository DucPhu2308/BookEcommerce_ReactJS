import './LoginLayout.css';
import loginImage from '@/assets/images/imageLogin.png';
import logo from '@/assets/images/logo.png';

import { ToastContainer } from 'react-toastify';

const LoginLayout = ({children}) => {
    return (
        <div className="loginContainer">
            <ToastContainer />
            <div className="loginBox">
                <div className="loginBoxImage">
                    <img src={loginImage} alt="Login Image"/>
                </div>
                <div className="loginBoxBody">
                    <div className="loginBoxBodyName">
                        <img src={logo} alt="Logo"/>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
}



export default LoginLayout;