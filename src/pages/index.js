import React from "react"
import { graphql, useStaticQuery } from 'gatsby';
import { Slider, sections } from '../utils/home';
import Layout from "../components/layout";

const gettingHomeJSX = ({
  allContentfulSections,
  allContentfulCaseStudies,
  allContentfulPartners,
  allContentfulTestimonials,
  allContentfulTabs
}) => {
  const homeJSX = allContentfulSections.edges.map(({ node }) => {
    const nodeToSend = {
      ...node,
      caseStudies: allContentfulCaseStudies.nodes,
      parners: allContentfulPartners.nodes,
      testimonials: allContentfulTestimonials.nodes,
      tabs: allContentfulTabs,
    };

    const fxnNode = node.cssClass ? sections[node.cssClass] : sections['default'];
    return fxnNode ? fxnNode(nodeToSend) : ('<></>');
  });

  return homeJSX;
};

const IndexPage = () => {
  const data = useStaticQuery(graphql`{
  allContentfulSections(filter: {page: {eq: "Home"}}, sort: {fields: order}) {
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
        image{
          fluid(quality: 100){
            ...GatsbyContentfulFluid_tracedSVG
          }
          fixed(quality: 100){
            ...GatsbyContentfulFixed_withWebp_noBase64
          }
          file{
            url
          }
        }
        images{
          fluid(quality: 100){
            ...GatsbyContentfulFluid_tracedSVG
          }
          file{
            url
          }
        }
      }
    }
  }
  allContentfulTabs(filter: {page: {eq: "Home"}}, sort: {fields: order}) {
    nodes {
      tab
      title
      subTitle
      text {
        text
      }
      page
      image {
        fluid(quality: 100){
            ...GatsbyContentfulFluid_tracedSVG
          }
      }
      logo {
        file {
          url
        }
      }
    }
  }
  allContentfulSlider(filter: {page: {eq: "Home"}}) {
    edges {
      node {
        id
        actionTitle
        page
        subtitle
        title
        urlAction
        image{
          fluid(quality: 100){
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
  }
   allContentfulSlider(filter: {page: {eq: "Home"}}) {
    edges {
      node {
        id
        actionTitle
        page
        subtitle
        title
        urlAction
      }
    }
  }

  allContentfulCaseStudies (sort: {fields: order}) {
    nodes {
      name
      description
      logo {
        title
        file{
          url
        }
      }
      contentImage{
        fluid(quality: 100){
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  }

  allContentfulPartners {
    nodes {
      contentful_id
      logo {
        file{
          url
        }
      }
      title
    }
  }

  allContentfulTestimonials {
    nodes {
      author
      authorImage {
        file {
          url
        }
      }
      authorSubtitle
      description {
        description
      }
    }
  }

  }`);

  const slider = data ? Slider(data.allContentfulSlider.edges[0].node) : '';
  const homeJSX = data && gettingHomeJSX(data);
  return (
    <Layout>
      {slider}
      {homeJSX}
    </Layout>
  )
};

export default IndexPage;
