import styles from './Button.module.css';

const Button = (props) => {
    return (
        <button className={styles.formButton} type={props.type} disabled={props.disabled}>{props.value}</button>
    )
};

export default Button;