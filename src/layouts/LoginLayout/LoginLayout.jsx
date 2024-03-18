import './LoginLayout.css';
import loginImage from '@/assets/images/imageLogin.png';
import logo from '@/assets/images/logo.png';

const LoginLayout = ({children}) => {
    return (
        <div class="loginContainer">
            <div class="loginBox">
                <div class="loginBoxImage">
                    <img src={loginImage} alt="Login Image"/>
                </div>
                <div class="loginBoxBody">
                    <div class="loginBoxBodyName">
                        <img src={logo} alt="Logo"/>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default LoginLayout;