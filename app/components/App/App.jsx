import React, { Fragment } from 'react';
import { HashRouter, NavLink, Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './App.scss?module';

const Link = ({ children, ...props }) => {
    return (
        <NavLink activeClassName={styles.selected} {...props}>
            { children}
        </NavLink>
    );
}

const animation = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: { duration: 0.4 }
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.4 }
    }
};

const Test = ({ children }) => {
    return (
        <motion.div {...animation}>
            { children }
        </motion.div>
    )
};

const Test2 = ({ children }) => {
    return (
        <motion.div {...animation}>
            { children }
        </motion.div>
    )
};

const App = () => {
    return (
        <HashRouter>
            <div className={styles.container}>
                <main className={styles.page}>
                    <nav className={styles.menu}>
                        <span className={styles.header}>k.borowicz</span>
                        <ul className={styles.menuList}>
                            <li className={styles.menuItem}><Link to="/about-me">About_me</Link></li>
                            <li className={styles.menuItem}><Link to="/career">Career</Link></li>
                            <li className={styles.menuItem}><Link to="/work">Work</Link></li>
                            <li className={styles.menuItem}><Link to="/contact">Contact</Link></li>
                            <li className={styles.menuItem}><a target="_blank" href="resume.pdf">Resume</a></li>
                        </ul>
                    </nav>
                    <div className={styles.pageContent}>
                        <AnimatePresence exitBeforeEnter>
                            <Switch>
                                <Route path="/about-me"><Test><p style={{ marginTop: '0px', marginBottom: '3000px' }}>About me</p></Test></Route>
                                <Route path="/career"><Test2>Career</Test2></Route>
                                <Route path="/work">Work</Route>
                                <Route path="/contact">contact</Route>
                                <Route exact path="/">
                                    <Redirect to="/about-me" />
                                </Route>
                            </Switch>
                        </AnimatePresence>
                    </div>
                </main>
            </div>
        </HashRouter>
    );
}

export default App;