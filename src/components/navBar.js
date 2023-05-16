/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "../style/app.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const NavBar = () => {
  const dispatch = useDispatch();
  const { cardLength } = useSelector(
    (response) => response.initState.initList[1]
  );
  const [cardNumber, setCardNumber] = useState(0);
  useEffect(() => {
    setCardNumber(cardLength);
  }, [cardLength]);

  return (
    <nav className="navbar navbar-dark  navbar-expand-lg">
      <div className="container-fluid pos">
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
              <Link className="nav-link   " to="/" aria-current="page">
                خانه
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                فروشگاه
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="form">
                ثبت نام
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cardListPage" aria-current="page">
                سبد خرید
              </Link>
            </li>
            <li className="nav-item">
              <a className="card-number-box">{cardNumber}</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
