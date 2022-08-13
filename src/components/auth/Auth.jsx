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
        />
      ) : (
        <Register signup={signup} />
      )}
    </div>
  );
};

export default Auth;
