import styles from './Button.module.css';

const Button = (props) => {
    return (
        <button onClick={props.onClick} className={styles.formButton} type={props.type} disabled={props.disabled}>{props.value}</button>
    )
};

export default Button;