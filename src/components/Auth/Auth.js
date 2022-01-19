import { useState, useRef} from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const Auth = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [formType, setFormType] = useState(true);

    const changeFormTypeHandler = () => {
        setFormType(latestType => !latestType);
    }

    return (
        <div>
            { formType && <LoginForm onClick={changeFormTypeHandler} isLogin={isLogin}/> }
            { !formType && <RegisterForm onClick={changeFormTypeHandler}/> }
        </div>
    )
}

export default Auth;