import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SimpleHero from "../components/SimpleHero";

const blog = ({ data }) => {
  return (
    <Layout>
      <SimpleHero img={data.blogImg.childImageSharp.fluid} />
    </Layout>
  );
};

export const getImage = graphql`
  query {
    blogImg: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default blog;
