import React, { useState } from 'react';
import styles from './TextField.scss?module';

const TextField = ({placeholder, errorMessage, id, ...inputProps}) => {
    const [focus, setFocus] = useState(false);
    const [inputValue, setInputValue] = useState();
    const [valueChanged, setValueChanged] = useState(false);

    const handleOnChange = e => {
        setInputValue(e.target.value);
        setValueChanged(true);
    };

    return (
        <div className={styles.container + (!valueChanged && errorMessage ? ' ' + styles.container_error : '') }>
            <div className={styles.wrapper}>
                <input 
                type="text" id={id}{...inputProps} 
                onFocus={() => setFocus(true)} 
                onBlur={() => setFocus(false)}
                onChange={handleOnChange}
                />
                <label htmlFor={id} className={styles.placeholder + ((focus || inputValue) ? ' ' + styles.placeholder_focus : '')}>
                    {placeholder}
                </label>
            </div>
            {!valueChanged && errorMessage && (<span className={styles.errorLabel}>{ errorMessage }</span>)}
        </div>
    );
};

export default TextField;