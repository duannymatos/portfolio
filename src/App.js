import React from 'react';
import './stylesheets/App.css'
import './stylesheets/Home.css'
import './stylesheets/Nav.css'

import Home from './components/Home/Home'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Route exact path="/" component={Home} />
        </Router>
      </header>
    </div>
  );
}

export default App;
