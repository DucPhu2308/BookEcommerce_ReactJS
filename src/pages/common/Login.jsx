import LoginLayout from "@/layouts/LoginLayout/LoginLayout";
import { Link } from "react-router-dom";
import "./LoginRegister.css";

const Login = () => {
  return (
    <LoginLayout>
      <div className="loginBoxBodyForm">
        <form action="login.php" method="post">
          <div className="loginBoxBodyFormTitle">
            <span>Log In to Leet Truyen</span>
          </div>
          <div className="inputBox">
            <label>Username or email</label>
            <br />
            <input type="text" name="username" required />
          </div>
          <div className="inputBox">
            <label>Password</label>
            <br />
            <input type="password" name="password" required />
          </div>
          <div className="inputBoxError">
            <span>Invalid username or password</span>
          </div>
          <div className="loginBoxBodyFormButton">
            <button type="button" name="login">
              Log In
            </button>
          </div>
          <div className="loginBoxBodyFormLink">
            <a href="forgotPassword.php">Forgot password?</a>
          </div>
          <div className="loginBoxBodyFormLink endform">
            <p>
              {`Don't have an account? `}
              <Link to="/register"> Sign up</Link>
            </p>
          </div>
        </form>
        <span className="loginBoxPara">
          Some information about web will be here...
        </span>
      </div>
    </LoginLayout>
  );
};

export default Login;
