import Generator from '@pages/Generator/Generator';
import React, { useState } from 'react';
import './App.scss';

const App = () => {
    const [token, setToken] = useState();

    if (!token) {
        return <Generator setToken={setToken}/>;
    } else {
        return <Generator setToken={setToken}/>;
    }
};

export default App;