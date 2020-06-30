import React from "react";
import Img from "gatsby-image";

const sections = {
      'banner': ({
            title,
            subtitle,
      }) => (
                  <section class="banner inner our-case-studies-b">
                        <div class="bnr-bg"></div>
                        <div class="">
                              <div class="container">
                                    <div class="row justify-content-center">
                                          <div class="col-12 col-xl-7">
                                                <div class="cap text-center pt-3 pt-md-6 pb-4">
                                                      <h1 class="mb-1 mb-lg-2 display-2">{title}</h1>
                                                      <h6 class="mb-0 max font-weight-normal">{subtitle}</h6>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section>

            ),
      'our-case-studies-wrap': ({
            caseStudies
      }) => (
                  <section class="our-case-studies-wrap pt-0 pt-md-3">
                        <div class="container">
                              <div class="row justify-content-center">
                                    <div class="col-lg-4 col-md-6">
                                          <div class="our-case-studies-box">
                                                {caseStudies.nodes.map(({ description, data, contentImage }) => (
                                                      <><div class="img">
                                                            <Img fluid={contentImage.fluid} alt="" />
                                                      </div>
                                                            <div class="desc">
                                                                  <h3 class="font-weight-medium">{description}</h3>
                                                                  <ul>
                                                                        {data.data.map(({ name, value }) => (
                                                                              <li>
                                                                                    <strong>{name}</strong>
                                                                                    <p dangerouslySetInnerHTML={{ __html: value }} />
                                                                              </li>
                                                                        ))}
                                                                  </ul>
                                                            </div></>
                                                ))}
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section >
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