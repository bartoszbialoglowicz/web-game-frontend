import { useRef } from 'react';

import Button from "../UI/Button";
import Input from "./Input";
import useInput from '../../hooks/use-input';

const RegisterForm = (props) => {
    const userInputRef = useRef();
    const passwordInputRef = useRef();
    const password2InputRef = useRef();
    const emailInputRef = useRef();

    const {
        value: usernameValue,
        isValid: usernameIsValid,
        hasError: usernameHasError,
        valueChangeHandler: usernameChangeHandler,
        inputBlurHandler: usernameBlurHandler,
        inputReset: usernameReset
    } = useInput(value => value.trim().legth === value.length);

    const {
        value: emailValue,
        isValid: emailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        inputReset: emailReset
    } = useInput(value => value.trim().legth === value.length);

    const {
        value: passwordValue,
        isValid: passwordIsValid,
        hasError: passwwordHasError,
        valueChangeHandler: passwordChangeHandler,
        inputBlurHandler: passwordBlurHandler,
        inputReset: passwordReset
    } = useInput(value => value.trim().legth === value.length);

    const {
        value: password2Value,
        isValid: password2IsValid,
        hasError: passwword2HasError,
        valueChangeHandler: password2ChangeHandler,
        inputBlurHandler: password2BlurHandler,
        inputReset: password2Reset
    } = useInput(value => value.trim().legth === value.length);

    const submitHandler = async (event) => {
        event.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredUsername = userInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        if (props.isLogin) {
            
        } else {
            const response = await fetch(
                'http://192.168.0.66:8000/api/user/create/',
                {
                    method: 'POST',
                    body: JSON.stringify({
                        email: enteredEmail,
                        password: enteredPassword,
                        name: enteredUsername
                    }),
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                }
            );
            const data = await response.json();
            console.log(data);
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <h2>REGISTER</h2>
            <Input type='text' name='username' label='Username' ref={userInputRef}/>
            <Input type='text' name='email' label='E-mail' ref={emailInputRef}/>
            <Input type='password' name='password' label='Password' ref={passwordInputRef}/>
            <Input type='password' name='password2' label='Repeat password'/>
            <Button type='submit' value='SIGN UP' />
            <p><span className="cursor-pointer" onClick={props.onClick}>Already have an account? Sign in here.</span></p>
        </form>
    )
};

export default RegisterForm;