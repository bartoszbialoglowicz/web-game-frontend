import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

import styles from './Auth.module.css';

const Auth = () => {
    const [formType, setFormType] = useState(true);

    const changeFormTypeHandler = () => {
        setFormType(latestType => !latestType);
    }

    const style = 'flex-center ' + styles.formContainer;

    return (
        <div className={style}>
            { formType && <LoginForm onClick={changeFormTypeHandler} /> }
            { !formType && <RegisterForm onChange={changeFormTypeHandler} /> }
        </div>
    )
}

export default Auth;