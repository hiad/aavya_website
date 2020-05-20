import React from "react"
import ImageLogo from '../images/Aavya.svg';

const Header = () => (
  <header>
    <div className="header">
      <div className="container d-flex align-items-center">
        <a className="navbar-brand" href="#">
          <img src={ImageLogo} alt="" />
        </a>
        <div className="menu-burger d-block d-lg-none"></div>
        <nav className="mx-auto">
          <ul className="nav">
            <li><a href="#">About</a></li>
            <li><a href="#">Solutions <span className="caret"></span></a>
            </li>
            <li><a href="#">Case Studies <span className="caret"></span></a>
            </li>
            <li><a href="#">Client</a></li>
            <li><a href="#">Contact</a></li>
            <li className="d-block d-lg-none"><a href="#">help</a></li>
            <li className="d-block d-lg-none"><a href="#">EN <span className="caret"></span></a></li>
          </ul>
        </nav>
        <div className="act ml-auto ml-lg-0">
          <ul className="nav align-items-center">
            <li className="d-none d-lg-block"><a href="#">help</a></li>
            <li><a href="#" className="req-btn">Request Consultation</a></li>
            <li className="d-none d-lg-block"><a href="#">EN <span className="caret"></span></a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
