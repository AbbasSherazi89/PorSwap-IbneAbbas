import React from "react";
import {Link} from "react-router-dom"
const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg py-4">
        <div className="container">
          <Link to="/">
            <div>
              <img
                className="quant"
                src="assets/logo.png"
                alt=" Logo "
                width={150}
              />
            </div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className=" header-nav-col collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item position-relative">
                <Link className="nav-link" aria-current="page" to="/home">
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  Litepaper
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Platform
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Roadmap
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  FAQs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Audit Report
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
