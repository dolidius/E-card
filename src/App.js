import React, { Component } from 'react';
import './App.scss';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import Rules from './components/Rules/Rules';
import About from './components/About/About';
import Game from './components/Game/Game';

class App extends Component {
    render() {
        return (
            <Router>
                <Layout>
                    <Route path="/" exact component={Home} />
                    <Route path="/rules" component={Rules} />
                    <Route path="/about/" exact component={About} />
                    <Route path="/game" exact component={Game} />
                </Layout>
            </Router>
        );
    }
}

export default App;