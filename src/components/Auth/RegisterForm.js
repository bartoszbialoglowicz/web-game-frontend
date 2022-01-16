import Button from "../UI/Button";
import Input from "./Input";

const RegisterForm = (props) => {
    return (
        <form>
            <h2>REGISTER</h2>
            <Input type='text' name='username' label='Username'/>
            <Input type='text' name='email' label='E-mail'/>
            <Input type='password' name='password' label='Password'/>
            <Input type='password2' name='password2' label='Repeat password'/>
            <Button type='submit' value='SIGN UP' />
            <p><span className="cursor-pointer" onClick={props.onClick}>Already have an account? Sign in here.</span></p>
        </form>
    )
};

export default RegisterForm;