import React from "react"
import { graphql, useStaticQuery } from 'gatsby';
import { sections } from '../pagesUtils/caseStudies';
import Layout from "../components/layout";

const gettingServicesJSX = ({
      allContentfulSections,
      allContentfulTabs,
      allContentfulCaseStudies
}) => {

      const servicesJSX = allContentfulSections.edges.map(({ node }) => {
            const nodeToSend = {
                  ...node,
                  caseStudies: allContentfulCaseStudies,
                  tabs: allContentfulTabs,
            };

            const fxnNode = node.cssClass ? sections[node.cssClass] : sections['default'];
            return fxnNode ? fxnNode(nodeToSend) : ('<></>');
      });

      return servicesJSX;
};

const OurCaseStudies = () => {
      const data = useStaticQuery(graphql`{
  allContentfulSections(filter: {page: {eq: "casestudies"}}, sort: {fields: order}) {
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
          fluid(maxWidth: 1920, quality: 100){
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
          fixed{
            ...GatsbyContentfulFixed_withWebp
          }
          file{
            url
          }
        }
        images{
          fluid(maxWidth: 1920, quality: 100){
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
  }

  allContentfulCaseStudies(filter: {page: {eq: "casestudies"}}, sort: {fields: order}) {
    nodes {
      longDescription{
        longDescription
      }
      description
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
      contentImage {
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

  
  allContentfulTabs(filter: {page: {eq: "casestudies"}}, sort: {fields: order}) {
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
      logo {
        file {
          url
        }
      }
    }
  }

  }`);

      const servicesJSX = data && gettingServicesJSX(data);
      return (
            <Layout>
                  {servicesJSX}
            </Layout>
      )
};

export default OurCaseStudies;
