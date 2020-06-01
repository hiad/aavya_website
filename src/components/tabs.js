import React, { useState } from "react"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Img from "gatsby-image";

const TabsComponent = ({
      tabs
}) => {
      const [tab, setTab] = useState(0);
      const [open, setOpen] = useState(false);

      const handleClick = (tabIndex) => {
            setTab(tabIndex);
      };

      return (
            <Tabs selectedIndex={tab} onSelect={tabIndex => {
                  handleClick(tabIndex);
                  setOpen(!open);
            }}>
                  <TabList className={open ? 'mb-3 mb-lg-4 open' : 'mb-3 mb-lg-4'}>
                        {tabs.nodes.map(({
                              tab,
                              logo
                        }) => (
                                    <Tab>
                                          <img src={logo.file.url} alt="" />
                                          <span dangerouslySetInnerHTML={{ __html: tab }}></span>
                                    </Tab>
                              ))}
                  </TabList>

                  {tabs.nodes.map(({
                        title,
                        text,
                        image,
                  }) => (
                              <TabPanel>
                                    <div className="row align-items-center">
                                          <div className="col-12 col-md-5 col-lg-4 order-md-2">
                                                <div className="txt-wrp">
                                                      {title && <h2 className="mb-15 font-weight-normal">{title}</h2>}
                                                      {text && <p className="mb-0 mb-md-3">{text.text}</p>}
                                                </div>
                                          </div>
                                          <div className="col-12 col-md-7 col-lg-8 order-md-1">
                                                <div className="result-img text-center">
                                                      {image &&  <Img fluid={image.fluid} alt="" className="mw-100" />}
                                                </div>
                                          </div>

                                    </div>
                              </TabPanel>
                        ))}
            </Tabs>);
};

export default TabsComponent;