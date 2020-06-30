import React, { useState } from "react"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Img from "gatsby-image";
import sources from "../utils/images";
import SliderComponent from "../components/slider";


const settingsDefault = {
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



const TabsComponent = ({
      tabs,
      settingsSlider = settingsDefault
}) => {
      const [tab, setTab] = useState(0);
      const [open, setOpen] = useState(false);

      const handleClick = (tabIndex) => {
            setTab(tabIndex);
      };

      const pageClassName = tabs.nodes[0].page;

      return (
            <Tabs className="react-tabs" selectedIndex={tab} onSelect={tabIndex => {
                  handleClick(tabIndex);
                  setOpen(!open);
            }}>
                  <TabList className={open ? 'mb-3 mb-lg-4 open' : 'mb-3 mb-lg-4'}>
                        {tabs.nodes.map(({
                              tab,
                              logo
                        }) => (
                                    <Tab>
                                          {logo && <img src={logo.file.url} alt="" />}
                                          <span className={['services', 'cro', 'lifestyle'].includes(pageClassName) && 'isBlack'} dangerouslySetInnerHTML={{ __html: tab }}></span>
                                    </Tab>
                              ))}
                  </TabList>

                  {tabs.nodes.map(({
                        title,
                        text,
                        image,
                        subTitle,
                        className,
                        page,
                        images,
                        data,
                  }) => (
                              <TabPanel className={className}>
                                    {page === 'Home' &&
                                          <div className="row align-items-center">
                                                <div className="col-12 col-md-5 col-lg-4 order-md-2">
                                                      <div className="txt-wrp">
                                                            {title && <h2 className="mb-15 font-weight-normal">{title}</h2>}
                                                            {text && <p className="mb-0 mb-md-3">{text.text}</p>}
                                                      </div>
                                                </div>
                                                <div className="col-12 col-md-7 col-lg-8 order-md-1">
                                                      <div className="result-img text-center">
                                                            {image && <Img fluid={sources(image)} alt="" className="mw-100" />}
                                                      </div>
                                                </div>
                                          </div>}
                                    {page === 'services' && className === 'strat-bg' &&
                                          <section class={'serve-blk py-4 py-md-6 py-lg-8 py-xl-10 ' + className}>
                                                <div class="bg"></div>
                                                <div class="container">
                                                      <div class="txt-wrp d-block d-lg-none">
                                                            <h2 class="mb-15 font-weight-normal">{title}</h2>
                                                            <p class="mb-3">{subTitle}</p>
                                                      </div>
                                                      <div class="row align-items-center">
                                                            <div class="col-12 col-md-6">
                                                                  <div class="result-img text-center">
                                                                        {image && <Img fluid={sources(image)} alt="" className="mw-100 shadow-img" />}
                                                                  </div>
                                                            </div>
                                                            <div class="col-12 col-md-6 pl-lg-3 pl-xl-5">
                                                                  <div class="txt-wrp">
                                                                        <div class="d-none d-lg-block">
                                                                              <h2 class="mb-15 font-weight-normal">{title}</h2>
                                                                              <p class="mb-3 large">{subTitle}</p>
                                                                        </div>
                                                                        {text && <p dangerouslySetInnerHTML={{ __html: text.text }}></p>}
                                                                        <a href="#" class="btn btn-primary">Request Consultation</a>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                </div>
                                          </section>
                                    }
                                    {page === 'services' && className === 'media-bg' &&
                                          <section class="serve-blk py-4 py-md-6 py-lg-8 py-xl-10 media-bg active">
                                                <div class="bg"></div>
                                                <div class="container">
                                                      <div class="txt-wrp d-block d-lg-none">
                                                            <h2 class="mb-15 font-weight-normal">{title}</h2>
                                                            <p class="mb-3">{subTitle}</p>
                                                      </div>
                                                      <div class="row align-items-center">
                                                            <div class="col-12 col-md-6 order-md-2">
                                                                  <div class="result-img text-center">
                                                                        {image && <Img fluid={sources(image)} alt="" className="mw-100 shadow-img" />}
                                                                  </div>
                                                            </div>
                                                            <div class="col-12 col-md-6 pr-lg-3 pr-xl-5 order-md-1">
                                                                  <div class="txt-wrp">
                                                                        <div class="d-none d-lg-block">
                                                                              <h2 class="mb-15 font-weight-normal">{title}</h2>
                                                                              <p class="mb-3 large">{subTitle}</p>
                                                                        </div>
                                                                        {text && <p dangerouslySetInnerHTML={{ __html: text.text }}></p>}
                                                                        <a href="https://aavya.kinsta.cloud/request-consultation/" class="btn btn-primary">Request Consultation</a>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                </div>
                                          </section>
                                    }
                                    {page === 'services' && className === 'creative-bg' &&
                                          <section class="serve-blk py-4 py-md-6 py-lg-8 py-xl-10 creative-bg active">
                                                <div class="bg"></div>
                                                <div class="container">
                                                      <div class="txt-wrp d-block d-lg-none">
                                                            <h2 class="mb-15 font-weight-normal">{title}</h2>
                                                            <p class="mb-3">{subTitle}</p>
                                                      </div>
                                                      <div class="row align-items-center">
                                                            <div class="col-12 col-md-6">
                                                                  <div class="result-img text-center">
                                                                        {image && <Img fluid={sources(image)} alt="" className="mw-100 shadow-img" />}
                                                                  </div>
                                                            </div>
                                                            <div class="col-12 col-md-6 pl-lg-3 pl-xl-5">
                                                                  <div class="txt-wrp">
                                                                        <div class="d-none d-lg-block">
                                                                              <h2 class="mb-15 font-weight-normal">{title}</h2>
                                                                              <p class="mb-3 large">{subTitle}</p>
                                                                        </div>
                                                                        {text && <p dangerouslySetInnerHTML={{ __html: text.text }}></p>}
                                                                        <a href="https://aavya.kinsta.cloud/request-consultation/" class="btn btn-primary">Request Consultation</a>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                </div>
                                          </section>
                                    }
                                    {page === 'services' && className === 'lifecycle-bg' &&
                                          <section class="serve-blk py-4 py-md-6 py-lg-8 py-xl-10 lifecycle-bg active">
                                                <div class="bg"></div>
                                                <div class="container">
                                                      <div class="txt-wrp d-block d-lg-none">
                                                            <h2 class="mb-15 font-weight-normal">{title}</h2>
                                                            <p class="mb-3">{subTitle}</p>
                                                      </div>
                                                      <div class="row align-items-center">
                                                            <div class="col-12 col-md-6 order-md-2">
                                                                  <div class="result-img text-center">
                                                                        {image && <Img fluid={sources(image)} alt="" className="mw-100 shadow-img" />}
                                                                  </div>
                                                            </div>
                                                            <div class="col-12 col-md-6 pr-lg-3 pr-xl-5 order-md-1">
                                                                  <div class="txt-wrp">
                                                                        <div class="d-none d-lg-block">
                                                                              <h2 class="mb-15 font-weight-normal">{title}</h2>
                                                                              <p class="mb-3 large">{subTitle}</p>
                                                                        </div>
                                                                        {text && <p dangerouslySetInnerHTML={{ __html: text.text }}></p>}
                                                                        <a href="https://aavya.kinsta.cloud/request-consultation/" class="btn btn-primary">Request Consultation</a>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                </div>
                                          </section>
                                    }
                                    {page === 'services' && className === 'cro-bg' &&
                                          <section class="serve-blk py-4 py-md-6 py-lg-8 py-xl-10 cro-bg active" id="tab-5">
                                                <div class="bg"></div>
                                                <div class="container">
                                                      <div class="txt-wrp d-block d-lg-none">
                                                            <h2 class="mb-15 font-weight-normal">{title}</h2>
                                                            <p class="mb-3">{subTitle}</p>
                                                      </div>
                                                      <div class="row align-items-center">
                                                            <div class="col-12 col-md-6">
                                                                  <div class="result-img text-center">
                                                                        {image && <Img fluid={sources(image)} alt="" className="mw-100 shadow-img" />}
                                                                  </div>
                                                            </div>
                                                            <div class="col-12 col-md-6 pl-lg-3 pl-xl-5">
                                                                  <div class="txt-wrp">
                                                                        <div class="d-none d-lg-block">
                                                                              <h2 class="mb-15 font-weight-normal">{title}</h2>
                                                                              <p class="mb-3 large">{subTitle}</p>
                                                                        </div>
                                                                        {text && <p dangerouslySetInnerHTML={{ __html: text.text }}></p>}

                                                                        <a href="https://aavya.kinsta.cloud/request-consultation/" class="btn btn-primary">Request Consultation</a>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                </div>
                                          </section>
                                    }
                                    {page === 'services' && className === 'web-bg' &&
                                          <section class="serve-blk py-4 py-md-6 py-lg-8 py-xl-10 web-bg active" id="tab-6">
                                                <div class="bg"></div>
                                                <div class="container">
                                                      <div class="txt-wrp d-block d-lg-none">
                                                            <h2 class="mb-15 font-weight-normal">{title}</h2>
                                                            <p class="mb-3">{subTitle}</p>
                                                      </div>
                                                      <div class="row align-items-center">
                                                            <div class="col-12 col-md-6 order-md-2">
                                                                  <div class="result-img text-center">
                                                                        {image && <Img fluid={sources(image)} alt="" className="mw-100 shadow-img" />}
                                                                  </div>
                                                            </div>
                                                            <div class="col-12 col-md-6 pr-lg-3 pr-xl-5 order-md-1">
                                                                  <div class="txt-wrp">
                                                                        <div class="d-none d-lg-block">
                                                                              <h2 class="mb-15 font-weight-normal">{title}</h2>
                                                                              <p class="mb-3 large">{subTitle}</p>
                                                                        </div>
                                                                        {text && <p dangerouslySetInnerHTML={{ __html: text.text }}></p>}
                                                                        <a href="https://aavya.kinsta.cloud/request-consultation/" class="btn btn-primary">Request Consultation</a>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                </div>
                                          </section>
                                    }
                                    {['cro', 'lifestyle'].includes(page) && (
                                          <div class="story-carousel mb-3 mb-md-5 mb-lg-7">
                                                <SliderComponent settingsAsProp={settingsSlider}>
                                                      {images && images.map(
                                                            ({ fluid }, idx) => (
                                                                  <>
                                                                        <div class="slide-img">
                                                                              <Img fluid={fluid} alt="" class="w-100 mob-img" />
                                                                        </div>
                                                                        {data && (<p class="mb-3 large">{data.data[idx].name}</p>)}
                                                                  </>
                                                            ))}
                                                </SliderComponent>
                                          </div>)}
                              </TabPanel>
                        ))}
            </Tabs>);
};

export default TabsComponent;