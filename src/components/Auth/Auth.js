import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const Auth = () => {
    const [formType, setFormType] = useState(true);

    const changeFormTypeHandler = () => {
        setFormType(latestType => !latestType);
    }

    return (
        <div>
            { formType && <LoginForm onClick={changeFormTypeHandler} /> }
            { !formType && <RegisterForm onChange={changeFormTypeHandler} /> }
        </div>
    )
}

export default Auth;