import React from "react"
import { Link } from "gatsby";
import fb from '../images/fb-social.svg';
import insta from '../images/insta-social.svg';
import twit from '../images/twit-social.svg';
import shopify from '../images/foot-shopify.png';
import klaviyo from '../images/foot-klaviyo.png';
import footInsta from '../images/foot-insta.png';
import footfb from '../images/foot-fb.png';

const Footer = () => (
      <footer class="pt-3 pt-md-4">
            <div class="container">
                  <div class="row mb-md-7 mb-lg-10">
                        <div class="col-12 col-md-6 col-lg-5 col-xl-3">
                              <div class="foot-about mb-3 text-center text-md-left">
                                    <a href="#" class="d-inline-block mb-2"><img src="images/Aavya.svg" alt="" /></a>
                                    <p class="mb-0 mb-md-1">Etiam convallis elementum sapien, a aliquam turpis aliquam vitae. Praesent sollicitudin felis vel mi facilisis posuere.</p>
                                    <ul class="logo-list d-flex d-md-block align-items-center">
                                          <li><a href="#"><img src={shopify} alt="" /></a></li>
                                          <li><a href="#"><img src={klaviyo} alt="" /></a></li>
                                          <li><a href="#"><img src={footInsta} alt="" /></a></li>
                                          <li><a href="#"><img src={footfb} alt="" /></a></li>
                                    </ul>
                              </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-7 col-xl-9">
                              <div class="row">
                                    <div class="col-12 col-xl-7">
                                          <div class="d-block d-lg-flex justify-xl-content-center mb-3 mb-xl-0">
                                                <div class="link-list mb-15 mb-lg-0 px-xl-15">
                                                      <h6 class="footer-title mb-12 mb-lg-25">Get in Touch <span class="caret"></span></h6>
                                                      <ul class="footer_link">
                                                            <li><Link to="/about">About</Link></li>
                                                            <li><Link to="/careers">Career</Link></li>
                                                            <li><Link to="/services">Services</Link></li>
                                                            <li><Link to="#">How we Excel</Link></li>
                                                      </ul>
                                                </div>
                                                <div class="link-list mb-15 mb-lg-0 px-xl-15">
                                                      <h6 class="footer-title mb-15 mb-lg-25">Know More <span class="caret"></span></h6>
                                                      <ul class="footer_link">
                                                            <li><Link to='/'>Partners</Link></li>
                                                            <li><Link to=''>Clients</Link></li>
                                                            <li><Link to=''>App</Link></li>
                                                            <li><Link to=''>Testimonials</Link></li>
                                                      </ul>
                                                </div>
                                                <div class="link-list mb-15 mb-lg-0 px-xl-15">
                                                      <h6 class="footer-title mb-15 mb-lg-25">Legal <span class="caret"></span></h6>
                                                      <ul class="footer_link">
                                                            <li><Link to=''>Privacy Policy</Link></li>
                                                            <li><Link to=''>NDA's</Link></li>
                                                            <li><Link to=''>Terms & Conditions</Link></li>
                                                            <li><Link to=''>Cookie Policy</Link></li>
                                                      </ul>
                                                </div>
                                          </div>
                                    </div>
                                    <div class="col-12 col-xl-5">
                                          <div class="subscribe text-center text-md-left">
                                                <h6 class="mb-15 mb-lg-25">Subscribe to the Newsletter</h6>
                                                <form>
                                                      <div class="input-group mb-15 mb-lg-3">
                                                            <input type="email" class="form-control" placeholder="Email Address" />
                                                                  <div class="input-group-append ml-1">
                                                                        <button class="btn btn-primary" type="button">Subscribe</button>
                                                                  </div>
									</div>
								</form>
							</div>
                                                <div class="social d-flex d-md-block align-items-center mb-3 mb-md-0">
                                                      <ul class="nav">
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
                        <div class="copy text-center pb-2 pb-md-3 pb-lg-4">
                              <p class="text-primary font-weight-bold mb-0">© Copyright AAVYA 2020 - All Rights Reserved</p>
                        </div>
                  </div>
	</footer>
);

export default Footer;