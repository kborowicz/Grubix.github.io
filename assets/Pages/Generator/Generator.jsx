import React, { Fragment, useEffect, useState } from 'react';
import styles from './Generator.scss?module';
import buttons from '@components/Button/Button.scss?module';
import TextInput from '@components/TextInput/TextInput';
import xd from './xd.jpg';
import { AiOutlineUser } from 'react-icons/ai';

const Generator = () => {
    const [baseDataFields, setBaseDataFields] = useState({
        name: 'Krystian',
        lastname: 'Borowicz',
        birthDate: '08.12.1998',
        phoneNumber: '696838220',
        email: 'krypi23@gmail.com',
        street: 'Nagietkowa 28',
        zipCode: '62-030 Luboń',
        gdpr: 'Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb niezbędnych do realizacji procesu rekrutacji zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (RODO).',
        github: 'github.com/Grubix'
    });

    const handleBaseDataChange = e => {
        const field = e.target.name;
        const value = e.target.value;

        setBaseDataFields(fields => ({...fields, [field]: value }));
    }

    return (
    <Fragment>
        <main className={styles.main}>
            <nav className={styles.main__topnav}>
                <div className={styles.topnav__user}>
                    <span>{ baseDataFields['name'] + ' ' + baseDataFields['lastname'] }</span>
                </div>
                <div className={styles.topnav__buttons}>
                    <button type="button" className={buttons.buttonLight}>log out</button>
                    <button type="button" className={buttons.buttonLight}>save</button>
                    <button type="submit" className={buttons.buttonDark}>generate CV</button>
                </div>
            </nav>
            <div className={styles.data_group}>
                <div className={styles['cv-image']}>
                    <img src={xd} className={styles['cv-image__image']} id="js-user-image"/>
                    <input type="file" id="js-image-upload-input" accept="image/*" className={styles['cv-image__select']}/>
                </div>
                <div className={styles.row + ' ' + styles['row--right'] + ' ' + styles['row--1-3']} style={{ marginTop: 0 }}>
                    <TextInput 
                        placeholder="Name"
                        name="name" 
                        value={baseDataFields['name']}
                        onChange={handleBaseDataChange}
                    />
                    <TextInput 
                        placeholder="Lastname" 
                        name="lastname" 
                        value={baseDataFields['lastname']}
                        onChange={handleBaseDataChange}
                    />
                </div>
                <div className={styles.row + ' ' + styles['row--right'] + ' ' + styles['row--1-3']}>
                    <TextInput 
                        placeholder="Birth date DD.MM.YYYY" 
                        name="birthDate" 
                        value={baseDataFields['birthDate']} 
                        onChange={handleBaseDataChange}
                    />
                    <TextInput 
                        placeholder="Phone number" 
                        name="phoneNumber" 
                        value={baseDataFields['phoneNumber']} 
                        onChange={handleBaseDataChange} 
                        maxLength="9"
                    />
                </div>
                <div className={styles.row + ' ' + styles['row--right'] + ' ' + styles['row--2-3']}>
                    <TextInput 
                        placeholder="Email address" 
                        name="email" 
                        type="email"
                        value={baseDataFields['email']} 
                        onChange={handleBaseDataChange}
                        errorMessage="email is invalid"
                    />
                </div>
                <div className={styles.row + ' ' + styles['row--right'] + ' ' + styles['row--1-3']}>
                    <TextInput 
                        placeholder="Street and house number" 
                        name="street" 
                        value={baseDataFields['street']} 
                        onChange={handleBaseDataChange}
                    />
                    <TextInput 
                        placeholder="Zip code and town" 
                        name="zipCode" 
                        value={baseDataFields['zipCode']} 
                        onChange={handleBaseDataChange}
                    />
                </div>
                <div className={styles.row + ' ' + styles['row--1']}>
                    <TextInput 
                        placeholder="GDPR clause" 
                        name="gdpr" 
                        value={baseDataFields['gdpr']} 
                        onChange={handleBaseDataChange}
                        multiline
                        style={{ resize: 'vertical', maxHeight: '200px' }}
                    />
                </div>
                <div className={styles.row + ' ' + styles['row--1']}>
                    <TextInput 
                        placeholder="Github" 
                        name="github" 
                        value={baseDataFields['github']} 
                        onChange={handleBaseDataChange}
                    />
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