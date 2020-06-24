import React from "react"
import { graphql, useStaticQuery } from 'gatsby';
import { sections } from '../pagesUtils/cro';

import Layout from "../components/layout";

const gettingJSX = ({ allContentfulSections, allContentfulSuccessStories, allContentfulSlider }) => {

  const jsx = allContentfulSections.edges.map(({ node }) => {
    const nodeToSend = {
      ...node,
      slider: allContentfulSlider.edges,
      successCases: allContentfulSuccessStories,
    };

    const fxnNode = node.cssClass ? sections[node.cssClass] : sections['default'];
    return fxnNode ? fxnNode(nodeToSend) : ('<></>');
  });

  return jsx;
};

const croPage = () => {
  const data = useStaticQuery(graphql`{
  allContentfulSections(filter: {page: {eq: "cro"}}, sort: {fields: order}) {
    edges {
      node {
        id
        subtitle
        title
        urlAction
        cssClass
        page
        order
        subTitle2
        action
        data {
          data {
            value
            name
          }
        }
        images{
          fluid(maxWidth: 1700, quality: 100){
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
          mobile: fluid(maxWidth: 768, quality: 100){
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
          tablet: fluid(maxWidth: 1280, quality: 100){
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
          desktop: fluid(maxWidth: 1920, quality: 100){
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
          file{
            url
          }
        }
        image{
          fluid(maxWidth: 1700, quality: 100){
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
          mobile: fluid(maxWidth: 768, quality: 100){
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
          tablet: fluid(maxWidth: 1280, quality: 100){
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
          desktop: fluid(maxWidth: 1920, quality: 100){
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
        }
      }
    }
  }
  allContentfulSlider(filter: {page: {eq: "cro"}}) {
    edges {
      node {
        id
        actionTitle
        page
        title
        urlAction
        longSubTitle{
          longSubTitle
        }
        title
        image{
          fluid(maxWidth: 1700, quality: 100){
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
          mobile: fluid(maxWidth: 768, quality: 100){
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
          tablet: fluid(maxWidth: 1280, quality: 100){
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
          desktop: fluid(maxWidth: 1920, quality: 100){
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
          file{
            url
          }
        }
        logo{
          fluid(maxWidth: 1700, quality: 100){
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
          mobile: fluid(maxWidth: 768, quality: 100){
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
          tablet: fluid(maxWidth: 1280, quality: 100){
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
          desktop: fluid(maxWidth: 1920, quality: 100){
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
          file{
            url
          }
        }
        data {
          data {
            start
            value
            end
          }
        }
      }
    }
  }

  allContentfulSuccessStories(sort: {fields: order}) {
    nodes {
      actionUrl
      action
      description {
        description
      }
      name
      order
      subTitle
      title
      data {
        data {
          name
          number
          end
        }
      }
      image {
        fluid(maxWidth: 2000, quality: 100){
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
        mobile: fluid(maxWidth: 768, quality: 100){
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
          tablet: fluid(maxWidth: 1280, quality: 100){
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
        desktop: fluid(maxWidth: 1920, quality: 100){
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
      }
    }
  }

  }`);

  const jsx = data && gettingJSX(data);
  return (
    <Layout>
      {jsx}
    </Layout>
  )
};

export default croPage;



// <section class="banner inner cro-b">
//       <div class="bnr-bg"></div>
//       <div class="banner-cap">
//             <div class="container">
//                   <div class="row">
//                         <div class="col-12 col-xl-6">
//                               <div class="cap text-center pt-4 pt-md-5 pt-lg-6 pt-xl-8 pb-3 pb-xl-6">
//                                     <h1 class="mb-0 display-2">Conversion Rate Optimization</h1>
//                                     <h4 class="mb-15 mb-lg-25">Promote on social media, smartly</h4>
//                                     <h6 class="mb-0 max font-weight-normal">The first sale is only the beginning.  Customer Lifetime Value is one of the most critical pieces of any business. A full lifecycle strategy - email, chat, and push - is critical to any business.</h6>
//                               </div>
//                         </div>
//                   </div>
//             </div>
//       </div>
//       <div class="bnr-img">
//             <div class="container">
//                   <div class="row align-items-center">
//                         <div class="col-12 col-xl-8 ml-auto">
//                               <div class="img-pos text-center">
//                                     <img src="images/img16@2x.png" alt="" class="mw-100 main d-none d-md-inline-block" />
//                                     <img src="images/mob-img16@2x.png" alt="" class="mw-100 d-inline-block d-md-none" />
//                               </div>
//                         </div>
//                   </div>
//             </div>
//       </div>
// </section>

//       <section class="why-wrp pt-4 pt-md-6 pt-lg-8 pb-1 pb-md-2 pb-lg-3">
//             <div class="container">
//                   <div class="serv-head w-800 d-flex flex-wrap align-items-center mb-4 mb-md-6 mb-lg-8">
                        // <div class="serv-t">
                        //       <h4 class="text-center text-md-right mb-15 mb-md-0">Our Lifecycle Marketing Partners</h4>
                        // </div>
                        // <div class="serv-b d-flex align-items-center three">
                        //       <div class="serv-logo"><img src="images/klaviyo-partners.png" alt="" class="mw-100" /></div>
                        //       <div class="serv-logo"><img src="images/optimizely-logo.png" alt="" class="mw-100" /></div>
                        //       <div class="serv-logo"><img src="images/vwo-logo.png" alt="" class="mw-100" /></div>
                        // </div>
//                   </div>
//                   <div class="sec-title mb-4 mb-md-5 mb-lg-6 text-center">
//                         <h2 class="mb-0">Why Lifecycle Marketing with Aavya</h2>
//                   </div>
//                   <div class="why-sec">
//                         <div class="row justify-content-around">
//                               <div class="col-12 col-xxl-11">
//                                     <div class="row justify-content-around">
//                                           <div class="col-6 col-md-4">
//                                                 <div class="why-blk mb-3 mb-md-4 mb-lg-5">
//                                                       <div class="media mb-md-15 mb-lg-2 align-items-center">
//                                                             <svg class="mr-2 mr-lg-3" xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65">
//                                                                   <rect id="Rectangle_142" data-name="Rectangle 142" width="65" height="65" fill="#e0e0e0" />
//                                                             </svg>
//                                                             <div class="media-body">
//                                                                   <h6 class="mt-0 mb-0">Time Based <br />Automation</h6>
//                                                             </div>
//                                                       </div>
//                                                       <p class="mb-0 d-none d-md-block">Time or single event based email drips are critical, but what about behavioral-based automation? Sell when you sleep, with us.</p>
//                                                 </div>
//                                           </div>
//                                           <div class="col-6 col-md-4">
//                                                 <div class="why-blk mb-3 mb-md-4 mb-lg-5">
//                                                       <div class="media mb-md-15 mb-lg-2 align-items-center">
//                                                             <svg class="mr-2 mr-lg-3" xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65">
//                                                                   <rect id="Rectangle_142" data-name="Rectangle 142" width="65" height="65" fill="#e0e0e0" />
//                                                             </svg>
//                                                             <div class="media-body">
//                                                                   <h6 class="mt-0 mb-0">Next Level <br />Growth</h6>
//                                                             </div>
//                                                       </div>
//                                                       <p class="mb-0 d-none d-md-block">Time or single event based email drips are critical, but what about behavioral-based automation? Sell when you sleep, with us.</p>
//                                                 </div>
//                                           </div>
//                                           <div class="col-6 col-md-4">
//                                                 <div class="why-blk mb-3 mb-md-4 mb-lg-5">
//                                                       <div class="media mb-md-15 mb-lg-2 align-items-center">
//                                                             <svg class="mr-2 mr-lg-3" xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65">
//                                                                   <rect id="Rectangle_142" data-name="Rectangle 142" width="65" height="65" fill="#e0e0e0" />
//                                                             </svg>
//                                                             <div class="media-body">
//                                                                   <h6 class="mt-0 mb-0">Full <br />Heatmapping</h6>
//                                                             </div>
//                                                       </div>
//                                                       <p class="mb-0 d-none d-md-block">Time or single event based email drips are critical, but what about behavioral-based automation? Sell when you sleep, with us.</p>
//                                                 </div>
//                                           </div>
//                                           <div class="col-6 col-md-4">
//                                                 <div class="why-blk mb-3 mb-md-4 mb-lg-5">
//                                                       <div class="media mb-md-15 mb-lg-2 align-items-center">
//                                                             <svg class="mr-2 mr-lg-3" xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65">
//                                                                   <rect id="Rectangle_142" data-name="Rectangle 142" width="65" height="65" fill="#e0e0e0" />
//                                                             </svg>
//                                                             <div class="media-body">
//                                                                   <h6 class="mt-0 mb-0">Repeat <br />Purchases</h6>
//                                                             </div>
//                                                       </div>
//                                                       <p class="mb-0 d-none d-md-block">Time or single event based email drips are critical, but what about behavioral-based automation? Sell when you sleep, with us.</p>
//                                                 </div>
//                                           </div>
//                                           <div class="col-6 col-md-4">
//                                                 <div class="why-blk mb-3 mb-md-4 mb-lg-5">
//                                                       <div class="media mb-md-15 mb-lg-2 align-items-center">
//                                                             <svg class="mr-2 mr-lg-3" xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65">
//                                                                   <rect id="Rectangle_142" data-name="Rectangle 142" width="65" height="65" fill="#e0e0e0" />
//                                                             </svg>
//                                                             <div class="media-body">
//                                                                   <h6 class="mt-0 mb-0">Subscriber <br />Cleanliness</h6>
//                                                             </div>
//                                                       </div>
//                                                       <p class="mb-0 d-none d-md-block">Time or single event based email drips are critical, but what about behavioral-based automation? Sell when you sleep, with us.</p>
//                                                 </div>
//                                           </div>
//                                           <div class="col-6 col-md-4">
//                                                 <div class="why-blk mb-3 mb-md-4 mb-lg-5">
//                                                       <div class="media mb-md-15 mb-lg-2 align-items-center">
//                                                             <svg class="mr-2 mr-lg-3" xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65">
//                                                                   <rect id="Rectangle_142" data-name="Rectangle 142" width="65" height="65" fill="#e0e0e0" />
//                                                             </svg>
//                                                             <div class="media-body">
//                                                                   <h6 class="mt-0 mb-0">Full Funnel <br />Thinking</h6>
//                                                             </div>
//                                                       </div>
//                                                       <p class="mb-0 d-none d-md-block">Time or single event based email drips are critical, but what about behavioral-based automation? Sell when you sleep, with us.</p>
//                                                 </div>
//                                           </div>
//                                     </div>
//                               </div>
//                         </div>
//                   </div>
//             </div>
//       </section>
//       <div class="sec-title mb-2 mb-md-25 mb-lg-3 text-center">
//             <h2 class="mb-0">Meet our Success Stories</h2>
//       </div>
//       <section class="story-sec pt-4 pt-md-6 pt-lg-8">
//             <div class="bg"></div>
//             <div class="container">
//                   <div class="row">
//                         <div class="col-12 col-lg-4 col-xl-5">
//                               <div class="txt-wrp">
//                                     <div class="log-img mb-15 mb-md-2 mb-xl-3"><img src="images/Dottie-couture.png" alt="" class="mw-100" /></div>
//                                     <p class="mb-15 mb-md-2 mb-xl-3 max">Aenean non accumsan ante. Duis et risus accumsan sem tempus porta nec sit amet est. Sed ut euismod quam. Suspendisse potenti. Aliquam fringilla orci tincidunt, ullamcorper erat in, malesuada metus.</p>
//                                     <h3 class="mb-15 mb-md-2 mb-xl-3 text-center text-md-left">Our Results</h3>
//                                     <div class="txt-grid">
//                                           <div class="d-flex flex-wrap">
//                                                 <div class="txt mb-3 mb-lg-2 mb-xl-3">
//                                                       <p class="mb-0">Subscriptions</p>
//                                                       <h2 class="mb-0">125K+</h2>
//                                                       <p class="mb-0 small">in 2019</p>
//                                                 </div>
//                                                 <div class="txt mb-3 mb-lg-2 mb-xl-3">
//                                                       <p class="mb-0">Emails Openend</p>
//                                                       <h2 class="mb-0">125K+</h2>
//                                                       <p class="mb-0 small">in 2019</p>
//                                                 </div>
//                                                 <div class="txt mb-3 mb-lg-2 mb-xl-3">
//                                                       <p class="mb-0">Clicked on</p>
//                                                       <h2 class="mb-0">125K+</h2>
//                                                       <p class="mb-0 small">in 2019</p>
//                                                 </div>
//                                                 <div class="txt mb-3 mb-lg-2 mb-xl-3">
//                                                       <p class="mb-0">Conversions</p>
//                                                       <h2 class="mb-0">125K+</h2>
//                                                       <p class="mb-0 small">in 2019</p>
//                                                 </div>

//                                           </div>
//                                     </div>
//                               </div>
//                         </div>
//                         <div class="col-12 col-lg-8 col-xl-7">
//                               <div class="story-img">
//                                     <img src="images/img17@2x.png" alt="" class="w-100 mob-img" />
//                               </div>
//                         </div>
//                   </div>
//             </div>
//       </section>

//       <section class="story-cont pt-4 pt-md-7 pt-lg-10 mt-10 mt-lg-6">
//             <div class="bg"></div>
//             <div class="container serve-tab">
//                   <div class="sec-title mb-2 text-center max mx-auto">
//                         <h2 class="mb-0 font-weight-normal">Effective Social Media Ads</h2>
//                   </div>
//                   <nav role='navigation' class="transformer-tabs mb-1 mb-lg-2 d-none d-lg-block">
//                         <ul>
//                               <li>
//                                     <a href="#tab-1" class="active">
//                                           <span>Customer Retention</span>
//                                     </a>
//                               </li>
//                               <li>
//                                     <a href="#tab-2">
//                                           <span>Service</span>
//                                     </a>
//                               </li>
//                               <li>
//                                     <a href="#tab-3">
//                                           <span>ECommerce</span>
//                                     </a>
//                               </li>
//                               <li>
//                                     <a href="#tab-4">
//                                           <span>General</span>
//                                     </a>
//                               </li>
//                         </ul>
//                   </nav>
//             </div>
//             <div class="container">

//                   <div class="owl-carousel owl-theme story-carousel mb-3 mb-md-5 mb-lg-7">
//                         <div class="slide-img">
//                               <img src="images/img18@2x.png" alt="" class="w-100 mob-img" />
//                         </div>
//                         <div class="slide-img">
//                               <img src="images/img19@2x.png" alt="" class="w-100 mob-img" />
//                         </div>
//                   </div>
//                   <div class="sec-title mb-3 mb-lg-5 text-center max mx-auto">
//                         <h2 class="mb-0 font-weight-normal">Finding Solutions - That's what we do!</h2>
//                   </div>
//                   <div class="txt-wrp d-block d-md-none text-center">
//                         <h2 class="mb-1 mb-md-2 font-weight-normal">BrüMate</h2>
//                         <p class="mb-1 mb-md-2 mb-lg-3">Duis vestibulum elit vel neque pharetra vulputate. Quisque scelerisque nisi urna. Duis rutrum non risus in imperdiet. Proin molestie accumsan nulla sit amet mattis. Ut vel tristique neque. Praesent purus eros, aliquet sit amet venenatis in, sodales in odio. Curabitur ac ligula et purus cursus vulputate accumsan sit amet erat. Vestibulum ac mauris ut nisl maximus porta eu a libero. In hac habitasse platea dictumst. Proin augue urna, pretium vel mauris sed, lobortis rutrum libero.</p>
//                   </div>
//                   <div class="row align-items-center mb-5">
//                         <div class="col-12 col-md-7 pr-lg-3 pr-xl-5">
//                               <div class="serve-img text-center">
//                                     <img src="images/img20@2x.png" alt="" class="mw-100 d-inline-block" />
//                               </div>
//                         </div>
//                         <div class="col-12 col-md-5">
//                               <div class="txt-wrp text-center text-md-left">
//                                     <div class="txt-wrp d-none d-md-block">
//                                           <h2 class="mb-1 mb-md-2 font-weight-normal">1BrüMate</h2>
//                                           <p class="mb-1 mb-md-2 mb-lg-3">Duis vestibulum elit vel neque pharetra vulputate. Quisque scelerisque nisi urna. Duis rutrum non risus in imperdiet. Proin molestie accumsan nulla sit amet mattis. Ut vel tristique neque. Praesent purus eros, aliquet sit amet venenatis in, sodales in odio. Curabitur ac ligula et purus cursus vulputate accumsan sit amet erat. Vestibulum ac mauris ut nisl maximus porta eu a libero. In hac habitasse platea dictumst. Proin augue urna, pretium vel mauris sed, lobortis rutrum libero.</p>
//                                     </div>
//                                     <div class="d-md-none d-xl-block text-left">
//                                           <h6 class="mb-1 mb-md-2 font-weight-normal">What Changed</h6>
//                                           <div class="media mb-2 mb-lg-3">
//                                                 <svg class="mr-15 mr-lg-3" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35">
//                                                       <rect id="Rectangle_149" data-name="Rectangle 149" width="35" height="35" />
//                                                 </svg>
//                                                 <div class="media-body">
//                                                       <p class="mb-0">Design: <br />Phasellus dignissim, tellus in pellentesque mollis, mauris orci dignissim nisl, id gravida nunc enim quis nibh. Maecenas convallis eros a ante dignissim, vitae elementum metus facilisis. Cras in maximus sem. Praesent libero augue, ornare eget quam sed</p>
//                                                 </div>
//                                           </div>
//                                           <div class="media mb-2 mb-lg-3">
//                                                 <svg class="mr-15 mr-lg-3" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35">
//                                                       <rect id="Rectangle_149" data-name="Rectangle 149" width="35" height="35" />
//                                                 </svg>
//                                                 <div class="media-body">
//                                                       <p class="mb-0">Tool: <br />Phasellus dignissim, tellus in pellentesque mollis, mauris orci dignissim nisl, id gravida nunc enim quis nibh. Maecenas convallis eros a ante dignissim, vitae elementum metus facilisis. Cras in maximus sem. Praesent libero augue, ornare eget quam sed</p>
//                                                 </div>
//                                           </div>
//                                           <div class="media mb-2 mb-lg-3">
//                                                 <svg class="mr-15 mr-lg-3" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35">
//                                                       <rect id="Rectangle_149" data-name="Rectangle 149" width="35" height="35" />
//                                                 </svg>
//                                                 <div class="media-body">
//                                                       <p class="mb-0">Audience Targeting: <br />Phasellus dignissim, tellus in pellentesque mollis, mauris orci dignissim nisl, id gravida nunc enim quis nibh. Maecenas convallis eros a ante dignissim, vitae elementum metus facilisis. Cras in maximus sem. Praesent libero augue, ornare eget quam sed</p>
//                                                 </div>
//                                           </div>
//                                     </div>
//                                     <a href="#" class="btn btn-primary">See Full Case Study</a>
//                               </div>
//                         </div>
//                         <div class="col-12 d-none d-md-block d-xl-none mt-2">
//                               <h6 class="mb-1 mb-md-2 font-weight-normal">What Changed</h6>
//                               <div class="row">
//                                     <div class="col-4">
//                                           <div class="change-blk">
//                                                 <svg class="mb-1" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35">
//                                                       <rect id="Rectangle_149" data-name="Rectangle 149" width="35" height="35" />
//                                                 </svg>
//                                                 <p class="mb-0">Design: <br />Phasellus dignissim, tellus in pellentesque mollis, mauris orci dignissim nisl, id gravida nunc enim quis nibh. Maecenas convallis eros a ante dignissim, vitae elementum metus facilisis. Cras in maximus sem. Praesent libero augue, ornare eget quam sed</p>
//                                           </div>
//                                     </div>
//                                     <div class="col-4">
//                                           <div class="change-blk">
//                                                 <svg class="mb-1" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35">
//                                                       <rect id="Rectangle_149" data-name="Rectangle 149" width="35" height="35" />
//                                                 </svg>
//                                                 <p class="mb-0">Tool: <br />Phasellus dignissim, tellus in pellentesque mollis, mauris orci dignissim nisl, id gravida nunc enim quis nibh. Maecenas convallis eros a ante dignissim, vitae elementum metus facilisis. Cras in maximus sem. Praesent libero augue, ornare eget quam sed</p>
//                                           </div>
//                                     </div>
//                                     <div class="col-4">
//                                           <div class="change-blk">
//                                                 <svg class="mb-1" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35">
//                                                       <rect id="Rectangle_149" data-name="Rectangle 149" width="35" height="35" />
//                                                 </svg>
//                                                 <p class="mb-0">Audience Targeting: <br />Phasellus dignissim, tellus in pellentesque mollis, mauris orci dignissim nisl, id gravida nunc enim quis nibh. Maecenas convallis eros a ante dignissim, vitae elementum metus facilisis. Cras in maximus sem. Praesent libero augue, ornare eget quam sed</p>
//                                           </div>
//                                     </div>
//                               </div>
//                         </div>

//                   </div>
//                   <div class="txt-wrp d-block d-md-none text-center">
//                         <h2 class="mb-1 mb-md-2 font-weight-normal">TopFoxx</h2>
//                         <p class="mb-1 mb-md-2 mb-lg-3">Duis vestibulum elit vel neque pharetra vulputate. Quisque scelerisque nisi urna. Duis rutrum non risus in imperdiet. Proin molestie accumsan nulla sit amet mattis. Ut vel tristique neque. Praesent purus eros, aliquet sit amet venenatis in, sodales in odio. Curabitur ac ligula et purus cursus vulputate accumsan sit amet erat. Vestibulum ac mauris ut nisl maximus porta eu a libero. In hac habitasse platea dictumst. Proin augue urna, pretium vel mauris sed, lobortis rutrum libero.</p>
//                   </div>
//                   <div class="row align-items-center">
//                         <div class="col-12 col-md-7 order-md-2 pl-lg-3 pl-xl-5">
//                               <div class="serve-img text-center">
//                                     <img src="images/img21@2x.png" alt="" class="mw-100 d-inline-block" />
//                               </div>
//                         </div>
//                         <div class="col-12 col-md-5 order-md-1">
//                               <div class="txt-wrp text-center text-md-left">
//                                     <div class="txt-wrp d-none d-md-block">
//                                           <h2 class="mb-1 mb-md-2 font-weight-normal">TopFoxx</h2>
//                                           <p class="mb-1 mb-md-2 mb-lg-3">Duis vestibulum elit vel neque pharetra vulputate. Quisque scelerisque nisi urna. Duis rutrum non risus in imperdiet. Proin molestie accumsan nulla sit amet mattis. Ut vel tristique neque. Praesent purus eros, aliquet sit amet venenatis in, sodales in odio. Curabitur ac ligula et purus cursus vulputate accumsan sit amet erat. Vestibulum ac mauris ut nisl maximus porta eu a libero. In hac habitasse platea dictumst. Proin augue urna, pretium vel mauris sed, lobortis rutrum libero.</p>
//                                     </div>
//                                     <div class="d-md-none d-xl-block text-left">
//                                           <h6 class="mb-1 mb-md-2 font-weight-normal">What Changed</h6>
//                                           <div class="media mb-2 mb-lg-3">
//                                                 <svg class="mr-15 mr-lg-3" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35">
//                                                       <rect id="Rectangle_149" data-name="Rectangle 149" width="35" height="35" />
//                                                 </svg>
//                                                 <div class="media-body">
//                                                       <p class="mb-0">Design: <br />Phasellus dignissim, tellus in pellentesque mollis, mauris orci dignissim nisl, id gravida nunc enim quis nibh. Maecenas convallis eros a ante dignissim, vitae elementum metus facilisis. Cras in maximus sem. Praesent libero augue, ornare eget quam sed</p>
//                                                 </div>
//                                           </div>
//                                           <div class="media mb-2 mb-lg-3">
//                                                 <svg class="mr-15 mr-lg-3" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35">
//                                                       <rect id="Rectangle_149" data-name="Rectangle 149" width="35" height="35" />
//                                                 </svg>
//                                                 <div class="media-body">
//                                                       <p class="mb-0">Tool: <br />Phasellus dignissim, tellus in pellentesque mollis, mauris orci dignissim nisl, id gravida nunc enim quis nibh. Maecenas convallis eros a ante dignissim, vitae elementum metus facilisis. Cras in maximus sem. Praesent libero augue, ornare eget quam sed</p>
//                                                 </div>
//                                           </div>
//                                           <div class="media mb-2 mb-lg-3">
//                                                 <svg class="mr-15 mr-lg-3" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35">
//                                                       <rect id="Rectangle_149" data-name="Rectangle 149" width="35" height="35" />
//                                                 </svg>
//                                                 <div class="media-body">
//                                                       <p class="mb-0">Audience Targeting: <br />Phasellus dignissim, tellus in pellentesque mollis, mauris orci dignissim nisl, id gravida nunc enim quis nibh. Maecenas convallis eros a ante dignissim, vitae elementum metus facilisis. Cras in maximus sem. Praesent libero augue, ornare eget quam sed</p>
//                                                 </div>
//                                           </div>
//                                     </div>
//                                     <a href="#" class="btn btn-primary">See Full Case Study</a>
//                               </div>
//                         </div>
//                         <div class="col-12 d-none d-md-block d-xl-none mt-2 order-md-3">
//                               <h6 class="mb-1 mb-md-2 font-weight-normal">What Changed</h6>
//                               <div class="row">
//                                     <div class="col-4">
//                                           <div class="change-blk">
//                                                 <svg class="mb-1" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35">
//                                                       <rect id="Rectangle_149" data-name="Rectangle 149" width="35" height="35" />
//                                                 </svg>
//                                                 <p class="mb-0">Design: <br />Phasellus dignissim, tellus in pellentesque mollis, mauris orci dignissim nisl, id gravida nunc enim quis nibh. Maecenas convallis eros a ante dignissim, vitae elementum metus facilisis. Cras in maximus sem. Praesent libero augue, ornare eget quam sed</p>
//                                           </div>
//                                     </div>
//                                     <div class="col-4">
//                                           <div class="change-blk">
//                                                 <svg class="mb-1" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35">
//                                                       <rect id="Rectangle_149" data-name="Rectangle 149" width="35" height="35" />
//                                                 </svg>
//                                                 <p class="mb-0">Tool: <br />Phasellus dignissim, tellus in pellentesque mollis, mauris orci dignissim nisl, id gravida nunc enim quis nibh. Maecenas convallis eros a ante dignissim, vitae elementum metus facilisis. Cras in maximus sem. Praesent libero augue, ornare eget quam sed</p>
//                                           </div>
//                                     </div>
//                                     <div class="col-4">
//                                           <div class="change-blk">
//                                                 <svg class="mb-1" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35">
//                                                       <rect id="Rectangle_149" data-name="Rectangle 149" width="35" height="35" />
//                                                 </svg>
//                                                 <p class="mb-0">Audience Targeting: <br />Phasellus dignissim, tellus in pellentesque mollis, mauris orci dignissim nisl, id gravida nunc enim quis nibh. Maecenas convallis eros a ante dignissim, vitae elementum metus facilisis. Cras in maximus sem. Praesent libero augue, ornare eget quam sed</p>
//                                           </div>
//                                     </div>
//                               </div>
//                         </div>

//                   </div>
//             </div>
//       </section>

//       <section class="impect-sec py-4 py-md-7 py-lg-10">
//             <div class="container">
//                   <div class="row justify-content-center">
//                         <div class="col-12 col-lg-10">
//                               <div class="sec-title mb-3 mb-md-5 text-center max mx-auto">
//                                     <h2 class="mb-50 font-weight-normal">Take your brand to new heights</h2>
//                                     <h4 class="mb-0 font-weight-normal">Join brands that are on their way to create an impact.</h4>
//                               </div>
//                               <div class="row">
//                                     <div class="col-4">
//                                           <div class="media mb-4 mb-lg-5 d-block d-lg-flex">
//                                                 <img src="images/research.svg" class="mb-1 mb-md-15 mr-lg-3" alt="..." />
//                                                 <div class="media-body">
//                                                       <h5 class="mb-0">Competitor Research</h5>
//                                                       <p class="mb-0">Keywords, Bids, Traffics, etc</p>
//                                                 </div>
//                                           </div>
//                                     </div>
//                                     <div class="col-4">
//                                           <div class="media mb-4 mb-lg-5 d-block d-lg-flex">
//                                                 <img src="images/plan.svg" class="mb-1 mb-md-15 mr-lg-3" alt="..." />
//                                                 <div class="media-body">
//                                                       <h5 class="mb-0">Unique Growth Plan</h5>
//                                                       <p class="mb-0">Keywords, Bids, Traffics, etc</p>
//                                                 </div>
//                                           </div>
//                                     </div>
//                                     <div class="col-4">
//                                           <div class="media mb-4 mb-lg-5 d-block d-lg-flex">
//                                                 <img src="images/charge.svg" class="mb-1 mb-md-15 mr-lg-3" alt="..." />
//                                                 <div class="media-body">
//                                                       <h5 class="mb-0">What we Charge</h5>
//                                                       <p class="mb-0">Keywords, Bids, Traffics, etc</p>
//                                                 </div>
//                                           </div>
//                                     </div>
//                               </div>
//                               <div class="text-center">
//                                     <a href="#" class="btn btn-primary">Request Consultation</a>
//                               </div>
//                         </div>
//                   </div>
//             </div>
//       </section>