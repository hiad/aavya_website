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
          fluid(maxWidth: 2500, quality: 100){
            ...GatsbyContentfulFixed_withWebp_noBase64
          }
          fixed{
            ...GatsbyContentfulFixed_withWebp
          }
          file{
            url
          }
        }
        images{
          fluid(maxWidth: 2500, quality: 100){
            ...GatsbyContentfulFixed_withWebp_noBase64
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
        fluid(maxWidth: 2500, quality: 100){
            ...GatsbyContentfulFixed_withWebp_noBase64
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
          fluid(maxWidth: 2500, quality: 100){
            ...GatsbyContentfulFixed_withWebp_noBase64
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
        fluid(maxWidth: 2500, quality: 100){
          ...GatsbyContentfulFixed_withWebp_noBase64
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
