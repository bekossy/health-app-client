import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./auth.css";
import axios from "axios";

export const Login = ({ signin, setHome, setUser, setToken }) => {
  const [logData, setLogData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "https://healthserver-psa.herokuapp.com/api/user/login",
      logData
    );
    if (response.status === 200) {
      setHome(false);
      localStorage.setItem("user", JSON.stringify(response.data));
      setUser(JSON.parse(localStorage.getItem("user")));
      navigate("/home");
      setToken(response.data.token);
    }
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setLogData({ ...logData, [name]: value });
  };

  return (
    <>
      <form className="auth" onSubmit={handleOnSubmit}>
        <h1>Sign in</h1>
        <h3>Monitor your health from your home</h3>

        <label htmlFor="username">Email</label>
        <input
          type="text"
          name="email"
          id="username"
          onChange={handleOnChange}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleOnChange}
        />

        <button type="submit" className="btn">
          Login
        </button>

        <h4>
          Not registered yet? <span onClick={signin}>Create an account</span>
        </h4>
      </form>
    </>
  );
};
