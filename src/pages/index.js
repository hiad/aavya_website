import React from "react"
import { Link } from "gatsby"
import Bimg from '../images/Bimg1@2x.png';
import tabBimg from '../images/tab-Bimg1@2x.png'
import mob from '../images/mob-Bimg1@2x.png'

import Layout from "../components/layout";

const IndexPage = () => (
  <Layout>
    <section class="banner home-b">
      <div class="bnr-bg"></div>
      <div class="banner-cap">
        <div class="container">
          <div class="row align-items-xl-center">
            <div class="col-12 col-md-7 col-lg-6">
              <div class="text-center pt-4 pt-xl-3 pt-xxl-6 pb-0 pb-xl-3 pb-xxl-6">
                <h1 class="mb-2 display-1">Growth, Reimagined for the digital age</h1>
                <h5 class="mb-3 max font-weight-normal">With an origin story in all things direct marketing, we bring stable data-driven strategies proven to grow brands.</h5>
                <a href="#" class="btn btn-primary mb-1">Request Consultation</a>
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

    <section class="achieve-sec pt-10 pt-md-8 pt-lg-10 pb-5 pb-md-8 pb-lg-10 mt-3 mt-md-0">
      <div class="bg"></div>
      <div class="container">
        <div class="sec-title mb-4 mb-md-5 mb-lg-6 text-center max mx-auto">
          <h3 class="mb-0">Join the brands that have set their aims high. We work closely with them to see their numbers achieved</h3>
        </div>
        <div class="achieve-logo">
          <div class="row justify-content-center">
            <div class="col-12 col-md-10 col-lg-8">
              <div class="row justify-content-center align-items-center">
                <div class="col-6 col-sm-4 col-xl-3">
                  <div class="logo"><img src="images/brumate-logo.png" alt="" class="d-block mx-auto" /></div>
                </div>
                <div class="col-6 col-sm-4 col-xl-3">
                  <div class="logo"><img src="images/12th-trine-logo.png" alt="" class="d-block mx-auto" /></div>
                </div>
                <div class="col-6 col-sm-4 col-xl-3">
                  <div class="logo"><img src="images/static-nails-logo.png" alt="" class="d-block mx-auto" /></div>
                </div>
                <div class="col-6 col-sm-4 col-xl-3">
                  <div class="logo"><img src="images/top-foxx-logo.png" alt="" class="d-block mx-auto" /></div>
                </div>
                <div class="col-6 col-sm-4 col-xl-3">
                  <div class="logo"><img src="images/Feat-logo.png" alt="" class="d-block mx-auto" /></div>
                </div>
                <div class="col-6 col-sm-4 col-xl-3">
                  <div class="logo"><img src="images/the-home-t-logo.png" alt="" class="d-block mx-auto" /></div>
                </div>
                <div class="col-6 col-sm-4 col-xl-3">
                  <div class="logo"><img src="images/sochatti-logo.png" alt="" class="d-block mx-auto" /></div>
                </div>
                <div class="col-6 col-sm-4 col-xl-3">
                  <div class="logo"><img src="images/Dottie-couture-logo.png" alt="" class="d-block mx-auto" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-12 col-md-6 col-lg-5">
            <div class="txt-wrp mb-3 mb-md-0">
              <h3 class="mb-1 mb-lg-2">We help marketers think big, execute smart, and deliver growth</h3>
              <p class="mb-2 mb-md-3 mb-lg-5">Phasellus finibus enim nulla, quis ornare odio facilisis eu. Suspendisse ornare ante sit amet arcu semper, vel eleifend tortor egestas. Aenean luctus, lorem in hendrerit interdum, leo orci egestas diam, ac euismod massa est et turpis. Etiam auctor lectus vel neque convallis pharetra. Ut turpis eros, aliquet non ante id, interdum placerat erat. Curabitur sit amet eros vel orci venenatis hendrerit.</p>
              <a href="#" class="btn btn-primary">Request Consultation</a>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-7">
            <div class="d-block d-lg-flex align-items-center">
              <div class="achieve-img text-center order-md-2">
                <img src="images/chart1@2x.png" alt="" class="mw-100 shadow-img" />
              </div>
              <div class="txt-col order-md-1">
                <div class="d-flex d-lg-block">
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

    <section class="result-sec pt-4 pt-lg-5 pb-0 pb-md-2">
      <div class="bg"></div>
      <div class="container">
        <div class="sec-title mb-4 text-center max mx-auto">
          <h2 class="mb-50 font-weight-normal">Result Oriented Services</h2>
          <h4 class="mb-0 font-weight-normal">We help you tap into every Media Channel</h4>
        </div>

        <div class="tabs">
          <nav role='navigation' class="transformer-tabs mb-3 mb-lg-4">
            <ul>
              <li>
                <a href="#tab-1" class="active">
                  <img src="images/Strategy.svg" alt="" />
                  <span>Strategy</span>
                </a>
              </li>
              <li>
                <a href="#tab-2">
                  <img src="images/Media-Buying.svg" alt="" />
                  <span>Media <br />Buying</span>
                </a>
              </li>
              <li>
                <a href="#tab-3">
                  <img src="images/Content.svg" alt="" />
                  <span>Content</span>
                </a>
              </li>
              <li>
                <a href="#tab-4">
                  <img src="images/CRO.svg" alt="" />
                  <span>CRO</span>
                </a>
              </li>
              <li>
                <a href="#tab-5">
                  <img src="images/Creative.svg" alt="" />
                  <span>Creative</span>
                </a>
              </li>
              <li>
                <a href="#tab-6">
                  <img src="images/Lifecycle-Marketing.svg" alt="" />
                  <span>Lifecycle <br />Marketing</span>
                </a>
              </li>
            </ul>
          </nav>
          <div id="tab-1" class="active">
            <div class="row align-items-center">
              <div class="col-12 col-md-5 col-lg-4 order-md-2">
                <div class="txt-wrp">
                  <h2 class="mb-15 font-weight-normal">Analyzed and Insight based Strategy for your business</h2>
                  <p class="mb-0 mb-md-3">Phasellus finibus enim nulla, quis ornare odio facilisis eu. Suspendisse ornare ante sit amet arcu semper, vel eleifend tortor egestas. Aenean luctus, lorem in hendrerit interdum, leo orci egestas diam, ac euismod massa est et turpis. Etiam auctor lectus vel neque convallis pharetra. Ut turpis eros, aliquet non ante id, interdum placerat erat. Curabitur sit amet eros vel orci venenatis hendrerit.</p>
                </div>
              </div>
              <div class="col-12 col-md-7 col-lg-8 order-md-1">
                <div class="result-img text-center">
                  <img src="images/analysed1@2x.png" alt="" class="mw-100 d-none d-lg-inline-block" />
                  <img src="images/analysed2@2x.png" alt="" class="mw-100 d-inline-block d-lg-none" />
                </div>
              </div>

            </div>
          </div>
          <div id="tab-2">
            <h2>Tab 2</h2>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur est natus esse minima nihil quidem tenetur alias pariatur. Obcaecati repudiandae temporibus provident sapiente iure doloribus praesentium voluptates dolores quia eos velit fugit cum ipsam. Deleniti fugiat maxime vel tempore illum esse illo fugit quam recusandae aut aperiam omnis at quaerat!
				</div>
          <div id="tab-3">
            <h2>Tab 3</h2>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores numquam cupiditate aliquam quisquam repellendus fugit eaque asperiores voluptatem ut accusamus soluta corporis in facere quae provident itaque magni eum repellat ducimus dolore. Beatae aperiam accusamus at voluptatem ad sunt mollitia perspiciatis tempora numquam rerum aliquam deserunt illum necessitatibus nisi omnis.
				</div>
          <div id="tab-4">
            <h2>Tab 2</h2>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur est natus esse minima nihil quidem tenetur alias pariatur. Obcaecati repudiandae temporibus provident sapiente iure doloribus praesentium voluptates dolores quia eos velit fugit cum ipsam. Deleniti fugiat maxime vel tempore illum esse illo fugit quam recusandae aut aperiam omnis at quaerat!
				</div>
          <div id="tab-5">
            <h2>Tab 3</h2>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores numquam cupiditate aliquam quisquam repellendus fugit eaque asperiores voluptatem ut accusamus soluta corporis in facere quae provident itaque magni eum repellat ducimus dolore. Beatae aperiam accusamus at voluptatem ad sunt mollitia perspiciatis tempora numquam rerum aliquam deserunt illum necessitatibus nisi omnis.
				</div>
          <div id="tab-6">
            <h2>Tab 2</h2>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur est natus esse minima nihil quidem tenetur alias pariatur. Obcaecati repudiandae temporibus provident sapiente iure doloribus praesentium voluptates dolores quia eos velit fugit cum ipsam. Deleniti fugiat maxime vel tempore illum esse illo fugit quam recusandae aut aperiam omnis at quaerat!
				</div>
        </div>
      </div>
    </section>

    <section class="case-sec pt-5 pt-lg-8 pb-5 pb-lg-8">
      <div class="bg"></div>
      <div class="container">
        <div class="sec-title mb-4 text-center max mx-auto">
          <h2 class="mb-50 font-weight-normal">Our Latest Success Stories</h2>
          <h4 class="mb-0 font-weight-normal">We help you tap into every Media Channel</h4>
        </div>
        <div class="row align-items-center mb-5 mb-xl-0">
          <div class="col-12 col-md-6 order-md-2">
            <div class="txt-wrp text-center text-md-left">
              <div class="log-img mb-15 mb-lg-25"><img src="images/brumate.png" alt="" /></div>
              <p class="mb-0 mb-md-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis risus mi. Ut placerat quam lectus. Curabitur dictum velit non lacus ornare tempor. Nullam quis augue in leo aliquet malesuada sit amet eget eros. Sed laoreet posuere velit sit amet varius. Nulla eget purus non erat fringilla sodales vel a nulla. Cras sit amet tempus risus. Fusce dignissim blandit justo, eget elementum risus tristique a.</p>
              <a href="#" class="btn btn-primary d-none d-md-inline-block">Read Case Study</a>
            </div>
          </div>
          <div class="col-12 col-md-6 order-md-1">
            <div class="case-img text-center">
              <img src="images/img1@2x.png" alt="" class="mw-100 d-none d-lg-inline-block" />
              <img src="images/tab-img1@2x.png" alt="" class="mw-100 d-none d-md-inline-block d-lg-none" />
              <img src="images/mob-img1@2x.png" alt="" class="mw-100 d-block d-md-none mx-auto" />
              <a href="#" class="btn btn-primary d-inline-block d-md-none">Read Case Study</a>
            </div>
          </div>

        </div>
        <div class="row align-items-center">
          <div class="col-12 col-md-5">
            <div class="txt-wrp text-center text-md-left">
              <div class="log-img mb-15 mb-lg-25"><img src="images/12th-trine.png" alt="" /></div>
              <p class="mb-0 mb-md-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis risus mi. Ut placerat quam lectus. Curabitur dictum velit non lacus ornare tempor. Nullam quis augue in leo aliquet malesuada sit amet eget eros. Sed laoreet posuere velit sit amet varius. Nulla eget purus non erat fringilla sodales vel a nulla. Cras sit amet tempus risus. Fusce dignissim blandit justo, eget elementum risus tristique a.</p>
              <a href="#" class="btn btn-primary d-none d-md-inline-block">Read Case Study</a>
            </div>
          </div>
          <div class="col-12 col-md-7">
            <div class="case-img text-center">
              <img src="images/img2@2x.png" alt="" class="mw-100 d-none d-lg-inline-block" />
              <img src="images/tab-img2@2x.png" alt="" class="mw-100 d-none d-md-inline-block d-lg-none" />
              <img src="images/mob-img2@2x.png" alt="" class="mw-100 d-block d-md-none mx-auto" />
              <a href="#" class="btn btn-primary d-inline-block d-md-none">Read Case Study</a>
            </div>
          </div>

        </div>
        <div class="text-center mt-2">
          <a href="#" class="study-link">View All Case Studies</a>
        </div>
      </div>
    </section>

    <section class="serve-sec pt-5 pt-lg-8 pb-3 pb-md-5 pb-lg-8">
      <div class="bg"></div>
      <div class="container">
        <div class="row align-items-center mb-5 mb-xl-2">
          <div class="col-12 col-md-6 order-md-2 pl-md-3 pl-xl-5">
            <div class="txt-wrp text-center text-md-left">
              <h2 class="mb-1 mb-md-2 font-weight-normal">AMake More Money, Use a Tested Digital Service</h2>
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

    <section class="partner-sec pt-5 pt-lg-8 pb-5 pb-lg-8">
      <div class="container">
        <div class="sec-title mb-2 mb-md-0 text-center max mx-auto">
          <h2 class="mb-50 font-weight-normal">Our Partners</h2>
          <h4 class="mb-0 font-weight-normal">We've partnered with critically acclaimed software services that provide the right tools for your business to make a mark</h4>
        </div>
        <div class="row justify-content-center">
          <div class="col-12 col-lg-10">
            <div class="row">
              <div class="col-6 col-md-4 col-lg-3">
                <div class="part-logo"><img src="images/shopify-plus-logo.png" alt="" /></div>
              </div>
              <div class="col-6 col-md-4 col-lg-3">
                <div class="part-logo"><img src="images/klaviyo-logo.png" alt="" /></div>
              </div>
              <div class="col-6 col-md-4 col-lg-3">
                <div class="part-logo"><img src="images/vwo-logo.png" alt="" /></div>
              </div>
              <div class="col-6 col-md-4 col-lg-3">
                <div class="part-logo"><img src="images/g-parner-logo.png" alt="" /></div>
              </div>
              <div class="col-6 col-md-4 col-lg-3">
                <div class="part-logo"><img src="images/insta-logo.png" alt="" /></div>
              </div>
              <div class="col-6 col-md-4 col-lg-3">
                <div class="part-logo"><img src="images/godatafeed-logo.png" alt="" /></div>
              </div>
              <div class="col-6 col-md-4 col-lg-3">
                <div class="part-logo"><img src="images/f-marketing-logo.png" alt="" /></div>
              </div>
              <div class="col-6 col-md-4 col-lg-3">
                <div class="part-logo"><img src="images/looker-logo.png" alt="" /></div>
              </div>
              <div class="col-6 col-md-4 col-lg-3">
                <div class="part-logo"><img src="images/supermetric-logo.png" alt="" /></div>
              </div>
              <div class="col-6 col-md-4 col-lg-3">
                <div class="part-logo"><img src="images/optimizely-logo.png" alt="" /></div>
              </div>
              <div class="col-6 col-md-4 col-lg-3">
                <div class="part-logo"><img src="images/unbounce-logo.png" alt="" /></div>
              </div>
              <div class="col-6 col-md-4 col-lg-3">
                <div class="part-logo"><img src="images/justuno-logo.png" alt="" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="testimonial-sec pt-5 pt-lg-8">
      <div class="bg"></div>
      <div class="container">
        <div class="sec-title mb-3 mb-lg-4 text-center max mx-auto">
          <h2 class="mb-0 font-weight-normal">Don't take our word for it</h2>
        </div>
        <div class="owl-carousel owl-theme">
          <div class="item">
            <div class="testi-blk bg-white px-15 px-md-3 py-2 py-md-3">
              <h2 class="mb-0">"</h2>
              <h6 class="mb-15">In consequat, quam id sodales hendrerit, eros mi molestie leo, nec lacinia risus neque tristique augue. Proin tempus urna vel congue elementum. Vestibulum euismod accumsan dui, ac iaculis sem viverra eu. Donec convallis, elit vitae ornare cursus, libero purus facilisis felis, a volutpat metus tortor bibendum elit. Integer nec mi eleifend</h6>
              <div class="media align-items-center">
                <img src="images/avatar.png" class="mr-15 mr-lg-25" alt="..." />
                  <div class="media-body">
                    <h6 class="m-0">Demi</h6>
                    <p class="mb-0">CEO, 12th Tribe</p>
                  </div>
						</div>
              </div>
            </div>
          </div>
          <div class="impect-sec py-4 py-md-7 py-lg-10">
            <div class="row justify-content-center">
              <div class="col-12 col-lg-10">
                <div class="sec-title mb-3 mb-md-5 text-center max mx-auto">
                  <h2 class="mb-50 font-weight-normal">Take your brand to new heights</h2>
                  <h4 class="mb-0 font-weight-normal">Join brands that are on their way to create an impact.</h4>
                </div>
                <div class="row">
                  <div class="col-4">
                    <div class="media mb-4 mb-lg-5 d-block d-lg-flex">
                      <img src="images/research.svg" class="mb-1 mb-md-15 mr-lg-3" alt="..." />
                      <div class="media-body">
                        <h5 class="mb-0">Competitor Research</h5>
                        <p class="mb-0">Keywords, Bids, Traffics, etc</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="media mb-4 mb-lg-5 d-block d-lg-flex">
                      <img src="images/plan.svg" class="mb-1 mb-md-15 mr-lg-3" alt="..." />
                      <div class="media-body">
                        <h5 class="mb-0">Unique Growth Plan</h5>
                        <p class="mb-0">Keywords, Bids, Traffics, etc</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="media mb-4 mb-lg-5 d-block d-lg-flex">
                      <img src="images/charge.svg" class="mb-1 mb-md-15 mr-lg-3" alt="..." />
                      <div class="media-body">
                        <h5 class="mb-0">What we Charge</h5>
                        <p class="mb-0">Keywords, Bids, Traffics, etc</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="text-center">
                  <a href="#" class="btn btn-primary">Request Consultation</a>
                </div>
              </div>
            </div>
          </div>
        </div>
	  </section>
  </Layout>
)

export default IndexPage;
