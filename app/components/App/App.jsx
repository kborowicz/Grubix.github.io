import React, { Fragment } from 'react';
import { HashRouter, NavLink, Switch, Route, Redirect } from 'react-router-dom';
import styles from './App.scss?module';

const Link = ({ children, ...props }) => {
    return (
        <NavLink activeClassName={styles.selected} {...props}>
            { children}
        </NavLink>
    );
}

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
                        <Switch>
                            <Route path="/about-me"><p style={{ marginTop: '0px', marginBottom: '3000px' }}>About me</p></Route>
                            <Route path="/career">Career</Route>
                            <Route path="/work">work</Route>
                            <Route path="/contact">contact</Route>
                            <Route exact path="/">
                                <Redirect to="/about-me" />
                            </Route>
                        </Switch>
                    </div>
                </main>
            </div>
        </HashRouter>
    );
}

export default App;