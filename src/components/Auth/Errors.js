const Errors = (props) => {
    const lg = props.validationErrors.length;
    const errorMessages = lg > 0 ? 
    props.validationErrors.map(text => <p key={text}>{text}</p>) :
    <p></p>
    return errorMessages;
    
};

export default Errors;