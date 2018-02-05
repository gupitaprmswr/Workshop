import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './Home'
import Collections from './Collections'

import './App.css';

const place = [
  {
    name: "Bintaro",
    lat: "-6.284348",
    lon: "106.727839",
  },
  {
    name: "Jakarta",
    lat: "-6.190330",
    lon: "106.832642",
  },
  {
    name: "Bandung",
    lat: "-6.908557",
    lon: "107.609851",
  },
  {
    name: "Jogja",
    lat: "-7.811497",
    lon: "110.364545",
  },
  {
    name: "Bali",
    lat: "-8.509912",
    lon: "1115.249531",
  },
  {
    name: "Semarang",
    lat: "-6.986900",
    lon: "110.412598",
  }

]

const MainRoute = () => (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          {/* <Link className="navbar-brand" to="/">Logo</Link> */}
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Collections
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    {
                      place.map((item,i) =>{
                        return(
                          <Link key={i} className="dropdown-item" to={`/collections/${item.name}/${item.lat}/${item.lon}`}>{item.name}</Link>
                        );
                      })
                    }
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        <Route exact path="/" component={Home} />
        <Route path="/collections/:place/:lat/:lon" component={Collections} />
        {/* <Route path="/collect" for buttons jakarta bandung how? /> */}

        {/* footer */}
        <footer className="footer">
          <div className="card">
            {/* <div className="card-header">

            </div> */}
            <div className="card-body">
              <h5 className="card-title footer-title">All rights reserved Hungry© 2018</h5>
            </div>
          </div>

        </footer>

      </div>

    </Router>


)

export default MainRoute;
