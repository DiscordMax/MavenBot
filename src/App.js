import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { LandingPage, MenuPage, DashboardPage, ScrimPage } from './pages';
import { ConfigPage } from './pages/ConfigPage';
import { ManagePage } from './pages/ManagementPage';

function App() {
    return ( <Switch>
        <Route path = "/" exact = { true } component = { LandingPage } />
        <Route path = "/dashboard" exact = { true } component = { MenuPage } />          
        <Route path = "/docscrim" exact = { true } component = { ScrimPage } />
        <Route path = "/docconfigs" exact = { true } component = { ConfigPage } /> 
        <Route path = "/docmanagement" exact = { true } component = { ManagePage } /> 
        <Route path = "/dashboard/:id" exact = { true } component = { DashboardPage } /> 
        </Switch>
    );
}

export default App;
