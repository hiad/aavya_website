import React from "react"
import aavya from '../images/Aavya.svg';
import Img from "gatsby-image";

const sections = {
      'banner': ({
            title,
            subtitle,
      }) => (
                  <section class="banner inner about-b">
                        <div class="bnr-bg"></div>
                        <div class="banner-cap">
                              <div class="container">
                                    <div class="row align-items-center">
                                          <div class="col-12">
                                                <div class="cap text-center py-5">
                                                      <div class="bnr-logo mb-1 mb-lg-2 d-none d-xl-block"><img src={aavya} alt="" width="220px" /></div>
                                                      <h1 class="mb-1 mb-lg-2 display-2">{title}</h1>
                                                      <h6 class="mb-0 max font-weight-normal">{subtitle}</h6>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section>
            ),
      'about-cont': ({
            title,
            subtitle,
            data,
            images,
      }) => (
                  <section class="about-cont pt-4 pt-lg-7">
                        <div class="bg"></div>
                        <div class="container">
                              <div class="row justify-content-center mb-5">
                                    <div class="col-12 col-xl-10">
                                          <div class="row align-items-center">
                                                <div class="col-12 col-md-6 pr-lg-4 pr-x-7">
                                                      <div class="txt-wrp text-center text-md-left">
                                                            <h2 class="mb-1 mb-md-2 font-weight-normal">{title}</h2>
                                                            <p class="mb-2 mb-md-0">{data.data[0].name}</p>
                                                      </div>
                                                </div>
                                                <div class="col-12 col-md-6">
                                                      <div class="serve-img text-center">
                                                            <Img fluid={images[0].fluid} alt="" class="mw-100 d-inline-block" />
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                              <div class="sec-title mb-2 mb-md-25 mb-lg-3 text-center">
                                    <h2 class="mb-0">{subtitle}</h2>
                              </div>
                              <div class="row align-items-center mb-5">
                                    <div class="col-12 col-md-6 order-md-2 pl-lg-4 pl-x-7">
                                          <div class="txt-wrp text-center text-md-left">
                                                <h2 class="mb-1 mb-md-2 font-weight-normal">{data.data[1].value}</h2>
                                                <p class="mb-2 mb-md-0">{data.data[1].name}</p>
                                          </div>
                                    </div>
                                    <div class="col-12 col-md-6 order-md-1">
                                          <div class="serve-img text-center">
                                                <Img fluid={images[1].fluid} alt="" class="mw-100 d-inline-block" />
                                          </div>
                                    </div>
                              </div>
                              <div class="row align-items-center mb-5">
                                    <div class="col-12 col-md-6 pr-lg-4 pr-x-7">
                                          <div class="txt-wrp text-center text-md-left">
                                                <h2 class="mb-1 mb-md-2 font-weight-normal">{data.data[2].value}</h2>
                                                <p class="mb-2 mb-md-0">{data.data[2].name}</p>
                                          </div>
                                    </div>
                                    <div class="col-12 col-md-6">
                                          <div class="serve-img text-center">
                                                <Img fluid={images[2].fluid} alt="" class="mw-100 d-inline-block" />
                                          </div>
                                    </div>
                              </div>
                              <div class="row align-items-center mb-5">
                                    <div class="col-12 col-md-6 order-md-2 pl-lg-4 pl-x-7">
                                          <div class="txt-wrp text-center text-md-left">
                                                <h2 class="mb-1 mb-md-2 font-weight-normal">{data.data[3].value}</h2>
                                                <p class="mb-2 mb-md-0">{data.data[3].name}</p>
                                          </div>
                                    </div>
                                    <div class="col-12 col-md-6 order-md-1">
                                          <div class="serve-img text-center">
                                                <Img fluid={images[3].fluid} alt="" class="mw-100 d-inline-block" />
                                          </div>
                                    </div>
                              </div>
                              <div class="row align-items-center">
                                    <div class="col-12 col-md-6 pr-lg-4 pr-x-7">
                                          <div class="txt-wrp text-center text-md-left">
                                                <h2 class="mb-1 mb-md-2 font-weight-normal">{data.data[4].value}</h2>
                                                <p class="mb-2 mb-md-0">{data.data[4].name}</p>
                                          </div>
                                    </div>
                                    <div class="col-12 col-md-6">
                                          <div class="serve-img text-center">
                                                <Img fluid={images[4].fluid} alt="" class="mw-100 d-inline-block" />
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section>

            ),
      'about-banner': ({
            title,
            action,
            urlAction,
      }) => (
                  <section class="about-banner">
                        <div class="bnr-bg"></div>
                        <div class="banner-cap">
                              <div class="container">
                                    <div class="row align-items-center justify-content-center">
                                          <div class="col-12 col-md-9 col-lg-7 col-xl-5">
                                                <div class="cap text-center py-5">
                                                      <h2 class="mb-2 display-2">{title}</h2>
                                                      <a href={urlAction} class="btn btn-primary">{action}</a>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section>
            ),
      'default': () => ('<></>')
};

export {
      sections,
};