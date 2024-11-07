import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home.js';
import Login from './components/Login.js';
import Registration from './components/Registration.js';
import Profile from './components/Profile.js';
import Quiz from './components/Quiz.js';

const App = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/registration" component={Registration} />
                <Route path="/profile" component={Profile} />
                <Route path="/quiz" component={Quiz} />
            </Switch>
            <Footer />
        </Router>
    );
};

export default App;
