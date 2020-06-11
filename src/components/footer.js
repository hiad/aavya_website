import React, { useState } from 'react';
import { Link } from "gatsby";
import fb from '../images/fb-social.svg';
import insta from '../images/insta-social.svg';
import twit from '../images/twit-social.svg';
import shopify from '../images/foot-shopify.svg';
import klaviyo from '../images/foot-klaviyo.svg';
import footInsta from '../images/foot-insta.svg';
import footfb from '../images/foot-marketing.svg';

const Footer = () => {

      const [isActiveGet, setIsActiveGet] = useState(false);
      const [isActiveKnow, setIsActiveKnow] = useState(false);
      const [isActivelegal, setIsActiveLegal] = useState(false);

      const handleClick = (term) => {
            switch (term) {
                  case 'get':
                        setIsActiveGet(!isActiveGet);
                        break;
                  case 'know':
                        setIsActiveKnow(!isActiveKnow);
                        break;
                  case 'legal':
                        setIsActiveLegal(!isActivelegal);
                        break;
                  default: break;
            }
      };

      return (
            <footer className="pt-3 pt-md-4">
                  <div className="container">
                        <div className="row mb-md-7 mb-lg-10">
                              <div className="col-12 col-md-6 col-lg-5 col-xl-3">
                                    <div className="foot-about mb-3 text-center text-md-left">
                                          <a href="#" className="d-inline-block mb-2"><img src="images/Aavya.svg" alt="" /></a>
                                          <p className="mb-0 mb-md-1">Etiam convallis elementum sapien, a aliquam turpis aliquam vitae. Praesent sollicitudin felis vel mi facilisis posuere.</p>
                                          <ul className="logo-list d-none d-md-flex align-items-center">
                                                <li><a href="#"><img src={shopify} alt="" /></a></li>
                                                <li><a href="#"><img src={klaviyo} alt="" /></a></li>
                                          </ul>
                                          <ul className="logo-list d-none d-md-flex align-items-center">
                                                <li><a href="#"><img src={footInsta} alt="" /></a></li>
                                                <li><a href="#"><img src={footfb} alt="" /></a></li>
                                          </ul>

                                          <ul className="logo-list d-flex d-md-none no-wrap align-items-center">
                                                <li><a href="#"><img src={shopify} alt="" /></a></li>
                                                <li><a href="#"><img src={klaviyo} alt="" /></a></li>
                                                <li><a href="#"><img src={footInsta} alt="" /></a></li>
                                                <li><a href="#"><img src={footfb} alt="" /></a></li>
                                          </ul>
                                    </div>
                              </div>
                              <div className="col-12 col-md-6 col-lg-7 col-xl-9">
                                    <div className="row">
                                          <div className="col-12 col-xl-7">
                                                <div className="d-block d-lg-flex justify-xl-content-center mb-3 mb-xl-0">
                                                      <div className="link-list mb-15 mb-lg-0 px-xl-15">
                                                            <h6 className="footer-title mb-12 mb-lg-25" onClick={() => handleClick('get')}>Get in Touch <span className="caret"></span></h6>
                                                            <ul className={'footer_link' + ' ' + (isActiveGet && 'd-block')}>
                                                                  <li><Link to="/about">About</Link></li>
                                                                  <li><Link to="/careers">Career</Link></li>
                                                                  <li><Link to="/services">Services</Link></li>
                                                                  <li><Link to="#">How we Excel</Link></li>
                                                            </ul>
                                                      </div>
                                                      <div className="link-list mb-15 mb-lg-0 px-xl-15">
                                                            <h6 className="footer-title mb-15 mb-lg-25" onClick={() => handleClick('know')}>Know More <span className="caret"></span></h6>
                                                            <ul className={'footer_link' + ' ' + (isActiveKnow && 'd-block')}>
                                                                  <li><Link to='/'>Partners</Link></li>
                                                                  <li><Link to=''>Clients</Link></li>
                                                                  <li><Link to=''>App</Link></li>
                                                                  <li><Link to=''>Testimonials</Link></li>
                                                            </ul>
                                                      </div>
                                                      <div className="link-list mb-15 mb-lg-0 px-xl-15">
                                                            <h6 className="footer-title mb-15 mb-lg-25" onClick={() => handleClick('legal')}>Legal <span className="caret"></span></h6>
                                                            <ul className={'footer_link' + ' ' + (isActivelegal && 'd-block')}>
                                                                  <li><Link to=''>Privacy Policy</Link></li>
                                                                  <li><Link to=''>NDA's</Link></li>
                                                                  <li><Link to=''>Terms & Conditions</Link></li>
                                                                  <li><Link to=''>Cookie Policy</Link></li>
                                                            </ul>
                                                      </div>
                                                </div>
                                          </div>
                                          <div className="col-12 col-xl-5">
                                                <div className="subscribe text-center text-md-left">
                                                      <h6 className="mb-15 mb-lg-25">Subscribe to the Newsletter</h6>
                                                      <form>
                                                            <div className="input-group mb-15 mb-lg-3">
                                                                  <input type="email" className="form-control" placeholder="Email Address" />
                                                                  <div className="input-group-append ml-1">
                                                                        <button className="btn btn-primary" type="button">Subscribe</button>
                                                                  </div>
                                                            </div>
                                                      </form>
                                                </div>
                                                <div className="social d-flex d-md-block align-items-center mb-3 mb-md-0">
                                                      <ul className="nav">
                                                            <li>
                                                                  <a href="#">
                                                                        <img src={fb} alt="" />
                                                                  </a>
                                                            </li>
                                                            <li>
                                                                  <a href="#">
                                                                        <img src={insta} alt="" />
                                                                  </a>
                                                            </li>
                                                            <li>
                                                                  <a href="#">
                                                                        <img src={twit} alt="" />
                                                                  </a>
                                                            </li>
                                                      </ul>
                                                </div>
                                          </div>
                                    </div>
                              </div>

                        </div>
                        <div className="copy text-center pb-2 pb-md-3 pb-lg-4">
                              <p className="text-primary font-weight-bold mb-0">© Copyright AAVYA 2020 - All Rights Reserved</p>
                        </div>
                  </div>
            </footer>
      );
};

export default Footer;