import Button from "../UI/Button";
import Input from "./Input";

const LoginForm = (props) => {
    return (
        <form>
            <h2>LOGIN</h2>
            <Input type='text' name='login' label='Username'/>
            <Input type='password' name='password' label='Password'/>
            <Button type='submit' value='SIGN IN' />
            <p><span className="cursor-pointer" onClick={props.onClick}>Don't have an account? Sign up for free.</span></p>
        </form>
    )
};

export default LoginForm;