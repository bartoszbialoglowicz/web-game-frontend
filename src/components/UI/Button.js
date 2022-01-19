const Button = (props) => {
    return (
        <button type={props.type} disabled={props.disabled}>{props.value}</button>
    )
};

export default Button;