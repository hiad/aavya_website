import React from "react"
import { graphql, useStaticQuery } from 'gatsby';
import { Slider, sections } from '../pagesUtils/services';
import Layout from "../components/layout";

const gettingServicesJSX = ({
      allContentfulSections,
      allContentfulTabs
}) => {

      const servicesJSX = allContentfulSections.edges.map(({ node }) => {
            const nodeToSend = {
                  ...node,
                  tabs: allContentfulTabs,
            };

            const fxnNode = node.cssClass ? sections[node.cssClass] : sections['default'];
            return fxnNode ? fxnNode(nodeToSend) : ('<></>');
      });

      return servicesJSX;
};

const Services = () => {
      const data = useStaticQuery(graphql`{
  allContentfulSections(filter: {page: {eq: "services"}}, sort: {fields: order}) {
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
          fluid{
            ...GatsbyContentfulFluid_withWebp
          }
          fixed{
            ...GatsbyContentfulFixed_withWebp
          }
          file{
            url
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
      }
    }
  }
  allContentfulTabs(filter: {page: {eq: "services"}}, sort: {fields: order}) {
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
        fluid{
            ...GatsbyContentfulFluid_withWebp
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

export default Services;
