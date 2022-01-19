import { useState, useRef} from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";



const Auth = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [formType, setFormType] = useState(true);

    const submitHandler = async (event, payload, successFn, setErrors) => {
        event.preventDefault();
    
            const response = await fetch(
                'http://192.168.0.66:8000/api/user/create/',
                {
                    method: 'POST',
                    body: JSON.stringify(payload),
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                }
            );
            if (response.ok) {
                successFn();
            } else {
                const error = await response.json();
                const errorTexts = Object.entries(error).map(text => text[1]);
                setErrors(errorTexts);
            }  
        }

    const changeFormTypeHandler = () => {
        setFormType(latestType => !latestType);
    }

    return (
        <div>
            { formType && <LoginForm onClick={changeFormTypeHandler} isLogin={isLogin}/> }
            { !formType && <RegisterForm onClick={changeFormTypeHandler} onSubmit={submitHandler}/> }
        </div>
    )
}

export default Auth;