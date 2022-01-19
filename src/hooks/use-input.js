import { useReducer } from "react";

const initialInputState = {
    value: '',
    isTouched: false
}

const inputReducer = (state, action) => {
    if (action.type === 'BLUR') {
        return {isTouched: true, value: state.value};
    } else if (action.type === 'INPUT') {
        return {isTouched: state.isTouched, value: action.value};
    }
    else if (action.type === 'RESET') {
        return {value: '', isTouched: false}
    }
    return inputReducer;
}

const useInput = (validator) => {
    const [inputState, dispatch] = useReducer(inputReducer, initialInputState);

    const valueIsValid = validator(inputState.value);
    const hasError = !valueIsValid && inputState.isTouched;

    const valueChangeHandler = (event) => {
        dispatch({type: 'INPUT', value: event.target.value});
    }

    const inputBlurHandler = (event) => {
        dispatch({type: 'BLUR'});
    }

    const inputReset = () => {
        dispatch({type: 'RESET'});
    }

    return {
        value: inputState.value,
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        inputReset
    };
};

export default useInput;