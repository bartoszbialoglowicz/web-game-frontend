import Button from "../UI/Button";
import Input from "./Input";

const LoginForm = () => {
    return (
        <form>
            <h2>LOGIN</h2>
            <Input type='text' name='login' label='Username'/>
            <Input type='password' name='password' label='Password'/>
            <Button type='submit' value='SIGN IN' />
        </form>
    )
};

export default LoginForm;