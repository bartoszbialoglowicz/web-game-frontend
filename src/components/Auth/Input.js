import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
    return (
        <div>
            <label htmlFor={props.name}>{props.label}</label>
            <input type={props.type} name={props.name} ref={ref}/>
        </div>
    )
});

export default Input;