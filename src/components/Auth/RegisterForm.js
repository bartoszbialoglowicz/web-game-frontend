import { useState } from 'react';

import Button from "../UI/Button";
import Input from "./Input";
import useInput from '../../hooks/use-input';

const RegisterForm = (props) => { 
    const [validationErrors, setValidationErrors] = useState([]);

    const {
        value: usernameValue,
        isValid: usernameIsValid,
        hasError: usernameHasError,
        valueChangeHandler: usernameChangeHandler,
        inputBlurHandler: usernameBlurHandler,
        inputReset: usernameReset
    } = useInput(value => value.trim().length === value.length && value.trim().length > 4);

    const {
        value: emailValue,
        isValid: emailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        inputReset: emailReset
    } = useInput(value => value.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/));

    const {
        value: passwordValue,
        isValid: passwordIsValid,
        hasError: passwwordHasError,
        valueChangeHandler: passwordChangeHandler,
        inputBlurHandler: passwordBlurHandler,
        inputReset: passwordReset
    } = useInput(value => value.trim().length === value.length && value.trim().length > 4);

    const {
        value: password2Value,
        isValid: password2IsValid,
        hasError: passwword2HasError,
        valueChangeHandler: password2ChangeHandler,
        inputBlurHandler: password2BlurHandler,
        inputReset: password2Reset
    } = useInput(value => value === passwordValue);

    const formIsValid = usernameIsValid && 
                        emailIsValid &&
                        passwordIsValid &&
                        password2IsValid;

    const usernameFeedback = 'Username is too short.';
    const emailFeedback = 'Provide a valid e-mail.';
    const passwordFeedback = 'Password must be at least 5 characters long and must not have white spaces.';
    const password2Feedback = 'Passwords are not equals';

    const submitHandler = (event) => {
        event.preventDefault();
        
        const tmpEmail = emailValue;
        const tmpUser = usernameValue;
        const tmpPass = passwordValue;

        const payload = {
            email: tmpEmail,
            password: tmpPass,
            name: tmpUser
        }

        const resetInputs = () => {
            emailReset();
            usernameReset();
            passwordReset();
            password2Reset();
            setValidationErrors(null);
        }
        
        props.onSubmit(payload, resetInputs, setValidationErrors);
    }

    return (
        <form onSubmit={submitHandler}>
            <h2>SIGN UP</h2>
            <Input 
                isValid={usernameHasError
                } 
                type='text' name='username' 
                label='Username' 
                value={usernameValue}
                feedback={usernameFeedback}
                onBlur={usernameBlurHandler}
                onChange={usernameChangeHandler}/>
            <Input 
                isValid={emailHasError}
                type='text' name='email' 
                label='E-mail' 
                value={emailValue}
                feedback={emailFeedback}
                onBlur={emailBlurHandler}
                onChange={emailChangeHandler}/>
            <Input 
                isValid={passwwordHasError} 
                type='password' 
                name='password' 
                label='Password' 
                value={passwordValue}
                feedback={passwordFeedback}
                onBlur={passwordBlurHandler}
                onChange={passwordChangeHandler}/>
            <Input 
                isValid={passwword2HasError}
                type='password' 
                name='password2' 
                label='Repeat password'
                value={password2Value}
                feedback={password2Feedback}
                onBlur={password2BlurHandler}
                onChange={password2ChangeHandler}/>
            <Button type='submit' value='SIGN UP' disabled={!formIsValid}/>
            {validationErrors.length > 0 && validationErrors.map(text => <p key={text}>{text}</p>)}
            <p><span className="cursor-pointer" onClick={props.onClick}>Already have an account? Sign in here.</span></p>
        </form>
    )
};

export default RegisterForm;