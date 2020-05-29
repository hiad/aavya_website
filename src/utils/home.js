import React from "react"
import Bimg from '../images/Bimg1@2x.png';
import tabBimg from '../images/tab-Bimg1@2x.png'
import mob from '../images/mob-Bimg1@2x.png'
import brumate from '../images/brumate-logo.png';
import th from '../images/12th-trine-logo.png';
import nails from '../images/static-nails-logo.png';
import topFox from '../images/top-foxx-logo.png';
import feat from '../images/Feat-logo.png';
import homeT from '../images/the-home-t-logo.png';
import sochatti from '../images/sochatti-logo.png';
import dottie from '../images/Dottie-couture-logo.png';
import chat1 from '../images/chart1@2x.png';
import research from '../images/research.svg';
import plan from '../images/plan.svg';
import charge from '../images/charge.svg';
import { Link } from "gatsby";
import Tabs from "../components/tabs";

//TODO: Fix responsive images
//TODO: Add an slider
const Slider = ({
      title,
      subtitle,
      action,
      urlAction,
}) => (
            <section class="banner home-b">
                  <div class="bnr-bg"></div>
                  <div class="banner-cap">
                        <div class="container">
                              <div class="row align-items-xl-center">
                                    <div class="col-12 col-md-7 col-lg-6">
                                          <div class="text-center pt-4 pt-xl-3 pt-xxl-6 pb-0 pb-xl-3 pb-xxl-6">
                                                <h1 class="mb-2 display-1">{title}</h1>
                                                <h5 class="mb-3 max font-weight-normal">{subtitle}</h5>
                                                <a href={urlAction} class="btn btn-primary mb-1">{action}</a>
                                                <p class="small mb-0">100% Free | No Consultation Fees</p>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <div class="bnr-img">
                        <div class="container">
                              <div class="row align-items-center">
                                    <div class="col-12 col-md-9 col-xl-8 col-xxl-7 ml-auto">
                                          <div class="img-pos text-center text-md-right">
                                                <img src={Bimg} alt="" class="mw-100 d-none d-lg-inline-block" />
                                                <img src={tabBimg} alt="" class="mw-100 d-none d-md-inline-block d-lg-none" />
                                                <img src={mob} alt="" class="mw-100 d-inline-block d-md-none" />
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
      }) => (
                  <section class="achieve-sec pt-10 pt-md-8 pt-lg-10 pb-5 pb-md-8 pb-lg-10 mt-3 mt-md-0">
                        <div class="bg"></div>
                        <div class="container">
                              <div class="sec-title mb-4 mb-md-5 mb-lg-6 text-center max mx-auto">
                                    <h3 class="mb-0">{title}</h3>
                              </div>
                              <div class="achieve-logo">
                                    <div class="row justify-content-center">
                                          <div class="col-12 col-md-10 col-lg-8">
                                                <div class="row justify-content-center align-items-center">
                                                      <div class="col-6 col-sm-4 col-xl-3">
                                                            <div class="logo"><img src={brumate} alt="" class="d-block mx-auto" /></div>
                                                      </div>
                                                      <div class="col-6 col-sm-4 col-xl-3">
                                                            <div class="logo"><img src={th} alt="" class="d-block mx-auto" /></div>
                                                      </div>
                                                      <div class="col-6 col-sm-4 col-xl-3">
                                                            <div class="logo"><img src={nails} alt="" class="d-block mx-auto" /></div>
                                                      </div>
                                                      <div class="col-6 col-sm-4 col-xl-3">
                                                            <div class="logo"><img src={topFox} alt="" class="d-block mx-auto" /></div>
                                                      </div>
                                                      <div class="col-6 col-sm-4 col-xl-3">
                                                            <div class="logo"><img src={feat} alt="" class="d-block mx-auto" /></div>
                                                      </div>
                                                      <div class="col-6 col-sm-4 col-xl-3">
                                                            <div class="logo"><img src={homeT} alt="" class="d-block mx-auto" /></div>
                                                      </div>
                                                      <div class="col-6 col-sm-4 col-xl-3">
                                                            <div class="logo"><img src={sochatti} alt="" class="d-block mx-auto" /></div>
                                                      </div>
                                                      <div class="col-6 col-sm-4 col-xl-3">
                                                            <div class="logo"><img src={dottie} alt="" class="d-block mx-auto" /></div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                              <div class="row align-items-center">
                                    <div class="col-12 col-md-6 col-lg-5">
                                          <div class="txt-wrp mb-3 mb-md-0">
                                                <h3 class="mb-1 mb-lg-2">{subtitle}</h3>
                                                <p class="mb-2 mb-md-3 mb-lg-5">{subTitle2}</p>
                                                <a href={urlAction} class="btn btn-primary">{action}</a>
                                          </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-7">
                                          <div class="d-block d-lg-flex align-items-center">
                                                <div class="achieve-img text-center order-md-2">
                                                      <img src={chat1} alt="" class="mw-100 shadow-img" />
                                                </div>
                                                <div class="txt-col order-md-1">
                                                      <div class="d-flex d-lg-block">
                                                            {
                                                                  data && data.data.map(({ value, name }) => (
                                                                        <div class="txt">
                                                                              <h3 class="mb-50">{value}</h3>
                                                                              <p class="mb-0" dangerouslySetInnerHTML={{ __html: name }} />
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
            action,
            urlAction,
            SubTitle2,
            Data,
      }) => (
                  <section class="result-sec pt-4 pt-lg-5 pb-0 pb-md-2">
                        <div class="bg"></div>
                        <div class="container">
                              <div class="sec-title mb-4 text-center max mx-auto">
                                    <h2 class="mb-50 font-weight-normal">{title}</h2>
                                    <h4 class="mb-0 font-weight-normal">{subtitle}</h4>
                              </div>

                              <Tabs />
                        </div>
                  </section>
            ),
      //TODO: Implement case studies
      'case-sec': ({
            title,
            subtitle,
            action,
            urlAction,
            caseStudies
      }) => (
                  <section class="case-sec pt-5 pt-lg-8 pb-5 pb-lg-8">
                        <div class="bg"></div>
                        <div class="container">
                              <div class="sec-title mb-4 text-center max mx-auto">
                                    <h2 class="mb-50 font-weight-normal">{title}</h2>
                                    <h4 class="mb-0 font-weight-normal">{subtitle}</h4>
                              </div>
                              {console.log(caseStudies)}
                              <div class="row align-items-center mb-5 mb-xl-0">
                                    {
                                          caseStudies.map(({
                                                description,
                                                logo,
                                                name,
                                                contentImage
                                          }, idx) => (
                                                      <div class="row align-items-center ">
                                                            {(idx % 2 !== 0) ? (
                                                                  <><div class="col-12 col-md-6  pr-md-3 pr-xl-5">
                                                                        <div class="txt-wrp text-center text-md-left">
                                                                              <div class="log-img mb-15 mb-lg-25">
                                                                                    <img src={logo[0].file.url} class="" alt="" />
                                                                              </div>
                                                                              <p class="mb-1 mb-md-0">{description}</p></div>
                                                                              <a href="https://aavya.kinsta.cloud/our-case-studies/" class="btn btn-primary d-none d-md-inline-block">Read Case Study</a>
                                                                  </div>
                                                                        <div class="col-12 col-md-6 ">
                                                                              <div class="serve-img text-center">
                                                                                    <img src={contentImage.file.url} alt="" class="mw-100 d-none d-lg-inline-block" />
                                                                              </div>
                                                                        </div></>
                                                            ) : (
                                                                        <> <div class="col-12 col-md-6 ">
                                                                              <div class="serve-img text-center">
                                                                                    <img src={contentImage.file.url} alt="" class="mw-100 d-none d-lg-inline-block" />
                                                                              </div>
                                                                        </div>
                                                                              <div class="col-12 col-md-6  pr-md-3 pr-xl-5">
                                                                                    <div class="txt-wrp text-center text-md-left">
                                                                                          <div class="log-img mb-15 mb-lg-25">
                                                                                                <img src={logo[0].file.url} class="" alt="" />
                                                                                          </div>
                                                                                          <p class="mb-1 mb-md-0">{description}</p></div>
                                                                                    <Link to="/case" class="btn btn-primary d-none d-md-inline-block">Read Case Study</Link>
                                                                              </div></>
                                                                  )}
                                                      </div>
                                                ))
                                    }
                              </div>
                              <div class="text-center mt-2">
                                    <a href={urlAction} class="study-link">{action}</a>
                              </div>
                        </div>
                  </section>
            ),
      'serve-sec': () => (
            <section class="serve-sec pt-5 pt-lg-8 pb-3 pb-md-5 pb-lg-8">
                  <div class="bg"></div>
                  <div class="container">
                        <div class="row align-items-center mb-5 mb-xl-2">
                              <div class="col-12 col-md-6 order-md-2 pl-md-3 pl-xl-5">
                                    <div class="txt-wrp text-center text-md-left">
                                          <h2 class="mb-1 mb-md-2 font-weight-normal">Make More Money, Use a Tested Digital Service</h2>
                                          <p class="mb-1 mb-md-0">Phasellus finibus enim nulla, quis ornare odio facilisis eu. Suspendisse ornare ante sit amet arcu semper, vel eleifend tortor egestas. Aenean luctus, lorem in hendrerit interdum, leo orci egestas diam, ac euismod massa est et turpis. Etiam auctor lectus vel neque convallis pharetra. Ut turpis eros, aliquet non ante id, interdum placerat erat. Curabitur sit amet eros vel orci venenatis hendrerit.</p>
                                    </div>
                              </div>
                              <div class="col-12 col-md-6 order-md-1">
                                    <div class="serve-img text-center">
                                          <img src="images/img3@2x.png" alt="" class="mw-100 d-none d-lg-inline-block" />
                                          <img src="images/tab-img3@2x.png" alt="" class="mw-100 d-none d-md-inline-block d-lg-none" />
                                          <img src="images/mob-img3@2x.png" alt="" class="mw-100 d-block d-md-none mx-auto" />
                                    </div>
                              </div>

                        </div>
                        <div class="row align-items-center">
                              <div class="col-12 col-md-6 pr-md-3 pr-xl-5">
                                    <div class="txt-wrp text-center text-md-left">
                                          <h2 class="mb-1 mb-md-2 font-weight-normal">We have set new benchmarks for us and our clients</h2>
                                          <p class="mb-1 mb-md-0">Phasellus finibus enim nulla, quis ornare odio facilisis eu. Suspendisse ornare ante sit amet arcu semper, vel eleifend tortor egestas. Aenean luctus, lorem in hendrerit interdum, leo orci egestas diam, ac euismod massa est et turpis. Etiam auctor lectus vel neque convallis pharetra. Ut turpis eros, aliquet non ante id, interdum placerat erat. Curabitur sit amet eros vel orci venenatis hendrerit.</p>
                                    </div>
                              </div>
                              <div class="col-12 col-md-6">
                                    <div class="serve-img text-center">
                                          <img src="images/img4@2x.png" alt="" class="mw-100 d-none d-lg-inline-block" />
                                          <img src="images/tab-img4@2x.png" alt="" class="mw-100 d-inline-block d-lg-none" />
                                    </div>
                              </div>
                        </div>
                  </div>
            </section>
      ),
      'partner-sec': ({
            title,
            subtitle,
            parners,
      }) => (
                  <section class="partner-sec pt-5 pt-lg-8 pb-5 pb-lg-8">
                        <div class="container">
                              <div class="sec-title mb-2 mb-md-0 text-center max mx-auto">
                                    <h2 class="mb-50 font-weight-normal">{title}</h2>
                                    <h4 class="mb-0 font-weight-normal">{subtitle}</h4>
                              </div>
                              <div class="row justify-content-center">
                                    <div class="col-12 col-lg-10">
                                          <div class="row">
                                                {parners && parners.map(({ logo }) => (
                                                      <div class="col-6 col-md-4 col-lg-3">
                                                            <div class="part-logo"><img src={logo[0].file.url} alt="" /></div>
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
                  <section class="testimonial-sec pt-5 pt-lg-8">
                        <div class="bg"></div>
                        <div class="container">
                              <div class="sec-title mb-3 mb-lg-4 text-center max mx-auto">
                                    <h2 class="mb-0 font-weight-normal">{title}</h2>
                              </div>
                              <div class="owl-carousel owl-theme">
                                    {testimonials && testimonials.map(({ author, authorImage, authorSubTitle, description }) => (
                                          <div class="item">
                                                <div class="testi-blk bg-white px-15 px-md-3 py-2 py-md-3">
                                                      <h2 class="mb-0">"</h2>
                                                      <h6 class="mb-15">{description.description}</h6>
                                                      <div class="media align-items-center">
                                                            <img src={authorImage.file.url} class="mr-15 mr-lg-25" alt="..." />
                                                            <div class="media-body">
                                                                  <h6 class="m-0">{author}</h6>
                                                                  <p class="mb-0">{authorSubTitle}</p>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>))}
                              </div>
                        </div>
                  </section>
            ),
      'impact-sec': ({
            title,
            subtitle,
            urlAction,
            action,
      }) => (
                  <section class="impect-sec py-4 py-md-7 py-lg-10">
                        <div class="row justify-content-center">
                              <div class="col-12 col-lg-10">
                                    <div class="sec-title mb-3 mb-md-5 text-center max mx-auto">
                                          <h2 class="mb-50 font-weight-normal">{title}</h2>
                                          <h4 class="mb-0 font-weight-normal">{subtitle}</h4>
                                    </div>
                                    <div class="row">
                                          <div class="col-4">
                                                <div class="media mb-4 mb-lg-5 d-block d-lg-flex">
                                                      <img src={research} class="mb-1 mb-md-15 mr-lg-3" alt="..." />
                                                      <div class="media-body">
                                                            <h5 class="mb-0">Competitor Research</h5>
                                                            <p class="mb-0">Keywords, Bids, Traffics, etc</p>
                                                      </div>
                                                </div>
                                          </div>
                                          <div class="col-4">
                                                <div class="media mb-4 mb-lg-5 d-block d-lg-flex">
                                                      <img src={plan} class="mb-1 mb-md-15 mr-lg-3" alt="..." />
                                                      <div class="media-body">
                                                            <h5 class="mb-0">Unique Growth Plan</h5>
                                                            <p class="mb-0">Keywords, Bids, Traffics, etc</p>
                                                      </div>
                                                </div>
                                          </div>
                                          <div class="col-4">
                                                <div class="media mb-4 mb-lg-5 d-block d-lg-flex">
                                                      <img src={charge} class="mb-1 mb-md-15 mr-lg-3" alt="..." />
                                                      <div class="media-body">
                                                            <h5 class="mb-0">What we Charge</h5>
                                                            <p class="mb-0">Keywords, Bids, Traffics, etc</p>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                                    <div class="text-center">
                                          <a href={urlAction} class="btn btn-primary">{action}</a>
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