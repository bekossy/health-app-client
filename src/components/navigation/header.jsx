import { useState } from "react";
import { Login } from "../auth/login";
import { Register } from "../auth/register";
import { User } from "./navOpts/user";
import { NavBtns } from "./navOpts/navBtns";
import Logo from './navImage/No way home.jpg'
import "./header.css"

const Header = () => {
    const [auth, setAuth] = useState(true);
    const [home, setHome] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState("");
    const [homeContent, setHomeContent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(username && password){
            const authLogin = { id: new Date().getTime().toString(), username, password}
            console.log(authLogin);
            setUser(username)
            setHome(false);
            setHomeContent(true)
            setUsername("")
            setPassword("")
        }
    }

    return <>
        <section>
            <nav className="navbar">
                <div className="navImage">
                    <img src={Logo} alt="" />
                </div>

        {home  ?   <NavBtns setAuth={setAuth}/>
               :   <User user={user}/>}
            </nav>
            
        {homeContent    ?   <h1 style={{marginTop: "200px"}}>Hello</h1>
                        :   <div className="formContainer">
                                {auth ? <Login username={username} setUsername={setUsername} password={password} setPassword={setPassword} handleSubmit={handleSubmit}/> : <Register/>}
                            </div>
        }
        </section>
    </>
}


export default Header;