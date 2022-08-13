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
        />
      ) : (
        <Register setHome={setHome} signup={signup} setUser={setUser} />
      )}
    </div>
  );
};

export default Auth;
