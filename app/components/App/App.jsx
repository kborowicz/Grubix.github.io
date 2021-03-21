import React, { Fragment } from 'react';
import { HashRouter, NavLink, Switch, Route } from 'react-router-dom';
import styles from './App.scss?module';

const Link = ({children, ...props}) => {
    return (
        <NavLink activeClassName={styles.selected} {...props}>
            { children }
        </NavLink>
    );
}

const App = () => {
    return (
        <HashRouter>
            <nav className={styles.menu}>
                <span className={styles.header}>k.borowicz</span>
                <ul className={styles.menuList}>
                    <li className={styles.menuItem}><Link to="/about-me">About me</Link></li>
                    <li className={styles.menuItem}><Link to="/work">Work</Link></li>
                    <li className={styles.menuItem}><Link to="/resume">Resume</Link></li>
                    <li className={styles.menuItem}><Link to="/contact">Contact</Link></li>
                    <li className={styles.menuItem}><a target="_blank" href="https://github.com/kborowicz">Github</a></li>
                </ul>
            </nav>
            <Switch>
                <Route path="/about-me"></Route>
                <Route path="/work"></Route>
                <Route path="/resume"></Route>
                <Route path="/contact"></Route>
            </Switch>
        </HashRouter>
    );
}

export default App;