import React, { useEffect, useState } from 'react';
import styles from './TextField.scss?module';

const TextField = ({placeholder, errorMessage, onChange, onFocus, onBlur, id, initialValue}) => {
    const [focus, setFocus] = useState(false);
    const [inputValue, setInputValue] = useState(initialValue);
    const [valueChanged, setValueChanged] = useState(false);
    
    const handleOnChange = e => {
        setInputValue(e.target.value);
        setValueChanged(true);
        onChange && onChange(e);
    };

    const handleOnFocus = e => {
        setFocus(true);
        onFocus && onFocus(e);
    }
    
    const handleOnBlur = e => {
        setFocus(false);
        onBlur && onBlur(e);
    }

    return (
        <div className={styles.container + (!valueChanged && errorMessage ? ' ' + styles.error : '')}>
            <div className={styles.wrapper}>
                <input 
                    id={id}
                    type="text"
                    value={inputValue}
                    onFocus={handleOnFocus} 
                    onBlur={handleOnBlur}
                    onChange={handleOnChange}
                />
                <label htmlFor={id} className={styles.placeholder + ((focus || inputValue) ? ' ' + styles.placeholderFocus : '')}>
                    {placeholder}
                </label>
            </div>
            {!valueChanged && errorMessage && (<span className={styles.errorLabel}>{ errorMessage }</span>)}
        </div>
    );
};

export default TextField;