import LoginLayout from "@/layouts/LoginLayout/LoginLayout";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import "./LoginRegister.css";
import AuthApi from "../../API/Auth/AuthApi";
import { UserContext } from "../../providers/UserProvider";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setUser } = useContext(UserContext);

  const handleLogin = async () => {
   
    AuthApi.login(email, password)
      .then((res) => {
        console.log(res.data);
        if (res.data.status == "ok") {
          localStorage.setItem("token", res.data.data.token);
          localStorage.setItem("user", JSON.stringify(res.data.data.user));
          localStorage.setItem("roles", JSON.stringify(res.data.data.roles));
          setUser(res.data.data.user);
          navigate("/");
          
        } else {
          setError(res.data.message);
          
        }
      })
      .catch((err) => {
        console.log(err.response.data.message);
        setError(err.response.data.message);
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
            <label>Email</label>
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
