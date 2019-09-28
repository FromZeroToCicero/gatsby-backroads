import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SimpleHero from "../components/SimpleHero";
import Contact from "../components/Contact/Contact";
import SEO from "../components/SEO";

const contact = ({ data }) => {
  return (
    <Layout>
      <SEO title="Contact" />
      <SimpleHero img={data.contactImg.childImageSharp.fluid} />
      <Contact />
    </Layout>
  );
};

export const getImage = graphql`
  query {
    contactImg: file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default contact;
