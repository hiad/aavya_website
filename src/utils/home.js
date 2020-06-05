import React from "react"
import { Link } from "gatsby";
import Tabs from "../components/tabs";
import SliderComponent from "../components/slider";
import Img from "gatsby-image";


//TODO: Fix responsive images
//TODO: Add an slider
const Slider = ({
      title,
      subtitle,
      actionTitle,
      urlAction,
      image
}) => (
            <section className="banner home-b">
                  <div className="bnr-bg"></div>
                  <div className="banner-cap">
                        <div className="container">
                              <div className="row align-items-xl-center">
                                    <div className="col-12 col-md-7 col-lg-6">
                                          <div className="text-center pt-4 pt-xl-3 pt-xxl-6 pb-0 pb-xl-3 pb-xxl-6">
                                                <h1 className="mb-2 display-1">{title}</h1>
                                                <h5 className="mb-3 max font-weight-normal">{subtitle}</h5>
                                                <a href={urlAction} className="btn btn-primary mb-1">{actionTitle || "Request Consultation"}</a>
                                                <p className="small mb-0">100% Free | No Consultation Fees</p>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <div className="bnr-img">
                        <div className="container">
                              <div className="row align-items-center">
                                    <div className="col-12 col-md-9 col-xl-8 col-xxl-7 ml-auto">
                                          <div className="img-pos text-center text-md-right">
                                                <Img fluid={image.fluid} />
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </section>
      );


const sections = {
      'achieve-sec': ({
            title,
            subtitle,
            action,
            urlAction,
            subTitle2,
            data,
            image: imageContainer,
            images,
      }) => (
                  <section className="achieve-sec pt-10 pt-md-8 pt-lg-10 pb-5 pb-md-8 pb-lg-10 mt-3 mt-md-0">
                        <div className="bg"></div>
                        <div className="container">
                              <div className="sec-title mb-4 mb-md-5 mb-lg-6 text-center max mx-auto">
                                    <h3 className="mb-0">{title}</h3>
                              </div>
                              <div className="achieve-logo">
                                    <div className="row justify-content-center">
                                          <div className="col-12 col-md-10 col-lg-8">
                                                <div className="row justify-content-center align-items-center">
                                                      {images && images.map((imageObj, idx) => (
                                                            <div className="col-4 col-sm-4 col-xl-3">
                                                                  <div className="logo">
                                                                        <Img key={idx + 1} fluid={imageObj.fluid} className="d-block mx-auto" />
                                                                  </div>
                                                            </div>
                                                      ))}
                                                </div>
                                          </div>
                                    </div>
                              </div>
                              <div className="row align-items-center">
                                    <div className="col-12 col-md-6 col-lg-5">
                                          <div className="txt-wrp mb-3 mb-md-0">
                                                <h3 className="mb-1 mb-lg-2">{subtitle}</h3>
                                                <p className="mb-2 mb-md-3 mb-lg-5">{subTitle2}</p>
                                                <a href={urlAction} className="btn btn-primary">{action}</a>
                                          </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-7">
                                          <div className="d-block d-lg-flex align-items-center">
                                                <div className="achieve-img text-center order-md-2" style={{ width: '100%' }}>
                                                      <Img key="imageAchive" fluid={imageContainer.fluid} className="d-block" />
                                                </div>
                                                <div className="txt-col order-md-1">
                                                      <div className="d-flex d-lg-block">
                                                            {
                                                                  data && data.data.map(({ value, name }) => (
                                                                        <div className="txt">
                                                                              <h3 className="mb-50">{value}</h3>
                                                                              <p className="mb-0" dangerouslySetInnerHTML={{ __html: name }} />
                                                                        </div>
                                                                  ))
                                                            }
                                                      </div>
                                                </div>
                                          </div>
                                    </div>

                              </div>
                        </div>
                  </section>

            ),
      'result-sec': ({
            title,
            subtitle,
            tabs,
      }) => (
                  <section className="result-sec pt-4 pt-lg-5 pb-0 pb-md-2">
                        <div className="bg"></div>
                        <div className="container">
                              <div className="sec-title mb-4 text-center max mx-auto">
                                    <h2 className="mb-50 font-weight-normal">{title}</h2>
                                    <h4 className="mb-0 font-weight-normal">{subtitle}</h4>
                              </div>
                              <Tabs tabs={tabs} />
                        </div>
                  </section>
            ),
      'case-sec': ({
            title,
            subtitle,
            action,
            urlAction,
            caseStudies
      }) => (
                  <section className="case-sec pt-5 pt-lg-8 pb-5 pb-lg-8">
                        <div className="bg"></div>
                        <div className="container">
                              <div className="sec-title mb-4 text-center max mx-auto">
                                    <h2 className="mb-50 font-weight-normal">{title}</h2>
                                    <h4 className="mb-0 font-weight-normal">{subtitle}</h4>
                              </div>
                              <div className="row align-items-center mb-5 mb-xl-0">
                                    {
                                          caseStudies.map(({
                                                description,
                                                logo,
                                                name,
                                                contentImage
                                          }, idx) => (
                                                      <div className="row align-items-center ">
                                                            {(idx % 2 !== 0) ? (
                                                                  <><div className="col-12 col-md-6  pr-md-3 pr-xl-5">
                                                                        <div className="txt-wrp text-center text-md-left">
                                                                              <div className="log-img mb-15 mb-lg-25">
                                                                                    <img src={logo[0].file.url} className="" alt="" />
                                                                              </div>
                                                                              <p className="mb-1 mb-md-0 mb-md-3">{description}</p></div>
                                                                        <a href="https://aavya.kinsta.cloud/our-case-studies/" className="btn btn-primary d-none d-md-inline-block">Read Case Study</a>
                                                                  </div>
                                                                        <div className="col-12 col-md-6 ">
                                                                              <div className="serve-img text-center" style={{ width: '100%' }}>
                                                                                    {contentImage && <Img fluid={contentImage.fluid} alt="" />}
                                                                              </div>
                                                                        </div></>
                                                            ) : (
                                                                        <> <div className="col-12 col-md-6 ">
                                                                              <div className="serve-img text-center" style={{ width: '100%' }}>
                                                                                    {contentImage && <Img fluid={contentImage.fluid} alt="" className="d-block" />}
                                                                              </div>
                                                                        </div>
                                                                              <div className="col-12 col-md-6  pr-md-3 pr-xl-5">
                                                                                    <div className="txt-wrp text-center text-md-left">
                                                                                          <div className="log-img mb-15 mb-lg-25">
                                                                                                <img src={logo[0].file.url} className="" alt="" />
                                                                                          </div>
                                                                                          <p className="mb-1 mb-md-0 mb-md-3">{description}</p></div>
                                                                                    <Link to="/case" className="btn btn-primary d-none d-md-inline-block">Read Case Study</Link>
                                                                              </div></>
                                                                  )}
                                                      </div>
                                                ))
                                    }
                              </div>
                              <div className="text-center mt-2">
                                    <a href={urlAction} className="study-link">{action}</a>
                              </div>
                        </div>
                  </section>
            ),
      'serve-sec': ({
            data,
            images,
      }) => (
                  <section className="serve-sec pt-5 pt-lg-8 pb-3 pb-md-5 pb-lg-8">
                        <div className="bg"></div>
                        {data && data.data.map(({
                              name,
                              value,
                        }, idx) => (
                                    <div className="container">
                                          {(idx % 2 !== 0) ? (
                                                <div className="row align-items-center">
                                                      <div className="col-12 col-md-6 pr-md-3 pr-xl-5">
                                                            <div className="txt-wrp text-center text-md-left">
                                                                  <h2 className="mb-1 mb-md-2 font-weight-normal">{name}</h2>
                                                                  <p className="mb-1 mb-md-0">{value}</p>
                                                            </div>
                                                      </div>
                                                      <div className="col-12 col-md-6">
                                                            <div className="serve-img text-center">
                                                                  <Img fluid={images[idx].fluid} alt="" className="mw-100" />
                                                            </div>
                                                      </div>
                                                </div>
                                          ) : (
                                                      <div className="row align-items-center mb-5 mb-xl-2">
                                                            <div className="col-12 col-md-6 order-md-2 pl-md-3 pl-xl-5">
                                                                  <div className="txt-wrp text-center text-md-left">
                                                                        <h2 className="mb-1 mb-md-2 font-weight-normal">{name}</h2>
                                                                        <p className="mb-1 mb-md-0">{value}</p>
                                                                  </div>
                                                            </div >
                                                            <div className="col-12 col-md-6 order-md-1">
                                                                  <div className="serve-img text-center">
                                                                        <Img fluid={images[idx].fluid} alt="" className="mw-100" />
                                                                  </div>
                                                            </div>
                                                      </div >

                                                )}
                                    </div>
                              ))}
                  </section>
            ),
      'partner-sec': ({
            title,
            subtitle,
            parners,
      }) => (
                  <section className="partner-sec pt-5 pt-lg-8 pb-5 pb-lg-8">
                        <div className="container">
                              <div className="sec-title mb-2 mb-md-0 text-center max mx-auto">
                                    <h2 className="mb-50 font-weight-normal">{title}</h2>
                                    <h4 className="mb-0 font-weight-normal">{subtitle}</h4>
                              </div>
                              <div className="row justify-content-center">
                                    <div className="col-12 col-lg-10">
                                          <div className="row">
                                                {parners && parners.map(({ logo }) => (
                                                      <div className="col-4 col-md-4 col-lg-3">
                                                            <div className="part-logo"><img src={logo[0].file.url} alt="" /></div>
                                                      </div>
                                                ))}

                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section>

            ),
      'testimonial-sec': ({
            title,
            subtitle,
            testimonials,
      }) => (
                  <section className="testimonial-sec pt-5 pt-lg-8">
                        <div className="bg"></div>
                        <div className="container">
                              <div className="sec-title mb-3 mb-lg-4 text-center max mx-auto">
                                    <h2 className="mb-0 font-weight-normal">{title}</h2>
                              </div>
                              <SliderComponent>
                                    {testimonials && testimonials.map(({ author, authorImage, authorSubTitle, description }) => (
                                          <div className="item">
                                                <div className="testi-blk bg-white px-15 px-md-3 py-2 py-md-3">
                                                      <h2 className="mb-0">"</h2>
                                                      <h6 className="mb-15">{description.description}</h6>
                                                      <div className="media align-items-center">
                                                            <img src={authorImage.file.url} className="mr-15 mr-lg-25" alt="..." />
                                                            <div className="media-body">
                                                                  <h6 className="m-0">{author}</h6>
                                                                  <p className="mb-0">{authorSubTitle}</p>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>))}
                              </SliderComponent>
                        </div>
                  </section>
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
      Slider,
      sections,
};