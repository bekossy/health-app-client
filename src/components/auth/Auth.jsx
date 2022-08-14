import React from "react";
import { Login } from "../auth/login";
import { Register } from "../auth/register";

const Auth = ({
  auth,
  username,
  setUsername,
  password,
  setPassword,
  handleSubmit,
  signup,
  signin,
  setHome,
  setUser,
  setToken,
}) => {
  return (
    <div className="formContainer">
      {auth ? (
        <Login
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          handleSubmit={handleSubmit}
          signin={signin}
          setHome={setHome}
          setUser={setUser}
          setToken={setToken}
        />
      ) : (
        <Register
          setHome={setHome}
          signup={signup}
          setUser={setUser}
          setToken={setToken}
        />
      )}
    </div>
  );
};

export default Auth;
