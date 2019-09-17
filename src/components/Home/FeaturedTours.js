import React from "react";
import Tour from "../Tours/Tour";
import { graphql, useStaticQuery } from "gatsby";
import Title from "../Title";
import styles from "../../styles/items.module.css";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const getTours = graphql`
  query {
    featuredTours: allContentfulTour(filter: { featured: { eq: true } }) {
      edges {
        node {
          name
          price
          slug
          country
          contentful_id
          days
          images {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;

const FeaturedTours = () => {
  const res = useStaticQuery(getTours);
  const tours = res.featuredTours.edges;

  return (
    <section className={styles.tours}>
      <Title title="featured" subtitle="tours" />
      <div className={styles.center}>
        {tours.map(({ node }) => {
          return <Tour key={node.contentful_id} tour={node} />;
        })}
      </div>
      <AniLink fade to="/tours" className="btn-primary">
        All Tours
      </AniLink>
    </section>
  );
};

export default FeaturedTours;
