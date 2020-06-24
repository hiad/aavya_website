import React from "react"
import { graphql, useStaticQuery } from 'gatsby';
import { sections } from '../pagesUtils/search';

import Layout from "../components/layout";

const gettingJSX = ({ allContentfulSections, allContentfulSuccessStories }) => {

      const jsx = allContentfulSections.edges.map(({ node }) => {
            const nodeToSend = {
                  ...node,
                  successCases: allContentfulSuccessStories,
            };

            const fxnNode = node.cssClass ? sections[node.cssClass] : sections['default'];
            return fxnNode ? fxnNode(nodeToSend) : ('<></>');
      });

      return jsx;
};

const turnSearchPage = () => {
      const data = useStaticQuery(graphql`{
  allContentfulSections(filter: {page: {eq: "search"}}, sort: {fields: order}) {
    edges {
      node {
        id
        subtitle
        title
        urlAction
        cssClass
        page
        order
        longSubTitle {
          longSubTitle
        }
        subTitle2
        action
        data {
          data {
            value
            name
            start
            end
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
  allContentfulSlider(filter: {page: {eq: "search"}}) {
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
   allContentfulSlider(filter: {page: {eq: "search"}}) {
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

export default turnSearchPage;