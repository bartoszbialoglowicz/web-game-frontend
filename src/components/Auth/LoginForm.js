import { useRef } from 'react';

import Button from "../UI/Button";
import Input from "./Input";

const LoginForm = (props) => {
    const userInputRef = useRef();
    const passwordInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredEmail = userInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        if (props.isLogin) {

        } else {
            
        }
    }
    
    return (
        <form>
            <h2>LOGIN</h2>
            <Input type='text' name='login' label='Username' ref={userInputRef}/>
            <Input type='password' name='password' label='Password' ref={passwordInputRef}/>
            <Button type='submit' value='SIGN IN' />
            <p><span className="cursor-pointer" onClick={props.onClick}>Don't have an account? Sign up for free.</span></p>
        </form>
    )
};

export default LoginForm;