import LoginLayout from "@/layouts/LoginLayout/LoginLayout";
import { Link } from "react-router-dom";
import "./LoginRegister.css" 

const Register = () => {
  return (
    <LoginLayout>
      <div class="loginBoxBodyForm">
        <form action="login.php" method="post">
          <div class="loginBoxBodyFormTitle">
            <span>Join to Leet Truyen</span>
          </div>
          <div class="inputBox">
            <label>Username </label>
            <br />
            <input type="text" name="username" required />
          </div>
          <div class="inputBox">
            <label>Email </label>
            <br />
            <input type="email" name="email" required />
          </div>
          <div class="inputBox">
            <label>Password</label>
            <br />
            <input type="password" name="password" required />
          </div>
          <div class="inputBox">
            <label>Confirm password</label>
            <br />
            <input type="password" name="password" required />
          </div>
          <div class="loginBoxBodyFormButton">
            <button type="button" name="sign_up">
              Sign up
            </button>
          </div>

          <div class="loginBoxBodyFormLink endform">
            <p>
              Already have an account?
              <Link to="/login"> Log in</Link>
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

export default Register;
