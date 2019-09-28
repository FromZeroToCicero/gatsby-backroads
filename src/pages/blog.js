import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SimpleHero from "../components/SimpleHero";
import BlogList from "../components/Blog/BlogList";
import SEO from "../components/SEO";

const blog = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <SimpleHero img={data.blogImg.childImageSharp.fluid} />
      <BlogList />
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
