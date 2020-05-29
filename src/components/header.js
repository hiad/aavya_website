import React from "react"
import ImageLogo from '../images/Aavya.svg';
import { Link } from "gatsby";

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
            <li><Link to="/about">About</Link></li>
            <li><Link to="#">Solutions </Link>
            </li>
            <li><Link to="#">Case Studies </Link>
            </li>
            <li><Link to="#">Client</Link></li>
            <li><Link to="#">Contact</Link></li>
            <li className="d-block d-lg-none"><a href="#">help</a></li>
            <li className="d-block d-lg-none"><a href="#">EN </a></li>
          </ul>
        </nav>
        <div className="act ml-auto ml-lg-0">
          <ul className="nav align-items-center">
            <li className="d-none d-lg-block"><a href="#">help</a></li>
            <li><Link href="#" className="req-btn">Request Consultation</Link></li>
            <li className="d-none d-lg-block"><a href="#">EN <span className="caret"></span></a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
);

export default Header;