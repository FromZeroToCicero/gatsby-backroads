import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SimpleHero from "../components/SimpleHero";
import Tours from "../components/Tours/Tours";

const tours = ({ data }) => {
  return (
    <Layout>
      <SimpleHero img={data.toursImg.childImageSharp.fluid} />
      <Tours />
    </Layout>
  );
};

export const getImage = graphql`
  query {
    toursImg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default tours;
