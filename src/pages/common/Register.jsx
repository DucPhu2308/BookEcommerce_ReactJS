import LoginLayout from "@/layouts/LoginLayout/LoginLayout";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Backdrop, CircularProgress } from "@mui/material";
import "./LoginRegister.css" 
import AuthApi from "../../API/Auth/AuthApi";

const Register = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("PhuDepTrai");
  const [email, setEmail] = useState("Teo16@gmail.com");
  const [password, setPassword] = useState("123456");
  const [confirmPassword, setConfirmPassword] = useState("123456");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Password and confirm password must be the same");
      return;
    }
    setLoading(true);
    AuthApi.register(userName, email, password)
      .then((res) => {
        if (res.data.status == "ok") {
          localStorage.setItem("email", email);
          navigate("/confirm-email");
        } else {
          setError(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err.response.data.message);
        setError(err.response.data.message);
      })
      .finally(() => setLoading(false));
      
  }
  return (
    <LoginLayout>
      {loading && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      <div className="loginBoxBodyForm">
        <form action="login.php" method="post">
          <div className="loginBoxBodyFormTitle">
            <span>Join to Leet Truyen</span>
          </div>
          <div className="inputBox">
            <label>Username </label>
            <br />
            <input value={userName} onChange={(e) => {setUserName(e.target.value)}}
            type="text" name="userName" required />
          </div>
          <div className="inputBox">
            <label>Email </label>
            <br />
            <input value={email} onChange={(e) => {setEmail(e.target.value)}}
            type="email" name="email" required />
          </div>
          <div className="inputBox">
            <label>Password</label>
            <br />
            <input value={password} onChange={(e) => {setPassword(e.target.value)}}
            type="password" name="password" required />
          </div>
          <div className="inputBox">
            <label>Confirm password</label>
            <br />
            <input value={confirmPassword} onChange={(e) => {setConfirmPassword(e.target.value)}}
             type="password" name="confirmPassword" required />
          </div>
          <div className="inputBoxError">
            <span>{error}</span>
          </div>
          <div className="loginBoxBodyFormButton">
            <button type="button" name="sign_up" onClick={handleRegister}>
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
