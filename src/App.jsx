import Auth from "./components/auth/auth";
import Home from "./components/home/Home";
import Header from "./components/navigation/header";
import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";
import { Footer } from "./components/footer/footer";
import { Homepage } from "./components/Homepage/Homepage";
import Settings from "./components/settings/Settings";
import { useEffect } from "react";

const App = () => {
  const [homeContent, setHomeContent] = useState(false);
  const [auth, setAuth] = useState(true);
  const [home, setHome] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});
  const [token, setToken] = useState("");

  const randUser = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    if (randUser) {
      setUser(randUser);
      setUsername(randUser.userName);
      setHome(false);
      setToken(randUser.token);
    }
  }, []);

  console.log(user);
  console.log(token);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      setHome(false);
      setHomeContent(true);
      setUsername("");
      setPassword("");
      setHome(false);
    }
  };
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
        />
        <Routes>
          <Route
            path="/"
            element={
              <Auth
                auth={auth}
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
                handleSubmit={handleSubmit}
                signin={signin}
                signup={signup}
                setHome={setHome}
                setUser={setUser}
              />
            }
          />
          <Route
            path="/home"
            element={user ? <Homepage token={token} /> : <Navigate to={"/"} />}
          />
          <Route
            path="/settings"
            element={user ? <Settings /> : <Navigate to={"/"} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>

      {/* {home && (
        
      )}
      {!home && <Home />} */}
    </>
  );
};

export default App;
