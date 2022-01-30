import Button from "../UI/Button";
import Input from "./Input";
import useInput from "../../hooks/use-input";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";
import Errors from "./Errors";
import { useState } from "react/cjs/react.development";
import useHttp from "../../hooks/use-http";
import './Form.css';
import { SERVER_URL } from "../../utils/Constant";

const LoginForm = (props) => {
    const [validationErrors, setValidationErrors] = useState([]);
    const authContext = useContext(AuthContext);
    const {error, sendRequest} = useHttp();

    const {
        value: emailValue,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
    } = useInput(value => value.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/));

    const {
        value: passwordValue,
        valueChangeHandler: passwordChangeHandler,
        inputBlurHandler: passwordBlurHandler
    } = useInput(value => value.trim().length === value.length && value.trim().length > 4);

    const submitHandler = async (event) => {
        event.preventDefault();
        
        const tmpEmail = emailValue;
        const tmpPass = passwordValue;
        const body = {
            email: tmpEmail,
            password: tmpPass
        };
        const payload = {
            type: 'POST'
        }
        
        const url = SERVER_URL + 'api/user/token/';
        const login = (data) => {
            authContext.login(data);
        }

        const setErrors = (data) => {
            const errorTexts = [];
            if (data.email) {
                errorTexts.push(data.email);
            }
            if (data.password) {
                errorTexts.push(data.password);
            }
            setValidationErrors(errorTexts);
        }

        sendRequest(url, body, payload, login, setErrors);
    }
    
    return (
        <form onSubmit={submitHandler}>
            <h2>LOGIN</h2>
            <Input 
                type='text' 
                name='email' 
                label='E-mail'
                value={emailValue}
                onBlur={emailBlurHandler}
                onChange={emailChangeHandler}
            />
            <Input 
                type='password' 
                name='password' 
                label='Password' 
                value={passwordValue}
                onBlur={passwordBlurHandler}
                onChange={passwordChangeHandler}    
            />
            <Button type='submit' value='SIGN IN' />
            {error && <Errors validationErrors={validationErrors}/>}
            <p><span className="cursor-pointer" onClick={props.onClick}>Don't have an account? Sign up for free.</span></p>
        </form>
    )
};

export default LoginForm;