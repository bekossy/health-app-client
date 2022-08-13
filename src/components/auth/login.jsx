import { useState } from "react";
import "./auth.css";

export const Login = ({
  password,
  setPassword,
  username,
  setUsername,
  handleSubmit,
  signin,
}) => {
  return (
    <>
      <form className="auth" onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <h3>Monitor your health from your home</h3>

        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
