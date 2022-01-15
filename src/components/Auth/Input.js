const Input = (props) => {
    return (
        <div>
            <label for={props.name}>{props.label}</label>
            <input type={props.type} name={props.name}/>
        </div>
    )
};

export default Input;