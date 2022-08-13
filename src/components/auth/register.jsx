import "./auth.css";
import { useState } from "react";
import { registerUser } from "../../api";

export const Register = ({ signup }) => {
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

  const handleOnsubmit = async (e) => {
    e.preventDefault();
    console.log(regData.password, regData.ConPassword);
    if (regData.password !== regData.ConPassword) {
      alert("Passwords dont match");
      return;
    }
    const response = await registerUser(regData);
    console.log(response);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setRegData({ ...regData, [name]: value });
    console.log(regData);
  };

  return (
    <>
      <form className="auth" onSubmit={handleOnsubmit}>
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
