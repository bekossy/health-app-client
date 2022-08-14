import { User } from "./navOpts/user";
import { NavBtns } from "./navOpts/navBtns";
import Logo from "./navImage/pha logo.png";
import "./header.css";

const Header = ({ setAuth, home, user, auth, setHome, setUser, username }) => {
  return (
    <>
      <section>
        <nav className="navbar">
          <div className="navImage">
            <img src={Logo} alt="" />
          </div>

          {home ? (
            <NavBtns setAuth={setAuth} auth={auth} />
          ) : (
            <User user={username} setHome={setHome} setUser={setUser} />
          )}
        </nav>
      </section>
    </>
  );
};

export default Header;
