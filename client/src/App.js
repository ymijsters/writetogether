import React, { Component } from 'react';
import Index from "./components/LandingPage";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './w3.css';
import './App.css'
import Login from "./components/Authorization/Login";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Route exact path={'/login'} component={Login} />
                    <Route exact path={'/'} component={Index} />
                </div>
            </Router>
        );
    }
}

export default App;
