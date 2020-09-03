import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { HomePage } from './pages';

function App() {
    return ( <
        Switch >
        <
        Route path = "/"
        exact = { true }
        component = { HomePage }
        />< /
        Switch >
    );
}

export default App;
