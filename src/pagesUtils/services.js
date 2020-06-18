// import { Link } from "gatsby";
import React from "react"
import aavya from '../images/Aavya.svg';
import Tabs from "../components/tabs";
import Img from "gatsby-image";

const sections = {
      'banner': ({
            title,
            subtitle,
            subTitle2,
            image,
      }) => (

                  <section class="banner inner service-b">
                        <div class="bnr-bg"></div>
                        <div class="banner-cap">
                              <div class="container">
                                    <div class="row">
                                          <div class="col-12 col-md-5">
                                                <div class="text-center pt-4 pt-md-10 pt-lg-10 pb-3">
                                                      <h1 class="mb-15 display-2">{subtitle}</h1>
                                                      <h6 class="mb-0 max font-weight-normal">{subTitle2}</h6>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                        <div class="bnr-img">
                              <div class="container">
                                    <div class="row align-items-center">
                                          <div class="col-12 col-md-7 ml-auto">
                                                <div class="img-pos round-img text-left text-md-right">
                                                      <Img fluid={image.fluid} alt="" class="d-inline-block" />
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section>
            ),
      'serve-tab': ({
            title,
            subtitle,
            tabs,
      }) => (
                  <>
                        <section className="serve-tab mt-3 mt-md-0 pt-10 pt-lg-9">
                              <div className="bg"></div>
                              <div className="container">
                                    <div className="sec-title mb-4 text-center max mx-auto">
                                          <h2 className="mb-50 font-weight-normal">{title}</h2>
                                          {subtitle && <h4 className="mb-0 font-weight-normal">{subtitle}</h4>}
                                    </div>
                              </div>
                        </section>
                        <Tabs isServices tabs={tabs} />
                  </>
            ),
      'impect-sec': ({
            title,
            subtitle,
            urlAction,
            action,
            data,
            images,
      }) => (
                  <section className="impect-sec py-4 py-md-7 py-lg-10">
                        <div className="container">
                              <div className="row justify-content-center">
                                    <div className="col-12 col-lg-10">
                                          <div className="sec-title mb-3 mb-md-5 text-center max mx-auto">
                                                <h2 className="mb-50 font-weight-normal">{title}</h2>
                                                <h4 className="mb-0 font-weight-normal">{subtitle}</h4>
                                          </div>
                                          <div className="row">
                                                {data && data.data.map(({
                                                      name,
                                                      value,
                                                }, idx) => (
                                                            <div className="col-4">
                                                                  <div className="media mb-4 mb-lg-5 d-block d-lg-flex">
                                                                        <img src={images[idx].file.url} className="mb-1 mb-md-15 mr-lg-3" alt="..." />
                                                                        <div className="media-body">
                                                                              <h5 className="mb-0">{name}</h5>
                                                                              <p className="mb-0">{value}</p>
                                                                        </div>
                                                                  </div>
                                                            </div>)
                                                )}
                                          </div>
                                          <div className="text-center">
                                                <a href={urlAction} className="btn btn-primary">{action}</a>
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