import { useContext } from "react";
import AuthContext from "../../store/auth-context";

const Header = () => {
    const authCtx = useContext(AuthContext);
    const logoutHandler = () => {
        authCtx.logout();
    }
    return (
        <header>
            <h1>Welcome {authCtx.data.name}</h1>
            <p onClick={logoutHandler}>LOGOUT</p>
        </header>
    )
}

export default Header;