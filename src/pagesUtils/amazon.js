import React from "react"
import Img from "gatsby-image";

const sections = {
      'banner': ({
            title,
            subtitle,
            image,
      }) => (
                  <section class="banner inner amazon-b">
                        <div class="bnr-bg"></div>
                        <div class="banner-cap">
                              <div class="container">
                                    <div class="row align-items-center">
                                          <div class="col-12 col-xl-5">
                                                <div class="cap text-center text-xl-left pt-4 pt-md-5 pt-lg-6 pt-xl-8 pb-3 pt-lg-6 pb-xl-8">
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
                                          <div class="col-12 col-xl-7 col-xxl-6 ml-auto">
                                                <div class="img-pos text-center">
                                                      <Img fluid={image.fluid} alt="" class="mw-100 main shadow-img d-inline-block" />
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section>),
      'why-wrp': ({
            title,
            subtitle,
            data,
            image,
            images,
            subTitle2,
            action,
            longSubTitle,
            successCases,
      }) => (
                  <section class="why-wrp amazon pt-7 pt-md-8 pt-lg-10 pb-1 pb-md-2 pb-lg-3">
                        <div class="bg"></div>
                        <div class="container">
                              <div class="serv-head w-500 d-flex flex-wrap align-items-center mb-4 mb-md-6 mb-lg-8">
                                    <h4 class="text-right w-50">{title}</h4>
                                    <div class="serv-logo w-50">
                                          <Img fluid={image.fluid} alt="" class="mw-100" />
                                    </div>
                              </div>
                              <div class="sec-title mb-4 mb-md-5 mb-lg-6 text-center">
                                    <h2 class="mb-0">{subtitle}</h2>
                              </div>
                              <div class="why-sec">
                                    <div class="row justify-content-around">
                                          <div class="col-12 col-xxl-11">
                                                <div class="row justify-content-around">
                                                      {
                                                            data && data.data.map(({ value, name }, idx) => (
                                                                  <div class="col-6 col-md-4">
                                                                        <div class="why-blk mb-3 mb-md-4 mb-lg-5">
                                                                              <div class="media mb-md-15 mb-lg-2 align-items-center">
                                                                                    <img src={images[idx].file.url} alt="" class="mw-100" />
                                                                                    <div class="media-body">
                                                                                          <h6 class="mt-0 mb-0">{name}</h6>
                                                                                    </div>
                                                                              </div>
                                                                              <p class="mb-0 d-none d-md-block">{value}</p>
                                                                        </div>
                                                                  </div>
                                                            ))
                                                      }
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>



                        <div class="story-sec pt-3 pt-md-4 pt-lg-5 pb-4 pb-md-5 pb-lg-6">
                              <div class="container">
                                    <div class="row align-items-center">
                                          <div class="col-12 col-md-5">
                                                <div class="txt-wrp mb-3 mb-md-0">
                                                      <h2 class="mb-15 mb-md-2 mb-xl-3">{subTitle2}</h2>
                                                      <p class="mb-15 mb-md-2 mb-xl-3 max">{longSubTitle.longSubTitle}</p>
                                                      <a href="#" class="btn btn-primary">{action}</a>
                                                </div>
                                          </div>
                                          <div class="col-12 col-md-7">
                                                <div class="story-img">
                                                      <Img fluid={images[data.data.length].fluid} alt="" class="w-100 shadow-img" />
                                                </div>
                                                <div class="txt-col order-md-1 horizon mt-lg-2">
                                                      <div class="d-flex">
                                                            <div class="txt">
                                                                  <h3 class="mb-50">35K+</h3>
                                                                  <p class="mb-0">Clients <br />Acquired</p>
                                                            </div>
                                                            <div class="txt">
                                                                  <h3 class="mb-50">$1B+</h3>
                                                                  <p class="mb-0">Clients <br />Acquired</p>
                                                            </div>
                                                            <div class="txt">
                                                                  <h3 class="mb-50">82%</h3>
                                                                  <p class="mb-0">Clients <br />Acquired</p>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section>
            ),
      'story-cont': ({
            title,
            subtitle,
            data,
            image,
            images,
            subTitle2,
            successCases,
      }) => {
            const [node1, ...newSucces] = successCases.nodes;
            return (
                  <section class="story-cont amazon pt-4 pt-md-7 pt-lg-10 pb-1 pb-md-4 pb-lg-7">
                        <div class="bg"></div>
                        <div class="container">
                              <div class="sec-title mb-3 mb-md-4 mb-lg-5 text-center">
                                    <h2 class="mb-1 mb-lg-0">{title}</h2>
                                    <h5 class="mb-0">{subtitle}</h5>
                              </div>
                              {
                                    newSucces.map(
                                          ({
                                                name,
                                                description,
                                                action,
                                                image,
                                          }, idx) => {
                                                return (idx % 2 === 0) ? (
                                                      <div class="row align-items-center mb-5">
                                                            <div class="col-12 col-md-5 order-md-2">
                                                                  <div class="txt-wrp text-center text-md-left">
                                                                        <h2 class="mb-1 mb-md-2 font-weight-normal">{name}</h2>
                                                                        <p class="mb-1 mb-md-2 mb-lg-3">{description.description}</p>
                                                                        <a href="#" class="btn btn-primary d-none d-md-inline-block">{action}</a>
                                                                  </div>
                                                            </div>
                                                            <div class="col-12 col-md-7 order-md-1">
                                                                  <div class="serve-img text-center">
                                                                        <Img fluid={image.fluid} alt="" class="mw-100 my-1 my-md-0 d-inline-block" />
                                                                        <a href="#" class="btn btn-primary d-inline-block d-md-none">{action}</a>
                                                                  </div>
                                                            </div>
                                                      </div>) : (
                                                            <div class="row align-items-center mb-5">
                                                                  <div class="col-12 col-md-5">
                                                                        <div class="txt-wrp text-center text-md-left">
                                                                              <h2 class="mb-1 mb-md-2 font-weight-normal">{name}</h2>
                                                                              <p class="mb-1 mb-md-2 mb-lg-3">{description.description}</p>
                                                                              <a href="#" class="btn btn-primary d-none d-md-inline-block">{action}</a>
                                                                        </div>
                                                                  </div>
                                                                  <div class="col-12 col-md-7">
                                                                        <div class="serve-img text-center">
                                                                              <Img fluid={image.fluid} alt="" class="mw-100 my-1 my-md-0 d-inline-block" />
                                                                              <a href="#" class="btn btn-primary d-inline-block d-md-none">{action}</a>
                                                                        </div>
                                                                  </div>


                                                            </div>
                                                      )
                                          }
                                    )
                              }
                        </div>
                  </section>
            )
      },
      'impect-sec': ({
            title,
            subtitle,
            urlAction,
            action,
            data,
            images,
      }) => (
                  <section className="impact-sec py-4 py-md-7 py-lg-10">
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

