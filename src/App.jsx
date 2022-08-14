import Auth from "./components/auth/auth";
import Header from "./components/navigation/header";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Footer } from "./components/footer/footer";
import { Homepage } from "./components/Homepage/Homepage";
import Settings from "./components/settings/Settings";
import { useEffect } from "react";
import { modalTypes } from "./components/modals";
import Modals from "./components/modals/Modals";

const App = () => {
  const [auth, setAuth] = useState(true);
  const [home, setHome] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(undefined);
  const [token, setToken] = useState("");
  const [modal, setModal] = useState(modalTypes.none);
  const [editData, setEditData] = useState({});

  const randUser = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (randUser) {
      setUser(randUser);
      setUsername(randUser.userName);
      setHome(false);
      setToken(randUser.token);
    }
  }, []);

  const signin = () => {
    setAuth(false);
  };
  const signup = () => {
    setAuth(true);
  };

  return (
    <>
      <BrowserRouter>
        <Header
          home={home}
          setAuth={setAuth}
          user={username}
          auth={auth}
          setUsername={setUsername}
          setUser={setUser}
          setHome={setHome}
        />
        <Routes>
          <Route
            path="/"
            element={
              !user ? (
                <Auth
                  auth={auth}
                  username={username}
                  setUsername={setUsername}
                  password={password}
                  setPassword={setPassword}
                  signin={signin}
                  signup={signup}
                  setHome={setHome}
                  setUser={setUser}
                  setToken={setToken}
                />
              ) : (
                <Navigate to="/home" />
              )
            }
          />
          <Route
            path="/home"
            element={
              user ? (
                <Homepage
                  setModal={setModal}
                  token={token}
                  modal={modal}
                  editData={editData}
                  setEditData={setEditData}
                />
              ) : (
                <Navigate to={"/"} />
              )
            }
          />
          <Route
            path="/settings"
            element={
              user ? (
                <Settings
                  user={user}
                  token={token}
                  setModal={setModal}
                  modal={modal}
                  editData={editData}
                  setEditData={setEditData}
                />
              ) : (
                <Navigate to={"/"} />
              )
            }
          />
        </Routes>
        {modal && (
          <Modals
            setModal={setModal}
            modal={modal}
            editData={editData}
            setEditData={setEditData}
            token={token}
          />
        )}
        {user && <Footer />}
      </BrowserRouter>
    </>
  );
};

export default App;
