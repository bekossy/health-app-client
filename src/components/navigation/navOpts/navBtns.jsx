export const NavBtns = ({ setAuth, auth }) => {
  return (
    <>
      <div className="navbtn">
        <div
          className={auth ? "signin" : "signup"}
          onClick={() => setAuth(true)}
        >
          Sign in
        </div>
        <div
          className={auth ? "signup" : "signin"}
          onClick={() => setAuth(false)}
        >
          Sign up
        </div>
      </div>
    </>
  );
};
