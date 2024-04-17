import LoginLayout from "@/layouts/LoginLayout/LoginLayout";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./LoginRegister.css";
import AuthApi from "../../API/Auth/AuthApi";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    AuthApi.login(email, password)
      .then((res) => {
        if (res.data.status == "ok") {
          localStorage.setItem("token", res.data.data.token);
          localStorage.setItem("user", JSON.stringify(res.data.data.user));
          localStorage.setItem("roles", JSON.stringify(res.data.data.roles));
          navigate("/");
        } else {
          setError(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      });
  }

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
            <input value={email} type="text" name="username" required 
              onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="inputBox">
            <label>Password</label>
            <br />
            <input value={password} type="password" name="password" required
              onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="inputBoxError">
            <span>{error}</span>
          </div>
          <div className="loginBoxBodyFormButton">
            <button type="button" name="login" onClick={handleLogin}>
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
