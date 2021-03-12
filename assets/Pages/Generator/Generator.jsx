import React, { Fragment, useEffect, useState } from 'react';
import styles from './Generator.scss?module';
import buttons from '@components/Button/Button.scss?module';
import TextField from '@components/TextField';

const Generator = props => {
    const [name, setName] = useState();
    const [lastName, setLastName] = useState();
    const [birthDate, setBirthDate] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [emailAddress, setEmailAddress] = useState();
    const [street, setStreet] = useState();
    const [zipCode, setZipCode] = useState();

    useEffect(() => {
        console.log(name, lastName, birthDate, phoneNumber, emailAddress, street, zipCode);
    }, [zipCode])

    return (
    <Fragment>
        <main className={styles.main}>
            <nav className={styles.main__topnav}>
                <div className={styles.topnav__user}>
                    <span>{ (name || 'name') + ' ' + (lastName || 'lastname') }</span>
                </div>
                <div className={styles.topnav__buttons}>
                    <button type="button" className={buttons.buttonLight}>log out</button>
                    <button type="button" className={buttons.buttonLight}>save</button>
                    <button type="submit" className={buttons.buttonDark}>generate CV</button>
                </div>
            </nav>
            <div className={styles.data_group}>
                <div className="cv-image">
                    <img src="" className="cv-image__image" id="js-user-image"/>
                    <input type="file" id="js-image-upload-input" accept="image/*" className="cv-image__select"/>
                </div>
                <div className={styles.row + ' ' + styles['row--right'] + ' ' + styles['row--1-3']}>
                    <TextField placeholder="Name" initialValue="Krystian" onChange={(e) => setName(e.target.value)}/>
                    <TextField placeholder="Lastname" initialValue="Borowicz"  onChange={(e) => setLastName(e.target.value)}/>
                </div>
                <div className={styles.row + ' ' + styles['row--right'] + ' ' + styles['row--1-3']}>
                    <TextField placeholder="Birth date DD.MM.YYYY" initialValue="08.12.1998" onChange={e => setBirthDate(e.target.value)}/>
                    <TextField placeholder="Phone number" initialValue="696838220"  onChange={e => setPhoneNumber(e.target.value)}/>
                </div>
                <div className={styles.row + ' ' + styles['row--right'] + ' ' + styles['row--2-3']}>
                    <TextField placeholder="Email address" initialValue="krypi23@gmail.com"  onChange={e => setEmailAddress(e.target.value)}/>
                </div>
                <div className={styles.row + ' ' + styles['row--right'] + ' ' + styles['row--1-3']}>
                    <TextField placeholder="Street, house number" value="Nagietkowa 28" onChange={e => setStreet(e.target.value)}/>
                    <TextField placeholder="Zip code and town" initialValue="Luboń 62-030"  onChange={e => setZipCode(e.target.value)}/>
                </div>
                <div className={styles.row + ' ' + styles['row--1']}>
                    <textarea className="form-control form-control--textarea" placeholder="RODO" id="js-basedata-rodo"></textarea>
                </div>
                <div className={styles.row + ' ' + styles['row--1']}>
                    <TextField placeholder="Github" initialValue="github.com/Grubix" />
                </div>
            </div>
            <div className={styles.data_group}>
                <div className="header">Skills</div>
                <div id="js-skills"></div>
                <div className="row">
                    <button type="button" className="btn btn--light" id="js-skills-add-btn">add</button>
                </div>
            </div>
            <div className={styles.data_group}>
                <div className="header">Interests</div>
                <div id="js-interests"></div>
                <div className="row">
                    <button type="button" className="btn btn--light" id="js-interests-add-btn">add</button>
                </div>
            </div>
            <div className={styles.data_group}>
                <div className="header">Employment history</div>
                <div id="js-employment-history"></div>
                <div className="row">
                    <button type="button" className="btn btn--light" id="js-employment-add-btn">add</button>
                </div>
            </div>
            <div className={styles.data_group}>
                <div className="header">Education history</div>
                <div id="js-education-history"></div>
                <div className="row">
                    <button type="button" className="btn btn--light" id="js-education-add-btn">add</button>
                </div>
            </div>
            <div className="main__loading-overlay" id="js-loading-overlay">
                <div className="loader"></div>
            </div>
        </main>
        <div className={styles.banner}>
            <b>CV Generator</b>&nbsp;by&nbsp;<a href="https://github.com/Grubix" className="link" target="_blank">Grubix</a>
        </div>
    </Fragment>
    );
};

export default Generator;