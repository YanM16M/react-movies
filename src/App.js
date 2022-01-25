import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Card from './components/Card';
import './App.css';

function App() {
  return (
    <React.Fragment>
        <Router>
            <Switch>
                <Route path="/home" exact component={Home} />
                <Route path="/" exact component={Home} />
            </Switch>
        </Router>
    </React.Fragment>
  );
}

export default App;
