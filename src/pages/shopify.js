import React from "react"
import { graphql, useStaticQuery } from 'gatsby';
import { sections } from '../utils/shopify';

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

const shopifyPage = () => {
      const data = useStaticQuery(graphql`{
  allContentfulSections(filter: {page: {eq: "shopify"}}, sort: {fields: order}) {
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
          fluid{
            ...GatsbyContentfulFluid_withWebp
          }
          file{
            url
          }
        }
        image{
          fluid{
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  }
  allContentfulSlider(filter: {page: {eq: "shopify"}}) {
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
   allContentfulSlider(filter: {page: {eq: "shopify"}}) {
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
        fluid{
             ...GatsbyContentfulFluid_withWebp 
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

export default shopifyPage;