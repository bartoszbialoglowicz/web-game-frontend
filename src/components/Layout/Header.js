import { useContext } from "react";
import AuthContext from "../../store/auth-context";

const Header = () => {
    const authCtx = useContext(AuthContext);
    return (
        <header>
            <h1>Welcome</h1>
            <p onClick={authCtx.logout}>LOGOUT</p>
        </header>
    )
}

export default Header;