import React, { useState } from "react"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Strategy from '../images/Strategy.svg';
import MediaBuying from '../images/Media-Buying.svg';
import Content from '../images/Content.svg';
import CRO from '../images/CRO.svg';
import Creative from '../images/Creative.svg';
import Lifecycle from '../images/Lifecycle-Marketing.svg';
import analitys from '../images/analysed1@2x.png';
import analitys2 from '../images/analysed2@2x.png';

const TabsComponent = () => {
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
                  <TabList className={open && 'open'}>
                        <Tab>
                              <img src={Strategy} alt="" />
                              <span>Strategy</span>
                        </Tab>
                        <Tab>
                              <img src={MediaBuying} alt="" />
                              <span>Media <br />Buying</span>
                        </Tab>
                        <Tab>
                              <img src={Content} alt="" />
                              <span>Content</span>
                        </Tab>
                        <Tab>
                              <img src={CRO} alt="" />
                              <span>CRO</span>
                        </Tab>
                        <Tab>
                              <img src={Creative} alt="" />
                              <span>Creative</span>
                        </Tab>
                        <Tab>
                              <img src={Lifecycle} alt="" />
                              <span>Lifecycle <br />Marketing</span>
                        </Tab>
                  </TabList>

                  <TabPanel>
                        <div class="row align-items-center">
                              <div class="col-12 col-md-5 col-lg-4 order-md-2">
                                    <div class="txt-wrp">
                                          <h2 class="mb-15 font-weight-normal">Analyzed and Insight based Strategy for your business</h2>
                                          <p class="mb-0 mb-md-3">Phasellus finibus enim nulla, quis ornare odio facilisis eu. Suspendisse ornare ante sit amet arcu semper, vel eleifend tortor egestas. Aenean luctus, lorem in hendrerit interdum, leo orci egestas diam, ac euismod massa est et turpis. Etiam auctor lectus vel neque convallis pharetra. Ut turpis eros, aliquet non ante id, interdum placerat erat. Curabitur sit amet eros vel orci venenatis hendrerit.</p>
                                    </div>
                              </div>
                              <div class="col-12 col-md-7 col-lg-8 order-md-1">
                                    <div class="result-img text-center">
                                          <img src={analitys} alt="" class="mw-100 d-none d-lg-inline-block" />
                                          <img src={analitys2} alt="" class="mw-100 d-inline-block d-lg-none" />
                                    </div>
                              </div>

                        </div>
                  </TabPanel>
                  <TabPanel>
                        <h2>Any content 2</h2>
                  </TabPanel>
                  <TabPanel>
                        <h2>Any content 3</h2>
                  </TabPanel>
                  <TabPanel>
                        <h2>Any content 4</h2>
                  </TabPanel>
                  <TabPanel>
                        <h2>Any content 5</h2>
                  </TabPanel>
                  <TabPanel>
                        <h2>Any content 6</h2>
                  </TabPanel>
            </Tabs>);
};

export default TabsComponent;