import React from "react";
import { Login } from "../auth/login";
import { Register } from "../auth/register";

const Auth = ({
  auth,
  username,
  setUsername,
  password,
  setPassword,
  signup,
  signin,
  setHome,
  setUser,
  setToken,
  setModal,
}) => {
  return (
    <div className="formContainer">
      {auth ? (
        <Login
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          signin={signin}
          setHome={setHome}
          setUser={setUser}
          setToken={setToken}
          setModal={setModal}
        />
      ) : (
        <Register
          setHome={setHome}
          signup={signup}
          setUser={setUser}
          setToken={setToken}
          setModal={setModal}
        />
      )}
    </div>
  );
};

export default Auth;
