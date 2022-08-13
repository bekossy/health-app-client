import Auth from "./components/auth/auth";
import Header from "./components/navigation/header";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./components/home/Home.css";
import { Homepage } from "./components/Homepage/Homepage";
import Settings from "./components/settings/Settings";

const App = () => {
  const [homeContent, setHomeContent] = useState(false);
  const [auth, setAuth] = useState(true);
  const [home, setHome] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      const authLogin = {
        id: new Date().getTime().toString(),
        username,
        password,
      };
      console.log(authLogin);
      setUser(username);
      setHome(false);
      setHomeContent(true);
      setUsername("");
      setPassword("");
      setHome(false);
    }
  };

  return (
    <>
      <BrowserRouter>
        <Header home={home} setAuth={setAuth} user={user} auth={auth} />
        <Routes>
          <Route
            path="/"
            element={
              <Auth
                homeContent={homeContent}
                auth={auth}
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
                handleSubmit={handleSubmit}
              />
            }
          />
          <Route path="/home" element={<Homepage />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
