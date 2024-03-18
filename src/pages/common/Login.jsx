import LoginLayout from "@/layouts/LoginLayout/LoginLayout";
import { Link } from "react-router-dom";
import "./LoginRegister.css";

const Login = () => {
  return (
    <LoginLayout>
      <div class="loginBoxBodyForm">
        <form action="login.php" method="post">
          <div class="loginBoxBodyFormTitle">
            <span>Log In to Leet Truyen</span>
          </div>
          <div class="inputBox">
            <label>Username or email</label>
            <br />
            <input type="text" name="username" required />
          </div>
          <div class="inputBox">
            <label>Password</label>
            <br />
            <input type="password" name="password" required />
          </div>
          <div class="inputBoxError">
            <span>Invalid username or password</span>
          </div>
          <div class="loginBoxBodyFormButton">
            <button type="button" name="login">
              Log In
            </button>
          </div>
          <div class="loginBoxBodyFormLink">
            <a href="forgotPassword.php">Forgot password?</a>
          </div>
          <div class="loginBoxBodyFormLink endform">
            <p>
              Don't have an account?
              <Link to="/register"> Sign up</Link>
            </p>
          </div>
        </form>
        <span class="loginBoxPara">
          Some information about web will be here...
        </span>
      </div>
    </LoginLayout>
  );
};

export default Login;
