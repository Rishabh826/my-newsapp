import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  mode = () => {};

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-warning sticky-top"> 
          <div className="container-fluid">
            <div>
              <h1
                className="navbar-brand"
                to="/"
                style={{
                  textShadow: '2px 4px 5px black',
                  background: 'linear-gradient(90deg,blue,black,green)',
                  color: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                <strong>News Monkey</strong>
              </h1>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="/navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    About
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    News
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/Sports">
                        sports
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/entertainment">
                        entertainment
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/technology">
                        technology
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>

              <button
                type="button"
                className="btn btn-secondary mx-4"
                onClick={this.mode}
                style={{ height: '40px', width: '40px' }}
              ></button>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
