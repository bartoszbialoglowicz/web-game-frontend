import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";



const Auth = () => {
    const [formType, setFormType] = useState(true);

    const submitHandler = async (url, payload, successFn, setErrors=null) => {
    
            const response = await fetch(
                url,
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
                successFn(response);
            } else {
                setErrors(response);
            }
        }

    const changeFormTypeHandler = () => {
        setFormType(latestType => !latestType);
    }

    return (
        <div>
            { formType && <LoginForm onClick={changeFormTypeHandler} onSubmit={submitHandler}/> }
            { !formType && <RegisterForm onChange={changeFormTypeHandler} onSubmit={submitHandler}/> }
         </div>
    )
}

export default Auth;