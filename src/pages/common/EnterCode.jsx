import LoginLayout from "@/layouts/LoginLayout/LoginLayout";
import AuthApi from "../../API/Auth/AuthApi";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { Backdrop, CircularProgress } from "@mui/material";

const EnterCode = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const email = localStorage.getItem("email");

  useEffect(() => {
    if (!email) {
      navigate("/");
    }
  }, []);

  const handleConfirm = () => {
    setLoading(true);
    const code_upper = code.toUpperCase();
    AuthApi.confirmEmail(email, code_upper)
      .then((res) => {
        if (res.data.status === "ok") {
          localStorage.removeItem("email");
          toast.success(
            "Email confirmed successfully, please login to continue!"
          );
          navigate("/login");
        } else {
          setError(res.data.message);
        }
      })
      .catch((err) => {
        setError(err.response.data.message);
      })
      .finally(() => setLoading(false));
  };
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
            <span>Confirm your email</span>
          </div>
          <div className="inputBox">
            <label>Enter the 6-digit code sent to your email:</label>
            <br />
            <input
              value={code}
              type="text"
              name="code"
              required
              onChange={(e) => setCode(e.target.value)}
            />
          </div>
          <div className="inputBoxError">
            <span>{error}</span>
          </div>
          <div className="loginBoxBodyFormButton">
            <button type="button" name="login" onClick={handleConfirm}>
              Confirm
            </button>
          </div>
        </form>
      </div>
    </LoginLayout>
  );
};

export default EnterCode;
