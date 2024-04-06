import LoginLayout from "@/layouts/LoginLayout/LoginLayout";
import { Link } from "react-router-dom";
import "./LoginRegister.css" 

const Register = () => {
  return (
    <LoginLayout>
      <div className="loginBoxBodyForm">
        <form action="login.php" method="post">
          <div className="loginBoxBodyFormTitle">
            <span>Join to Leet Truyen</span>
          </div>
          <div className="inputBox">
            <label>Username </label>
            <br />
            <input type="text" name="username" required />
          </div>
          <div className="inputBox">
            <label>Email </label>
            <br />
            <input type="email" name="email" required />
          </div>
          <div className="inputBox">
            <label>Password</label>
            <br />
            <input type="password" name="password" required />
          </div>
          <div className="inputBox">
            <label>Confirm password</label>
            <br />
            <input type="password" name="password" required />
          </div>
          <div className="loginBoxBodyFormButton">
            <button type="button" name="sign_up">
              Sign up
            </button>
          </div>

          <div className="loginBoxBodyFormLink endform">
            <p>
              Already have an account?
              <Link to="/login"> Log in</Link>
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

export default Register;
