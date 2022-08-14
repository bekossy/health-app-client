import "./auth.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { modalTypes } from "../modals";

export const Register = ({ signup, setHome, setUser, setToken, setModal }) => {
  const [regData, setRegData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    gender: "",
    age: "",
    address: "",
    password: "",
    ConPassword: "",
  });

  const navigate = useNavigate();
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (regData.password !== regData.ConPassword) {
      alert("Passwords dont match");
      return;
    }
    const response = await axios.post(
      "https://healthserver-psa.herokuapp.com/api/user",
      regData
    );

    if (response.status === 200) {
      setHome(false);
      localStorage.setItem("user", JSON.stringify(response.data));
      setUser(JSON.parse(localStorage.getItem("user")));
      navigate("/home");
      setToken(response.data.token);
      alert("welcome new user please add vitals");
      setModal(modalTypes.vitalAdd);
    } else {
      alert("please try again");
    }
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setRegData({ ...regData, [name]: value });
  };

  return (
    <>
      <form className="auth" onSubmit={handleOnSubmit}>
        <h1>Sign up</h1>
        <h3>Monitor your health from your home</h3>

        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          required
          onChange={handleOnChange}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          required
          onChange={handleOnChange}
        />

        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="userName"
          id="username"
          required
          onChange={handleOnChange}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          required
          onChange={handleOnChange}
        />

        <div className="gender">
          <p>Gender</p>

          <input
            type="radio"
            name="gender"
            id="male"
            value="male"
            onChange={handleOnChange}
          />
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            name="gender"
            id="female"
            onChange={handleOnChange}
            value="female"
          />
          <label htmlFor="female">Female</label>
        </div>

        <label htmlFor="age">Age </label>
        <input
          type="number"
          name="age"
          id="age"
          required
          onChange={handleOnChange}
        />

        <label htmlFor="address">Address </label>
        <input
          type="text"
          name="address"
          id="address"
          required
          onChange={handleOnChange}
        />

        <label htmlFor="password">Password </label>
        <input
          type="password"
          name="password"
          id="password"
          required
          onChange={handleOnChange}
        />

        <label htmlFor="ConPassword">Confirm Password </label>
        <input
          type="password"
          name="ConPassword"
          id="ConPassword"
          required
          onChange={handleOnChange}
        />

        <button type="submit" className="btn">
          Sign up
        </button>

        <h4>
          Already have an account? <span onClick={signup}>Login here</span>
        </h4>
      </form>
    </>
  );
};
