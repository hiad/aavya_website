import React from "react"
import Img from "gatsby-image";
import partners from '../images/svg/partner.svg';
import optimizely from '../images/svg/optimizely.svg';
import vwo from '../images/svg/vwo.svg';
import SliderComponent from "../components/slider";

const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      autoplaySpeed: 3000,
      fadeIn: false,
      autoplay: true,
      pauseOnHover: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
            {
                  breakpoint: 1024,
                  settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true,
                  },
            },
            {
                  breakpoint: 768,
                  settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                  },
            },
      ],
};


const sections = {
      'banner': ({
            title,
            subtitle,
            subTitle2,
            image,
      }) => (
                  <section class="banner inner amazon-b">
                        <div class="bnr-bg"></div>
                        <div class="banner-cap">
                              <div class="container">
                                    <div class="row align-items-center">
                                          <div class="col-12 col-xl-5">
                                                <div class="cap text-center text-xl-left pt-4 pt-md-5 pt-lg-6 pt-xl-8 pb-3 pt-lg-6 pb-xl-8">
                                                      <h1 class="mb-0 display-2">{title}</h1>
                                                      <h4 class="mb-15 mb-lg-25">{subtitle}</h4>
                                                      <h6 class="mb-0 max font-weight-normal">{subTitle2}</h6>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                        <div class="bnr-img">
                              <div class="container">
                                    <div class="row align-items-center">
                                          <div class="col-12 col-xl-8 ml-auto">
                                                <div class="img-pos text-center">
                                                      <Img fluid={image.fluid} alt="" class="mw-100 main d-none d-md-inline-block" />
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
            subTitle2,
            images,
      }) => (
                  <><section class="why-wrp cro pt-7 pt-md-8 pt-lg-10 pb-1 pb-md-2 pb-lg-3">
                        <div class="bg"></div>
                        <div class="container">
                              <div class="serv-head w-800 d-flex flex-wrap align-items-center mb-4 mb-md-6 mb-lg-8">
                                    <div class="serv-t">
                                          <h4 class="text-center text-md-right mb-15 mb-md-0">{title}</h4>
                                    </div>
                                    <div class="serv-b d-flex align-items-center three">
                                          <div class="serv-logo"> <img src={partners} alt="" /></div>
                                          <div class="serv-logo"> <img src={optimizely} alt="" /></div>
                                          <div class="serv-logo"> <img src={vwo} alt="" /></div>
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
                                                                                    <img src={images[idx].file.url} alt="" class="mw-100 mr-2 mr-lg-3" />
                                                                                    <div class="media-body">
                                                                                          <h6 class="mt-0 mb-0" dangerouslySetInnerHTML={{ __html: name }} />
                                                                                    </div>
                                                                              </div>
                                                                              <p class="mb-0 d-none d-md-block" >{value}</p>
                                                                        </div>
                                                                  </div>
                                                            ))
                                                      }
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section>

                        <div class="sec-title mb-2 mb-md-25 mb-lg-3 text-center">
                              <h2 class="mb-0">{subTitle2}</h2>
                        </div></>
            ),
      'slider': ({
            slider,
      }) => (
                  <SliderComponent settingsAsProp={settings}>
                        {slider && slider.map(
                              ({ node: { title, data, longSubTitle, logo, image } }) => (
                                    <section class="story-sec pt-4 pt-md-6 pt-lg-8">
                                          <div class="bg"></div>
                                          <div class="container">
                                                <div class="row">
                                                      <div class="col-12 col-lg-4 col-xl-5">
                                                            <div class="txt-wrp">
                                                                  <div class="log-img mb-15 mb-md-2 mb-xl-3">
                                                                        {image && <img src={logo.file.url} alt="" class="mw-100" />}
                                                                  </div>
                                                                  <p class="mb-15 mb-md-2 mb-xl-3 max">{title}</p>
                                                                  <h3 class="mb-15 mb-md-2 mb-xl-3 text-center text-md-left">{longSubTitle.longSubTitle}</h3>
                                                                  <div class="txt-grid">
                                                                        <div class="d-flex flex-wrap">
                                                                              {data && data.data.map(
                                                                                    ({ start, value, end }) => (
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
                                                                  <Img fluid={image.fluid} alt="" class="w-100 mob-img" />
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </section>
                              ))}
                  </SliderComponent>
            ),
      'story-cont': ({
            title,
      }) => (
                  <section class="story-cont pt-4 pt-md-7 pt-lg-10 mt-10 mt-lg-6">
                        <div class="bg"></div>
                        <div class="container serve-tab">
                              <div class="sec-title mb-2 text-center max mx-auto">
                                    <h2 class="mb-0 font-weight-normal">{title}</h2>
                              </div>
                              <nav role='navigation' class="transformer-tabs mb-1 mb-lg-2 d-none d-lg-block">
                                    <ul>
                                          <li>
                                                <a href="#tab-1" class="active">
                                                      <span>Customer Retention</span>
                                                </a>
                                          </li>
                                          <li>
                                                <a href="#tab-2">
                                                      <span>Service</span>
                                                </a>
                                          </li>
                                          <li>
                                                <a href="#tab-3">
                                                      <span>ECommerce</span>
                                                </a>
                                          </li>
                                          <li>
                                                <a href="#tab-4">
                                                      <span>General</span>
                                                </a>
                                          </li>
                                    </ul>
                              </nav>
                        </div>
                        <div class="container">
                              <div class="owl-carousel owl-theme story-carousel mb-3 mb-md-5 mb-lg-7">
                                    <div class="slide-img">
                                          <img src="images/img18@2x.png" alt="" class="w-100 mob-img" />
                                    </div>
                                    <div class="slide-img">
                                          <img src="images/img19@2x.png" alt="" class="w-100 mob-img" />
                                    </div>
                              </div>
                              <div class="sec-title mb-3 mb-lg-5 text-center max mx-auto">
                                    <h2 class="mb-0 font-weight-normal">Finding Solutions - That's what we do!</h2>
                              </div>
                              <div class="txt-wrp d-block d-md-none text-center">
                                    <h2 class="mb-1 mb-md-2 font-weight-normal">BrüMate</h2>
                                    <p class="mb-1 mb-md-2 mb-lg-3">Duis vestibulum elit vel neque pharetra vulputate. Quisque scelerisque nisi urna. Duis rutrum non risus in imperdiet. Proin molestie accumsan nulla sit amet mattis. Ut vel tristique neque. Praesent purus eros, aliquet sit amet venenatis in, sodales in odio. Curabitur ac ligula et purus cursus vulputate accumsan sit amet erat. Vestibulum ac mauris ut nisl maximus porta eu a libero. In hac habitasse platea dictumst. Proin augue urna, pretium vel mauris sed, lobortis rutrum libero.</p>
                              </div>
                              <div class="row align-items-center mb-5">
                                    <div class="col-12 col-md-7 pr-lg-3 pr-xl-5">
                                          <div class="serve-img text-center">
                                                <img src="images/img20@2x.png" alt="" class="mw-100 d-inline-block" />
                                          </div>
                                    </div>
                                    <div class="col-12 col-md-5">
                                          <div class="txt-wrp text-center text-md-left">
                                                <div class="txt-wrp d-none d-md-block">
                                                      <h2 class="mb-1 mb-md-2 font-weight-normal">1BrüMate</h2>
                                                      <p class="mb-1 mb-md-2 mb-lg-3">Duis vestibulum elit vel neque pharetra vulputate. Quisque scelerisque nisi urna. Duis rutrum non risus in imperdiet. Proin molestie accumsan nulla sit amet mattis. Ut vel tristique neque. Praesent purus eros, aliquet sit amet venenatis in, sodales in odio. Curabitur ac ligula et purus cursus vulputate accumsan sit amet erat. Vestibulum ac mauris ut nisl maximus porta eu a libero. In hac habitasse platea dictumst. Proin augue urna, pretium vel mauris sed, lobortis rutrum libero.</p>
                                                </div>
                                                <div class="d-md-none d-xl-block text-left">
                                                      <h6 class="mb-1 mb-md-2 font-weight-normal">What Changed</h6>
                                                      <div class="media mb-2 mb-lg-3">
                                                            <svg class="mr-15 mr-lg-3" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35">
                                                                  <rect id="Rectangle_149" data-name="Rectangle 149" width="35" height="35" />
                                                            </svg>
                                                            <div class="media-body">
                                                                  <p class="mb-0">Design: <br />Phasellus dignissim, tellus in pellentesque mollis, mauris orci dignissim nisl, id gravida nunc enim quis nibh. Maecenas convallis eros a ante dignissim, vitae elementum metus facilisis. Cras in maximus sem. Praesent libero augue, ornare eget quam sed</p>
                                                            </div>
                                                      </div>
                                                      <div class="media mb-2 mb-lg-3">
                                                            <svg class="mr-15 mr-lg-3" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35">
                                                                  <rect id="Rectangle_149" data-name="Rectangle 149" width="35" height="35" />
                                                            </svg>
                                                            <div class="media-body">
                                                                  <p class="mb-0">Tool: <br />Phasellus dignissim, tellus in pellentesque mollis, mauris orci dignissim nisl, id gravida nunc enim quis nibh. Maecenas convallis eros a ante dignissim, vitae elementum metus facilisis. Cras in maximus sem. Praesent libero augue, ornare eget quam sed</p>
                                                            </div>
                                                      </div>
                                                      <div class="media mb-2 mb-lg-3">
                                                            <svg class="mr-15 mr-lg-3" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35">
                                                                  <rect id="Rectangle_149" data-name="Rectangle 149" width="35" height="35" />
                                                            </svg>
                                                            <div class="media-body">
                                                                  <p class="mb-0">Audience Targeting: <br />Phasellus dignissim, tellus in pellentesque mollis, mauris orci dignissim nisl, id gravida nunc enim quis nibh. Maecenas convallis eros a ante dignissim, vitae elementum metus facilisis. Cras in maximus sem. Praesent libero augue, ornare eget quam sed</p>
                                                            </div>
                                                      </div>
                                                </div>
                                                <a href="#" class="btn btn-primary">See Full Case Study</a>
                                          </div>
                                    </div>
                                    <div class="col-12 d-none d-md-block d-xl-none mt-2">
                                          <h6 class="mb-1 mb-md-2 font-weight-normal">What Changed</h6>
                                          <div class="row">
                                                <div class="col-4">
                                                      <div class="change-blk">
                                                            <svg class="mb-1" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35">
                                                                  <rect id="Rectangle_149" data-name="Rectangle 149" width="35" height="35" />
                                                            </svg>
                                                            <p class="mb-0">Design: <br />Phasellus dignissim, tellus in pellentesque mollis, mauris orci dignissim nisl, id gravida nunc enim quis nibh. Maecenas convallis eros a ante dignissim, vitae elementum metus facilisis. Cras in maximus sem. Praesent libero augue, ornare eget quam sed</p>
                                                      </div>
                                                </div>
                                                <div class="col-4">
                                                      <div class="change-blk">
                                                            <svg class="mb-1" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35">
                                                                  <rect id="Rectangle_149" data-name="Rectangle 149" width="35" height="35" />
                                                            </svg>
                                                            <p class="mb-0">Tool: <br />Phasellus dignissim, tellus in pellentesque mollis, mauris orci dignissim nisl, id gravida nunc enim quis nibh. Maecenas convallis eros a ante dignissim, vitae elementum metus facilisis. Cras in maximus sem. Praesent libero augue, ornare eget quam sed</p>
                                                      </div>
                                                </div>
                                                <div class="col-4">
                                                      <div class="change-blk">
                                                            <svg class="mb-1" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35">
                                                                  <rect id="Rectangle_149" data-name="Rectangle 149" width="35" height="35" />
                                                            </svg>
                                                            <p class="mb-0">Audience Targeting: <br />Phasellus dignissim, tellus in pellentesque mollis, mauris orci dignissim nisl, id gravida nunc enim quis nibh. Maecenas convallis eros a ante dignissim, vitae elementum metus facilisis. Cras in maximus sem. Praesent libero augue, ornare eget quam sed</p>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>

                              </div>
                              <div class="txt-wrp d-block d-md-none text-center">
                                    <h2 class="mb-1 mb-md-2 font-weight-normal">TopFoxx</h2>
                                    <p class="mb-1 mb-md-2 mb-lg-3">Duis vestibulum elit vel neque pharetra vulputate. Quisque scelerisque nisi urna. Duis rutrum non risus in imperdiet. Proin molestie accumsan nulla sit amet mattis. Ut vel tristique neque. Praesent purus eros, aliquet sit amet venenatis in, sodales in odio. Curabitur ac ligula et purus cursus vulputate accumsan sit amet erat. Vestibulum ac mauris ut nisl maximus porta eu a libero. In hac habitasse platea dictumst. Proin augue urna, pretium vel mauris sed, lobortis rutrum libero.</p>
                              </div>
                              <div class="row align-items-center">
                                    <div class="col-12 col-md-7 order-md-2 pl-lg-3 pl-xl-5">
                                          <div class="serve-img text-center">
                                                <img src="images/img21@2x.png" alt="" class="mw-100 d-inline-block" />
                                          </div>
                                    </div>
                                    <div class="col-12 col-md-5 order-md-1">
                                          <div class="txt-wrp text-center text-md-left">
                                                <div class="txt-wrp d-none d-md-block">
                                                      <h2 class="mb-1 mb-md-2 font-weight-normal">TopFoxx</h2>
                                                      <p class="mb-1 mb-md-2 mb-lg-3">Duis vestibulum elit vel neque pharetra vulputate. Quisque scelerisque nisi urna. Duis rutrum non risus in imperdiet. Proin molestie accumsan nulla sit amet mattis. Ut vel tristique neque. Praesent purus eros, aliquet sit amet venenatis in, sodales in odio. Curabitur ac ligula et purus cursus vulputate accumsan sit amet erat. Vestibulum ac mauris ut nisl maximus porta eu a libero. In hac habitasse platea dictumst. Proin augue urna, pretium vel mauris sed, lobortis rutrum libero.</p>
                                                </div>
                                                <div class="d-md-none d-xl-block text-left">
                                                      <h6 class="mb-1 mb-md-2 font-weight-normal">What Changed</h6>
                                                      <div class="media mb-2 mb-lg-3">
                                                            <svg class="mr-15 mr-lg-3" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35">
                                                                  <rect id="Rectangle_149" data-name="Rectangle 149" width="35" height="35" />
                                                            </svg>
                                                            <div class="media-body">
                                                                  <p class="mb-0">Design: <br />Phasellus dignissim, tellus in pellentesque mollis, mauris orci dignissim nisl, id gravida nunc enim quis nibh. Maecenas convallis eros a ante dignissim, vitae elementum metus facilisis. Cras in maximus sem. Praesent libero augue, ornare eget quam sed</p>
                                                            </div>
                                                      </div>
                                                      <div class="media mb-2 mb-lg-3">
                                                            <svg class="mr-15 mr-lg-3" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35">
                                                                  <rect id="Rectangle_149" data-name="Rectangle 149" width="35" height="35" />
                                                            </svg>
                                                            <div class="media-body">
                                                                  <p class="mb-0">Tool: <br />Phasellus dignissim, tellus in pellentesque mollis, mauris orci dignissim nisl, id gravida nunc enim quis nibh. Maecenas convallis eros a ante dignissim, vitae elementum metus facilisis. Cras in maximus sem. Praesent libero augue, ornare eget quam sed</p>
                                                            </div>
                                                      </div>
                                                      <div class="media mb-2 mb-lg-3">
                                                            <svg class="mr-15 mr-lg-3" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35">
                                                                  <rect id="Rectangle_149" data-name="Rectangle 149" width="35" height="35" />
                                                            </svg>
                                                            <div class="media-body">
                                                                  <p class="mb-0">Audience Targeting: <br />Phasellus dignissim, tellus in pellentesque mollis, mauris orci dignissim nisl, id gravida nunc enim quis nibh. Maecenas convallis eros a ante dignissim, vitae elementum metus facilisis. Cras in maximus sem. Praesent libero augue, ornare eget quam sed</p>
                                                            </div>
                                                      </div>
                                                </div>
                                                <a href="#" class="btn btn-primary">See Full Case Study</a>
                                          </div>
                                    </div>
                                    <div class="col-12 d-none d-md-block d-xl-none mt-2 order-md-3">
                                          <h6 class="mb-1 mb-md-2 font-weight-normal">What Changed</h6>
                                          <div class="row">
                                                <div class="col-4">
                                                      <div class="change-blk">
                                                            <svg class="mb-1" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35">
                                                                  <rect id="Rectangle_149" data-name="Rectangle 149" width="35" height="35" />
                                                            </svg>
                                                            <p class="mb-0">Design: <br />Phasellus dignissim, tellus in pellentesque mollis, mauris orci dignissim nisl, id gravida nunc enim quis nibh. Maecenas convallis eros a ante dignissim, vitae elementum metus facilisis. Cras in maximus sem. Praesent libero augue, ornare eget quam sed</p>
                                                      </div>
                                                </div>
                                                <div class="col-4">
                                                      <div class="change-blk">
                                                            <svg class="mb-1" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35">
                                                                  <rect id="Rectangle_149" data-name="Rectangle 149" width="35" height="35" />
                                                            </svg>
                                                            <p class="mb-0">Tool: <br />Phasellus dignissim, tellus in pellentesque mollis, mauris orci dignissim nisl, id gravida nunc enim quis nibh. Maecenas convallis eros a ante dignissim, vitae elementum metus facilisis. Cras in maximus sem. Praesent libero augue, ornare eget quam sed</p>
                                                      </div>
                                                </div>
                                                <div class="col-4">
                                                      <div class="change-blk">
                                                            <svg class="mb-1" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35">
                                                                  <rect id="Rectangle_149" data-name="Rectangle 149" width="35" height="35" />
                                                            </svg>
                                                            <p class="mb-0">Audience Targeting: <br />Phasellus dignissim, tellus in pellentesque mollis, mauris orci dignissim nisl, id gravida nunc enim quis nibh. Maecenas convallis eros a ante dignissim, vitae elementum metus facilisis. Cras in maximus sem. Praesent libero augue, ornare eget quam sed</p>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>

                              </div>
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

