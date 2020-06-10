import React from "react"
import { graphql, useStaticQuery } from 'gatsby';
import { sections } from '../utils/about';

import Layout from "../components/layout";

const gettingJSX = ({ allContentfulSections, allContentfulCaseStudies }) => {

      const jsx = allContentfulSections.edges.map(({ node }) => {
            const nodeToSend = {
                  ...node,
                  caseStudies: allContentfulCaseStudies.nodes
            };

            const fxnNode = node.cssClass ? sections[node.cssClass] : sections['default'];
            return fxnNode ? fxnNode(nodeToSend) : ('<></>');
      });

      return jsx;
};

const aboutPage = () => {
      const data = useStaticQuery(graphql`{
  allContentfulSections(filter: {page: {eq: "About"}}, sort: {fields: order}) {
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
          fluid(maxWidth: 2500, quality: 100){
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  }
  allContentfulSlider(filter: {page: {eq: "About"}}) {
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
   allContentfulSlider(filter: {page: {eq: "About"}}) {
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

  allContentfulCaseStudies {
    nodes {
      description
      logo {
        title
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

export default aboutPage;
