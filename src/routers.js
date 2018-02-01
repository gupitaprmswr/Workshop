import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './Home'
import Collections from './Collections'

import './App.css';

const MainRoute = () => (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">Logo</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/collections">Collection</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Route exact path="/" component={Home} />
        <Route path="/collections" component={Collections} />
      </div>
    </Router>

)

export default MainRoute;
