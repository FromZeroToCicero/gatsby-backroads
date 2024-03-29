import React from "react";
import Layout from "../components/Layout";
import SimpleHero from "../components/SimpleHero";
import Banner from "../components/Banner";
import { graphql } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import About from "../components/Home/About";
import Services from "../components/Home/Services";
import FeaturedTours from "../components/Home/FeaturedTours";
import SEO from "../components/SEO";

export default ({ data }) => (
  <Layout>
    <SEO
      title="Home"
      description="This is a tours site for the passionate of traveling"
    />
    <SimpleHero home="true" img={data.homeImg.childImageSharp.fluid}>
      <Banner
        title="Continue exploring"
        info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, officiis."
      >
        <AniLink fade to="/tours" className="btn-white">
          Explore Tours
        </AniLink>
      </Banner>
    </SimpleHero>
    <About />
    <Services />
    <FeaturedTours />
  </Layout>
);

export const getImage = graphql`
  query {
    homeImg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
