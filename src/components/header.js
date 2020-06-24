import React, { useState } from "react"
import ImageLogo from '../images/Aavya.svg';
import { Link } from "gatsby";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Header = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);


  return (<header>
    <div className="header">
      <div className="container d-flex align-items-center">
        <a className="navbar-brand" href="#">
          <img src={ImageLogo} alt="" />
        </a>
        <nav className="mx-auto d-none d-lg-block">
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
            <li><Link href="#" className="req-btn d-none d-lg-block">Request Consultation</Link></li>
            <li className="d-none d-lg-block"><a href="#">EN</a></li>
          </ul>
        </div>
        <div className="menu-burger d-block d-lg-none">
          <Navbar color="faded" light>
            <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          </Navbar>
        </div>
      </div>
      <div className="menu-burger d-block d-lg-none">
        <Collapse isOpen={!collapsed} navbar>
          <Nav className="mean-container" navbar>
            <NavItem>
              <NavLink className="menu-link" href="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Solutions</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Case Studies</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Client</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </div>
    </div>
  </header>
  );
};

export default Header;