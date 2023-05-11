import React from "react";
import "../style/app.css";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="navbar navbar-dark  navbar-expand-lg">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/" aria-current="page">
                خانه
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="products">
                فروشگاه
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="form">
                ثبت نام
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
