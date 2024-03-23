import './LoginLayout.css';
import loginImage from '@/assets/images/imageLogin.png';
import logo from '@/assets/images/logo.png';
import PropTypes from 'prop-types';

const LoginLayout = ({children}) => {
    return (
        <div className="loginContainer">
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

LoginLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default LoginLayout;