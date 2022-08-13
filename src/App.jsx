import Auth from "./components/auth/auth";
import Home from "./components/home/Home";
import Header from "./components/navigation/header";
import { useState } from "react";

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
      setUser(username);
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
      <Header home={home} setAuth={setAuth} user={user} auth={auth} />
      {home && (
        <Auth
          homeContent={homeContent}
          auth={auth}
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          handleSubmit={handleSubmit}
          signin={signin}
          signup={signup}
        />
      )}
      {!home && <Home />}
    </>
  );
};

export default App;
