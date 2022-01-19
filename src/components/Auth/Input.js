import { forwardRef } from "react";
import styles from './Input.module.css';

const Input = forwardRef((props, ref) => {

    const inputStyle = props.isValid ? styles.invalid : '';
    return (
        <div>
            <label htmlFor={props.name}>{props.label}</label>
            <input className={inputStyle} 
                    type={props.type} 
                    name={props.name} 
                    ref={ref}
                    value={props.value}
                    onBlur={props.onBlur}
                    onChange={props.onChange}/>
            {props.isValid &&<p className={styles.invalid}>{props.feedback}</p>}
        </div>
    )
});

export default Input;