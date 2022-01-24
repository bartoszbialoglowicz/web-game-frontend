import Button from "../UI/Button";
import Input from "./Input";
import useInput from "../../hooks/use-input";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";
import Errors from "./Errors";
import { useState } from "react/cjs/react.development";
import { Link } from "react-router-dom";

const LoginForm = (props) => {
    const [validationErrors, setValidationErrors] = useState([]);
    const authContext = useContext(AuthContext);

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

    const submitHandler = (event) => {
        event.preventDefault();
        
        const tmpEmail = emailValue;
        const tmpPass = passwordValue;
        const payload = {
            email: tmpEmail,
            password: tmpPass
        };
        
        const url = 'http://192.168.0.66:8000/api/user/token/';
        const login = async (data) => {
            const token = await data.json();
            authContext.login(token);
            console.log(authContext.token);
        }

        const setErrors = async (response) => {
            const error = await response.json();
            const errorTexts = Object.entries(error).map(text => text[1]);
            console.log(errorTexts);
            setValidationErrors(errorTexts);
        }

        props.onSubmit(url, payload, login, setErrors);
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
            <Errors validationErrors={validationErrors}/>
            <p><span className="cursor-pointer" onClick={props.onClick}>Don't have an account? Sign up for free.</span></p>
        </form>
    )
};

export default LoginForm;