// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from "./components/auth/auth";
import Home from "./components/home/Home";
import Header from "./components/navigation/header";
import { useState } from "react";

// const App = () => {
//   return <Router>
//     {/* NavBar is here */}
//     <Switch>
//       <Route path={"/signin"}>

//       </Route>
//     </Switch>
//   </Router>
// }

const App = () => {
  const [homeContent, setHomeContent] = useState(false);
  const [auth, setAuth] = useState(true);
  const [home, setHome] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [isLogedIn, setIsLogedIn] = useState(false);

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
      setHome(false)
    }
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
        />
      )}
      {!home && <Home/>}
    </>
  );
};

export default App;
