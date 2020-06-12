import React from "react"
import Img from "gatsby-image";

const sections = {
      'banner': ({
            title,
            subtitle,
            image,
      }) => (
                  <section class="banner inner strategy-b">
                        <div class="bnr-bg"></div>
                        <div class="banner-cap">
                              <div class="container">
                                    <div class="row align-items-center">
                                          <div class="col-12 col-xl-5 ml-auto">
                                                <div class="cap text-center text-xl-left pt-4 pt-md-5 pt-lg-6 pt-xl-8 pb-3 pb-xl-6">
                                                      <h1 class="mb-1 mb-lg-2 display-2">{title}</h1>
                                                      <h6 class="mb-0 max font-weight-normal">{subtitle}</h6>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                        <div class="bnr-img">
                              <div class="container">
                                    <div class="row align-items-center">
                                          <div class="col-12 col-xl-7 mr-auto">
                                                <div class="img-pos text-center">
                                                      <Img fluid={image.fluid} alt="" class="mw-100 main d-inline-block" />
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section>

            ),
      'why-wrp': ({
            title,
            data,
            images
      }) => (
                  <section class="why-wrp pt-7 pt-md-8 pt-lg-10 pb-1 pb-md-2 pb-lg-3">
                        <div class="container">
                              <div class="sec-title mb-4 mb-md-5 mb-lg-6 text-center">
                                    <h2 class="mb-0">{title}</h2>
                              </div>
                              <div class="why-sec">
                                    <div class="row justify-content-around">
                                          <div class="col-12 col-xxl-11">
                                                <div class="row justify-content-around">
                                                      {
                                                            data.data.map(({ name, value }, idx) => (
                                                                  <div class="col-6 col-md-4">
                                                                        <div class="why-blk mb-3 mb-md-4 mb-lg-5">
                                                                              <div class="media mb-md-15 mb-lg-2 align-items-center">
                                                                                    <img src={images[idx].file.url} alt="" />
                                                                                    <div class="media-body">
                                                                                          <h6 class="mt-0 mb-0">{name}</h6>
                                                                                    </div>
                                                                              </div>
                                                                              <p class="mb-0 d-none d-md-block">{value}</p>
                                                                        </div>
                                                                  </div>
                                                            ))}

                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section >
            ),
      'story-sec': ({
            title,
            subtitle,
            subTitle2,
            longSubTitle,
            image,
            data,
      }) => (
                  <>
                        <div class="sec-title mb-2 mb-md-25 mb-lg-3 text-center">
                              <h2 class="mb-0">{title}</h2>
                        </div>
                        <section class="story-sec dark pt-4 pt-md-6 pt-lg-8">
                              <div class="bg"></div>
                              <div class="container">
                                    <div class="row">
                                          <div class="col-12 col-lg-4 col-xl-5">
                                                <div class="txt-wrp">
                                                      <h2 class="mb-15 mb-md-2 mb-xl-3">{subtitle}</h2>
                                                      <p class="mb-15 mb-md-2 mb-xl-3 max">{longSubTitle.longSubTitle}</p>
                                                      <h3 class="mb-15 mb-md-2 mb-xl-3 text-center text-md-left">{subTitle2}</h3>
                                                      <div class="txt-grid">
                                                            <div class="d-flex flex-wrap">
                                                                  {data.data.map(({ end, start, value }) => (
                                                                        <div class="txt mb-3 mb-lg-2 mb-xl-3">
                                                                              <p class="mb-0">{start}</p>
                                                                              <h2 class="mb-0">{value}</h2>
                                                                              <p class="mb-0 small">{end}</p>
                                                                        </div>
                                                                  ))}
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                          <div class="col-12 col-lg-8 col-xl-7">
                                                <div class="story-img">
                                                      <Img fluid={image.fluid} alt="" class="w-100" />
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </section></>

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
