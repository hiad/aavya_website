import React from "react"
import Img from "gatsby-image";

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
                  <section class="banner inner carrer-b">
                        <div class="bnr-bg"></div>
                        <div class="banner-cap">
                              <div class="container">
                                    <div class="row align-items-center">
                                          <div class="col-12 col-mb-12">
                                                <div class="cap text-center pt-4 pb-4">
                                                      <h1 class="mb-0 display-2">{title}</h1>
                                                      <h6 class="mb-0 max font-weight-normal">{subtitle}</h6>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                        <div class="row align-items-center justify-content-center">
                              <div class="col-12 col-xl-10">
                                    <div class="img-pos text-center">
                                          <Img fluid={image.fluid} alt="" alt="" class="mw-100 main d-inline-block" />
                                    </div>
                              </div>
                        </div>
                  </section>),
      'search': ({
            title,
            longSubTitle,
      }) => (
                  <section class="search-box pt-3 pt-md-8 pb-0 pb-md-4">
                        <div class="search-box-inner max640 mb-3">
                              <input type="text" class="form-control" placeholdesr="Search Job" />
                              <button class="btn btn-primary font-weight-normal" type="button">{title}</button>
                        </div>
                        {longSubTitle && <div class="search-box-text max640 text-center font-weight-medium">{longSubTitle.longSubTitle}</div>}
                  </section>),
      'why-wrp': ({
            title,
            subtitle,
            longSubTitle,
            data,
            images,
            image,
      }) => (
                  <><section class="why-wrp job-position pt-3 pb-1 pb-md-2 pb-lg-3">
                        <div class="container">
                              <div class="sec-title text-center">
                                    <h2 class="font-weight-medium">{title}</h2>
                                    <h3 class="mb-0 font-weight-medium">{subtitle}</h3>
                              </div>
                              <div class="postion-box-wrap row justify-content-center">
                                    <div class="col-md-11">
                                          <div class="row">
                                                {data.data.map(({ value, name }, idx) => (
                                                      <div class="col-lg-3 col-md-4 col-6">
                                                            <div class="postion-box">
                                                                  <div class="thumb"><Img fluid={images[idx].fluid} /></div>
                                                                  <div class="desc">
                                                                        <strong>{name}</strong>
                                                                        <span>{value}</span>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                ))}

                                          </div>
                                    </div>
                              </div>
                              <div class="job-img-text">
                                    <div class="job-img"><Img fluid={image.fluid} /></div>
                                    <div class="job-text">
                                          <div dangerouslySetInnerHTML={{ __html: longSubTitle.longSubTitle }}></div>
                                    </div>
                              </div>
                        </div>
                  </section>
                  </>),
      'fjob-bg': ({ sections, jobs}) => {
            const {
                  title,
                  data,
                  subtitle,
                  images,
            } = sections.edges[3].node;

            const {
                  title: titlei,
                  subtitle: subtitlei,
                  data: datai,
                  images: imagesi,
                  urlAction: urlActioni,
                  action: actioni,
            } = sections.edges[4].node;



            return (
                  <>
                        <div class="fjob-bg">
                              <section class="featured-job pt-5 pb-1 pb-md-2 pb-lg-3">
                                    <div class="container">
                                          <div class="sec-title text-center pb-4">
                                                <h2 class="font-weight-medium mb-0">{title}</h2>
                                          </div>
                                          <div class="row justify-content-around">
                                                <div class="col-12 col-md-9">
                                                      <div class="fj-wrap">
                                                            <div class="fj-title">
                                                                  <strong>Jobs</strong>
                                                                  <strong>Category</strong>
                                                            </div>
                                                            {
                                                                  jobs && jobs.edges.map(({node}) => (
                                                                        <div class="fj-box">
                                                                              <strong>{node.position}</strong>
                                                                              <span>{node.category}</span>
                                                                        </div>
                                                                  ))
                                                            }
                                                            
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </section>
                              <section class="why-wrp amazon pt-4 pt-md-3 pt-lg-10">
                                    <div class="container">
                                          <div class="sec-title mb-4 mb-md-5 mb-lg-6 text-center">
                                                <h2 class="mb-0 font-weight-medium">{subtitle}</h2>
                                          </div>
                                          <div class="why-sec">
                                                <div class="row justify-content-around">
                                                      <div class="col-12 col-xxl-11">
                                                            <div class="row justify-content-around">
                                                                  {data && data.data.map(({ value, name }, idx) => (
                                                                        <div class="col-6 col-md-4">
                                                                              <div class="why-blk mb-3 mb-md-4 mb-lg-5">
                                                                                    <div class="media mb-md-15 mb-lg-2 align-items-center">
                                                                                          <img class="mr-2 mr-lg-3" src={images[idx].file.url} />
                                                                                          <div class="media-body">
                                                                                                <h6 class="mt-0 mb-0 font-weight-medium">{name}</h6>
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
                              </section>
                              <section class="impect-sec mt-0 mt-md-3 pt-3 pt-md-5 pb-4 pb-md-7 pb-lg-10">
                                    <div className="container">
                                          <div className="row justify-content-center">
                                                <div className="col-12 col-lg-10">
                                                      <div className="sec-title mb-3 mb-md-5 text-center max mx-auto">
                                                            <h2 className="mb-50 font-weight-normal">{titlei}</h2>
                                                            <h4 className="mb-0 font-weight-normal">{subtitlei}</h4>
                                                      </div>
                                                      <div className="row">
                                                            {datai && datai.data.map(({
                                                                  name,
                                                                  value,
                                                            }, idx) => (
                                                                        <div className="col-4">
                                                                              <div className="media mb-4 mb-lg-5 d-block d-lg-flex">
                                                                                    <img src={imagesi[idx].file.url} className="mb-1 mb-md-15 mr-lg-3" alt="..." />
                                                                                    <div className="media-body">
                                                                                          <h5 className="mb-0">{name}</h5>
                                                                                          <p className="mb-0">{value}</p>
                                                                                    </div>
                                                                              </div>
                                                                        </div>)
                                                            )}
                                                      </div>
                                                      <div className="text-center">
                                                            <a href={urlActioni} className="btn btn-primary">{actioni}</a>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </section>
                        </div>
                  </>);
      },
      'impect-sec': () => (''),
      'default': () => ('<></>')
};

export {
      sections,
};

