export const NavBtns = ({setAuth}) => {
    return <>
        <div className="navbtn">
                        <div className="signin" onClick={() => setAuth(true)}>Sign in</div>
                        <div className="signup" onClick={() => setAuth(false)}>Sign up</div>
                    </div>
    </>
} 