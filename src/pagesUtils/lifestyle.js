import React from "react"
import Img from "gatsby-image";
import SliderComponent from "../components/slider";
import Tabs from "../components/tabs";

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




const settingsMultiple = {
      dots: true,
      infinite: true,
      speed: 1000,
      autoplaySpeed: 3000,
      fadeIn: false,
      autoplay: true,
      pauseOnHover: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
            {
                  breakpoint: 1024,
                  settings: {
                        slidesToShow: 2,
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
                  <section class="banner inner lifestyle-b">
                        <div class="bnr-bg"></div>
                        <div class="banner-cap">
                              <div class="container">
                                    <div class="row align-items-center">
                                          <div class="col-12 col-md-6 col-xxl-7">
                                                <div class="cap text-center pt-4 pt-md-5 pt-lg-6 pb-4 pb-md-5 pb-lg-6">
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
                                          <div class="col-12 col-md-5 col-lg-4 col-xxl-3 offset-md-6 offset-lg-7">
                                                <div class="img-pos text-center px-35 px-sm-0 px-xl-2 px-xxl-0">
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
                  <>
                        <section class="why-wrp pt-5 pt-md-6 pt-lg-8 pb-1 pb-md-2 pb-lg-3">
                              <div class="container">
                                    <div class="sec-title mb-4 mb-md-5 mb-lg-6 text-center">
                                          <h4>{title}</h4>
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
                              ({ node: { title, data, longSubTitle, subtitle, logo, image } }) => (
                                    <section class="story-sec pt-4 pt-md-6 pt-lg-8">
                                          <div class="bg"></div>
                                          <div class="container">
                                                <div class="row">
                                                      <div class="col-12 col-lg-4 col-xl-5">
                                                            <div class="txt-wrp">
                                                                  <div class="log-img mb-15 mb-md-2 mb-xl-3">
                                                                        {image && <img src={logo.file.url} alt="" class="mw-100" />}
                                                                  </div>
                                                                  <p class="mb-15 mb-md-2 mb-xl-3">{longSubTitle.longSubTitle}</p>
                                                                  <h3 class="mb-15 mb-md-2 mb-xl-3 text-center text-md-left">{subtitle}</h3>
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
                                    </section >
                              ))}
                  </SliderComponent>
            ),
      'story-cont': ({
            title,
            subtitle,
            tabs,
            caseStudies,
      }) => (
                  <section class="story-cont pt-4 pt-md-7 pt-lg-10 mt-10 mt-lg-6">
                        <div class="bg"></div>
                        <div class="container serve-tab">
                              <div class="sec-title mb-2 text-center max mx-auto">
                                    <h2 class="mb-0 font-weight-normal">{title}</h2>
                              </div>
                              <Tabs tabs={tabs} settingsSlider={settingsMultiple} />
                        </div>
                        <div class="container">
                              <div class="sec-title mb-3 mb-lg-5 text-center max mx-auto">
                                    <h2 class="mb-0 font-weight-normal">{subtitle}</h2>
                              </div>
                              {caseStudies.nodes.map(
                                    ({ longDescription, name, logo, images: imagesStudies, data }, idx) => {
                                          return (idx % 2 !== 0) ? (
                                                <>
                                                      <div class="txt-wrp d-block d-md-none text-center">
                                                            <h2 class="mb-1 mb-md-2 font-weight-normal">{name}</h2>
                                                            <p class="mb-1 mb-md-2 mb-lg-3">{longDescription.longDescription}</p>
                                                      </div>
                                                      <div class="row align-items-center">
                                                            <div class="col-12 col-md-7 order-md-2 pl-lg-3 pl-xl-5">
                                                                  <div class="serve-img text-center">
                                                                        <Img fluid={logo[0].fluid} alt="" class="mw-100 d-inline-block" />
                                                                  </div>
                                                            </div>
                                                            <div class="col-12 col-md-5 order-md-1">
                                                                  <div class="txt-wrp text-center text-md-left">
                                                                        <div class="txt-wrp d-none d-md-block">
                                                                              <h2 class="mb-1 mb-md-2 font-weight-normal">{name}</h2>
                                                                              <p class="mb-1 mb-md-2 mb-lg-3">{longDescription.longDescription}</p>
                                                                        </div>
                                                                        <div class="d-md-none d-xl-block text-left">
                                                                              <h6 class="mb-1 mb-md-2 font-weight-normal">{data.title}</h6>
                                                                              {data.data.map(({ name, value }, idx) => (
                                                                                    <div class="media mb-2 mb-lg-3">
                                                                                          {<img src={imagesStudies[idx].file.url} class="mr-2 mr-lg-3" />}
                                                                                          <div class="media-body">
                                                                                                <p class="mb-0">{name} <br />{value}</p>
                                                                                          </div>
                                                                                    </div>
                                                                              ))}
                                                                        </div>
                                                                        <a href="#" class="btn btn-primary">See Full Case Study</a>
                                                                  </div>
                                                            </div>
                                                            <div class="col-12 d-none d-md-block d-xl-none mt-2 order-md-3">
                                                                  <h6 class="mb-1 mb-md-2 font-weight-normal">{data.title}</h6>
                                                                  <div class="row">
                                                                        {data.data.map(({ name, value }, idx) => (
                                                                              <div class="col-4">
                                                                                    <div class="change-blk">
                                                                                          {<img src={imagesStudies[idx].file.url} class="mb-1" />}
                                                                                          <p class="mb-0">{name}: <br />{value}</p>
                                                                                    </div>
                                                                              </div>
                                                                        ))}
                                                                  </div>
                                                            </div>
                                                      </div>
                                                </>
                                          ) : (
                                                      <>
                                                            <div class="txt-wrp d-block d-md-none text-center">
                                                                  <h2 class="mb-1 mb-md-2 font-weight-normal">{name}</h2>
                                                                  <p class="mb-1 mb-md-2 mb-lg-3">{longDescription.longDescription}</p>
                                                            </div>
                                                            <div class="row align-items-center mb-5">
                                                                  <div class="col-12 col-md-7 pr-lg-3 pr-xl-5">
                                                                        <div class="serve-img text-center">
                                                                              <Img fluid={logo[0].fluid} alt="" class="mw-100 d-inline-block" />
                                                                        </div>
                                                                  </div>
                                                                  <div class="col-12 col-md-5">
                                                                        <div class="txt-wrp text-center text-md-left">
                                                                              <div class="txt-wrp d-none d-md-block">
                                                                                    <h2 class="mb-1 mb-md-2 font-weight-normal">{name}</h2>
                                                                                    <p class="mb-1 mb-md-2 mb-lg-3">{longDescription.longDescription}</p>
                                                                              </div>
                                                                              <div class="d-md-none d-xl-block text-left">
                                                                                    <h6 class="mb-1 mb-md-2 font-weight-normal">{data.title}</h6>
                                                                                    {data.data.map(({ name, value }, idx) => (
                                                                                          <div class="media mb-2 mb-lg-3">
                                                                                                {<img src={imagesStudies[idx].file.url} class="mr-2 mr-lg-3" />}
                                                                                                <div class="media-body">
                                                                                                      <p class="mb-0">{name} <br />{value}</p>
                                                                                                </div>
                                                                                          </div>
                                                                                    ))}
                                                                              </div>
                                                                              <a href="#" class="btn btn-primary">See Full Case Study</a>
                                                                        </div>
                                                                  </div>
                                                                  <div class="col-12 d-none d-md-block d-xl-none mt-2">
                                                                        <h6 class="mb-1 mb-md-2 font-weight-normal">{data.title}</h6>
                                                                        <div class="row">
                                                                              {data.data.map(({ name, value }, idx) => (
                                                                                    <div class="col-4">
                                                                                          <div class="change-blk">
                                                                                                {<img src={imagesStudies[idx].file.url} class="mb-1" />}
                                                                                                <p class="mb-0">{name}: <br />{value}</p>
                                                                                          </div>
                                                                                    </div>
                                                                              ))}
                                                                        </div>
                                                                  </div>

                                                            </div>
                                                      </>
                                                )
                                    })}
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

