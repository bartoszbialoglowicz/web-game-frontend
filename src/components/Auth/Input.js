import styles from './Input.module.css';

const Input = (props) => {

    return (
        <div>
            <label htmlFor={props.name}>{props.label}</label>
            <input  type={props.type} 
                    name={props.name}
                    value={props.value}
                    onBlur={props.onBlur}
                    onChange={props.onChange}
                    autoComplete="off"/>
            {props.isValid &&<span className={styles.invalid}>{props.feedback}</span>}
        </div>
    )
};

export default Input;