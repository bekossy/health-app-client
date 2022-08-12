import { useState } from "react";
import { User } from "./navOpts/user";
import { NavBtns } from "./navOpts/navBtns";
import Logo from "./navImage/pha logo.png";
import "./header.css";

const Header = ({ setAuth, home, user, auth }) => {
  return (
    <>
      <section>
        <nav className="navbar">
          <div className="navImage">
            <img src={Logo} alt="" />
          </div>

          {home ? <NavBtns setAuth={setAuth} auth={auth}/> : <User user={user} />}
        </nav>
      </section>
    </>
  );
};

export default Header;
