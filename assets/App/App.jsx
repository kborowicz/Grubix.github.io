import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

// Pages
import Login from '@pages/Login';
import Generator from '@pages/Generator';

// Base styles
import './App.scss';

const App = () => {
    const [token, setToken] = useState();

    if (!token) {
        return <Generator setToken={setToken}/>
    }

    return (
        <Router>
            <Sidenav/>
            <Content>
                <Topnav/>
                <Switch>
                    <Route render={() => <div>Not Found</div>} />
                </Switch>
            </Content>
        </Router>
    );
};

export default App;