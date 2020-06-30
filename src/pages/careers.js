import React from "react"
import { graphql, useStaticQuery } from 'gatsby';
import { sections } from '../pagesUtils/careers';

import Layout from "../components/layout";

const gettingJSX = ({ allContentfulSections, allContentfulTabs, allContentfulCaseStudies, allContentfulJobs, allContentfulSlider }) => {

  const jsx = allContentfulSections.edges.map(({ node }) => {
    const nodeToSend = {
      ...node,
      tabs: allContentfulTabs,
      slider: allContentfulSlider.edges,
      caseStudies: allContentfulCaseStudies,
      sections: allContentfulSections,
      jobs: allContentfulJobs,
    };

    const fxnNode = node.cssClass ? sections[node.cssClass] : sections['default'];
    return fxnNode ? fxnNode(nodeToSend) : ('<></>');
  });

  return jsx;
};

const careersPage = () => {
  const data = useStaticQuery(graphql`{
  allContentfulSections(filter: {page: {eq: "careers"}}, sort: {fields: order}) {
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
        longSubTitle{
          longSubTitle
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
  allContentfulSlider(filter: {page: {eq: "careers"}}) {
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
        subtitle
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

  allContentfulTabs(filter: {page: {eq: "careers"}}, sort: {fields: order}) {
    nodes {
      tab
      title
      subTitle
      text {
        text
      }
      page
      className
      image {
          fluid(maxWidth: 1920, quality: 100){
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
          mobile: fluid(maxWidth: 768, quality: 100){
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
          desktop: fluid(maxWidth: 1920, quality: 100){
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
      }
      images {
          fluid(maxWidth: 1920, quality: 100){
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
          mobile: fluid(maxWidth: 768, quality: 100){
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
          desktop: fluid(maxWidth: 1920, quality: 100){
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
      }
      data {
          data {
            name
          }
        }
      logo {
        file {
          url
        }
      }
      images{
        file{
          url
        }
      }
    }
  }
  allContentfulJobs{
    edges {
      node {
        category
        position
      }
    }
  }

  allContentfulCaseStudies(filter: {page: {eq: "careers"}}, sort: {fields: order}) {
    nodes {
      longDescription{
        longDescription
      }
      page
      name
      order
      data {
        title
        data {
          name
          value
        }
      }
      logo {
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
      images {
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
          file{
            url
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

export default careersPage;




// <section class="banner inner carrer-b">
//       <div class="bnr-bg"></div>
//       <div class="">
//             <div class="container">
//                   <div class="row align-items-center">
//                         <div class="col-12 col-mb-12">
//                               <div class="cap text-center pt-4 pb-4">
//                                     <h1 class="mb-1 mb-lg-2 display-2">Aavya Jobs</h1>
//                                     <h6 class="mb-0 max font-weight-normal">Join a group of amazingly skilled problem solvers</h6>
//                               </div>
//                         </div>
//                   </div>
//                   <div class="row align-items-center justify-content-center">
//                         <div class="col-12 col-xl-10">
//                               <div class="img-pos text-center">
//                                     <img src="images/carrer-banner@2x.png" alt="" class="mw-100 main d-inline-block" />
//                               </div>
//                         </div>
//                   </div>
//             </div>
//       </div>
// </section>

//       <section class="search-box pt-3 pt-md-8 pb-0 pb-md-4">
//             <div class="search-box-inner max640 mb-3">
//                   <input type="text" class="form-control" placeholder="Search Job" />
//                   <button class="btn btn-primary font-weight-normal" type="button">Search</button>
//             </div>
//             <div class="search-box-text max640 text-center font-weight-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis risus mi. Ut placerat quam lectus. Curabitur dictum velit non lacus ornare tempor.</div>
//       </section>

//       <section class="why-wrp job-position pt-3 pb-1 pb-md-2 pb-lg-3">
//             <div class="container">
//                   <div class="sec-title text-center">
//                         <h2 class="font-weight-medium">Amazing Positions Just Opened Up</h2>
//                         <h3 class="mb-0 font-weight-medium">See if this is the right job for you</h3>
//                   </div>
//                   <div class="postion-box-wrap row justify-content-center">
//                         <div class="col-md-11">
//                               <div class="row">
//                                     <div class="col-lg-3 col-md-4 col-6">
//                                           <div class="postion-box">
//                                                 <div class="thumb"><img src="images/job1@2x.png" /></div>
//                                                 <div class="desc">
//                                                       <strong>Brand & Creative</strong>
//                                                       <span>4 Positions</span>
//                                                 </div>
//                                           </div>
//                                     </div>
//                                     <div class="col-lg-3 col-md-4 col-6">
//                                           <div class="postion-box">
//                                                 <div class="thumb"><img src="images/job2@2x.png" /></div>
//                                                 <div class="desc">
//                                                       <strong>Development</strong>
//                                                       <span>4 Positions</span>
//                                                 </div>
//                                           </div>
//                                     </div>
//                                     <div class="col-lg-3 col-md-4 col-6">
//                                           <div class="postion-box">
//                                                 <div class="thumb"><img src="images/job3@2x.png" /></div>
//                                                 <div class="desc">
//                                                       <strong>Shopify Development</strong>
//                                                       <span>4 Positions</span>
//                                                 </div>
//                                           </div>
//                                     </div>
//                                     <div class="col-lg-3 col-md-4 col-6">
//                                           <div class="postion-box">
//                                                 <div class="thumb"><img src="images/job4@2x.png" /></div>
//                                                 <div class="desc">
//                                                       <strong>Email Marketing</strong>
//                                                       <span>4 Positions</span>
//                                                 </div>
//                                           </div>
//                                     </div>
//                               </div>
//                         </div>
//                   </div>
//                   <div class="job-img-text">
//                         <div class="job-img"><img src="images/job-img-text@2x.png" /></div>
//                         <div class="job-text">
//                               <p>"Proin ac quam et lectus vestibulum blandit. Nunc maximus nibh at placerat tincidunt. Nam sem lacus, ornare non ante sed, ultricies fringilla massa. Ut congue, elit non tempus elementum, sem risus tincidunt diam, vitae sodales diam ipsum vitae purus."</p>
//                               <span>Usman Ali, CEO</span>
//                         </div>
//                   </div>
//             </div>
//       </section>

//       <div class="fjob-bg">

//             <section class="featured-job pt-5 pb-1 pb-md-2 pb-lg-3">
//                   <div class="container">
//                         <div class="sec-title text-center pb-4">
//                               <h2 class="font-weight-medium mb-0">Featured Jobs</h2>
//                         </div>
//                         <div class="row justify-content-around">
//                               <div class="col-12 col-md-9">
//                                     <div class="fj-wrap">
//                                           <div class="fj-title">
//                                                 <strong>Jobs</strong>
//                                                 <strong>Category</strong>
//                                           </div>
//                                           <div class="fj-box">
//                                                 <strong>Program Manager Customer Experience Improvement</strong>
//                                                 <span>Management</span>
//                                           </div>
//                                           <div class="fj-box">
//                                                 <strong>Program Manager Customer Experience Improvement</strong>
//                                                 <span>Management</span>
//                                           </div>
//                                           <div class="fj-box">
//                                                 <strong>Program Manager Customer Experience Improvement</strong>
//                                                 <span>Management</span>
//                                           </div>
//                                           <div class="fj-box">
//                                                 <strong>Program Manager Customer Experience Improvement</strong>
//                                                 <span>Management</span>
//                                           </div>
//                                     </div>
//                               </div>
//                         </div>
//                   </div>
//             </section>

//             <section class="why-wrp amazon pt-4 pt-md-3 pt-lg-10">
//                   <div class="container">
//                         <div class="sec-title mb-4 mb-md-5 mb-lg-6 text-center">
//                               <h2 class="mb-0 font-weight-medium">Why work with Aavya</h2>
//                         </div>
//                         <div class="why-sec">
//                               <div class="row justify-content-around">
//                                     <div class="col-12 col-xxl-11">
//                                           <div class="row justify-content-around">
//                                                 <div class="col-6 col-md-4">
//                                                       <div class="why-blk mb-3 mb-md-4 mb-lg-5">
//                                                             <div class="media mb-md-15 mb-lg-2 align-items-center">
//                                                                   <svg class="mr-2 mr-lg-3" xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65">
//                                                                         <rect id="Rectangle_142" data-name="Rectangle 142" width="65" height="65" fill="#e0e0e0" />
//                                                                   </svg>
//                                                                   <div class="media-body">
//                                                                         <h6 class="mt-0 mb-0 font-weight-medium">Time Based <br />Automation</h6>
//                                                                   </div>
//                                                             </div>
//                                                             <p class="mb-0 d-none d-md-block">Time or single event based email drips are critical, but what about behavioral-based automation? Sell when you sleep, with us.</p>
//                                                       </div>
//                                                 </div>
//                                                 <div class="col-6 col-md-4">
//                                                       <div class="why-blk mb-3 mb-md-4 mb-lg-5">
//                                                             <div class="media mb-md-15 mb-lg-2 align-items-center">
//                                                                   <svg class="mr-2 mr-lg-3" xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65">
//                                                                         <rect id="Rectangle_142" data-name="Rectangle 142" width="65" height="65" fill="#e0e0e0" />
//                                                                   </svg>
//                                                                   <div class="media-body">
//                                                                         <h6 class="mt-0 mb-0 font-weight-medium">Next Level <br />Growth</h6>
//                                                                   </div>
//                                                             </div>
//                                                             <p class="mb-0 d-none d-md-block">Time or single event based email drips are critical, but what about behavioral-based automation? Sell when you sleep, with us.</p>
//                                                       </div>
//                                                 </div>
//                                                 <div class="col-6 col-md-4">
//                                                       <div class="why-blk mb-3 mb-md-4 mb-lg-5">
//                                                             <div class="media mb-md-15 mb-lg-2 align-items-center">
//                                                                   <svg class="mr-2 mr-lg-3" xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65">
//                                                                         <rect id="Rectangle_142" data-name="Rectangle 142" width="65" height="65" fill="#e0e0e0" />
//                                                                   </svg>
//                                                                   <div class="media-body">
//                                                                         <h6 class="mt-0 mb-0 font-weight-medium">Full <br />Heatmapping</h6>
//                                                                   </div>
//                                                             </div>
//                                                             <p class="mb-0 d-none d-md-block">Time or single event based email drips are critical, but what about behavioral-based automation? Sell when you sleep, with us.</p>
//                                                       </div>
//                                                 </div>
//                                                 <div class="col-6 col-md-4">
//                                                       <div class="why-blk mb-3 mb-md-4 mb-lg-5">
//                                                             <div class="media mb-md-15 mb-lg-2 align-items-center">
//                                                                   <svg class="mr-2 mr-lg-3" xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65">
//                                                                         <rect id="Rectangle_142" data-name="Rectangle 142" width="65" height="65" fill="#e0e0e0" />
//                                                                   </svg>
//                                                                   <div class="media-body">
//                                                                         <h6 class="mt-0 mb-0 font-weight-medium">Time Based <br />Automation</h6>
//                                                                   </div>
//                                                             </div>
//                                                             <p class="mb-0 d-none d-md-block">Time or single event based email drips are critical, but what about behavioral-based automation? Sell when you sleep, with us.</p>
//                                                       </div>
//                                                 </div>
//                                                 <div class="col-6 col-md-4">
//                                                       <div class="why-blk mb-3 mb-md-4 mb-lg-5">
//                                                             <div class="media mb-md-15 mb-lg-2 align-items-center">
//                                                                   <svg class="mr-2 mr-lg-3" xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65">
//                                                                         <rect id="Rectangle_142" data-name="Rectangle 142" width="65" height="65" fill="#e0e0e0" />
//                                                                   </svg>
//                                                                   <div class="media-body">
//                                                                         <h6 class="mt-0 mb-0 font-weight-medium">Next Level <br />Growth</h6>
//                                                                   </div>
//                                                             </div>
//                                                             <p class="mb-0 d-none d-md-block">Time or single event based email drips are critical, but what about behavioral-based automation? Sell when you sleep, with us.</p>
//                                                       </div>
//                                                 </div>
//                                                 <div class="col-6 col-md-4">
//                                                       <div class="why-blk mb-3 mb-md-4 mb-lg-5">
//                                                             <div class="media mb-md-15 mb-lg-2 align-items-center">
//                                                                   <svg class="mr-2 mr-lg-3" xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65">
//                                                                         <rect id="Rectangle_142" data-name="Rectangle 142" width="65" height="65" fill="#e0e0e0" />
//                                                                   </svg>
//                                                                   <div class="media-body">
//                                                                         <h6 class="mt-0 mb-0 font-weight-medium">Full <br />Heatmapping</h6>
//                                                                   </div>
//                                                             </div>
//                                                             <p class="mb-0 d-none d-md-block">Time or single event based email drips are critical, but what about behavioral-based automation? Sell when you sleep, with us.</p>
//                                                       </div>
//                                                 </div>
//                                           </div>
//                                     </div>
//                               </div>
//                         </div>
//                   </div>
//             </section>

//             <section class="impect-sec mt-0 mt-md-3 pt-3 pt-md-5 pb-4 pb-md-7 pb-lg-10">
//                   <div class="container">
//                         <div class="row justify-content-center">
//                               <div class="col-12 col-lg-10">
//                                     <div class="sec-title mb-3 mb-md-5 text-center max mx-auto">
//                                           <h2 class="mb-50 font-weight-normal">Take your brand to new heights</h2>
//                                           <h4 class="mb-0 font-weight-normal">Join brands that are on their way to create an impact.</h4>
//                                     </div>
//                                     <div class="row">
//                                           <div class="col-4">
//                                                 <div class="media mb-4 mb-lg-5 d-block d-lg-flex">
//                                                       <img src="images/research.svg" class="mb-1 mb-md-15 mr-lg-3" alt="..." />
//                                                       <div class="media-body">
//                                                             <h5 class="mb-0">Competitor Research</h5>
//                                                             <p class="mb-0">Keywords, Bids, Traffics, etc</p>
//                                                       </div>
//                                                 </div>
//                                           </div>
//                                           <div class="col-4">
//                                                 <div class="media mb-4 mb-lg-5 d-block d-lg-flex">
//                                                       <img src="images/plan.svg" class="mb-1 mb-md-15 mr-lg-3" alt="..." />
//                                                       <div class="media-body">
//                                                             <h5 class="mb-0">Unique Growth Plan</h5>
//                                                             <p class="mb-0">Keywords, Bids, Traffics, etc</p>
//                                                       </div>
//                                                 </div>
//                                           </div>
//                                           <div class="col-4">
//                                                 <div class="media mb-4 mb-lg-5 d-block d-lg-flex">
//                                                       <img src="images/charge.svg" class="mb-1 mb-md-15 mr-lg-3" alt="..." />
//                                                       <div class="media-body">
//                                                             <h5 class="mb-0">What we Charge</h5>
//                                                             <p class="mb-0">Keywords, Bids, Traffics, etc</p>
//                                                       </div>
//                                                 </div>
//                                           </div>
//                                     </div>
//                                     <div class="text-center">
//                                           <a href="#" class="btn btn-primary">Request Consultation</a>
//                                     </div>
//                               </div>
//                         </div>
//                   </div>
//             </section>
//       </div>