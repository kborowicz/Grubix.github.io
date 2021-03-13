import React from 'react';
import styles from './Login.scss?module';
import buttons from '@components/Button/Button.scss?module'
import TextField from '@components/TextInput/TextInput';

const Login = props => {
    return (
        <div className={ styles.wrapper }>
            <div className={ styles.container }>
                <form>
                    <div className={ styles.row }>
                        <TextField errorMessage="" placeholder="Login"/>
                    </div>
                    <div className={ styles.row }>
                        <TextField errorMessage="Invalid password" type="password" placeholder="Password" id="input1"/>
                    </div>
                    <div className={ styles.row_submit }>
                        <button type="button" className={buttons.buttonLight}>sign up</button>
                        <button type="submit" className={buttons.buttonDark}>log in</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;