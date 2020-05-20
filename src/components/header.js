import React from "react"

const Header = () => (
  <header>
    <div class="header">
      <div class="container d-flex align-items-center">
        <a class="navbar-brand" href="#"><img src="images/Aavya.svg" alt="" /></a>
        <div class="menu-burger d-block d-lg-none"></div>
        <nav class="mx-auto">
          <ul class="nav">
            <li><a href="#">About</a></li>
            <li><a href="#">Solutions <span class="caret"></span></a>
            </li>
            <li><a href="#">Case Studies <span class="caret"></span></a>
            </li>
            <li><a href="#">Client</a></li>
            <li><a href="#">Contact</a></li>
            <li class="d-block d-lg-none"><a href="#">help</a></li>
            <li class="d-block d-lg-none"><a href="#">EN <span class="caret"></span></a></li>
          </ul>
        </nav>
        <div class="act ml-auto ml-lg-0">
          <ul class="nav align-items-center">
            <li class="d-none d-lg-block"><a href="#">help</a></li>
            <li><a href="#" class="req-btn">Request Consultation</a></li>
            <li class="d-none d-lg-block"><a href="#">EN <span class="caret"></span></a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
