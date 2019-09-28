import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SimpleHero from "../components/SimpleHero";
import styles from "../styles/template.module.css";
import Img from "gatsby-image";
import { FaMoneyBillWave, FaMap } from "react-icons/fa";
import Day from "../components/Day";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import SEO from "../components/SEO";

const TourTemplate = ({ data }) => {
  const {
    name,
    price,
    country,
    days,
    description: { description },
    images,
    start,
    schedule,
  } = data.tour;
  const [mainImage, ...tourImages] = images;

  return (
    <Layout>
      <SEO title={name} />
      <SimpleHero img={mainImage.fluid} />
      <section className={styles.template}>
        <div className={styles.center}>
          <div className={styles.images}>
            {tourImages.map((image, index) => {
              return (
                <Img
                  key={index}
                  fluid={image.fluid}
                  alt="single tour"
                  className={styles.image}
                />
              );
            })}
          </div>
          <h2>{name}</h2>
          <div className={styles.info}>
            <p>
              <FaMoneyBillWave className={styles.icon} />
              starting from ${price}
            </p>
            <p>
              <FaMap className={styles.icon} />
              {country}
            </p>
          </div>
          <h4>starts on: {start}</h4>
          <h4>duration: {days} days</h4>
          <p className={styles.desc}>{description}</p>
          <h2>Daily Schedule</h2>
          <div className={styles.journey}>
            {schedule.map((item, index) => {
              return <Day key={index} day={item.day} info={item.info} />;
            })}
          </div>
          <AniLink fade to="/tours" className="btn-primary">
            Back to tours
          </AniLink>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    tour: contentfulTour(slug: { eq: $slug }) {
      name
      price
      country
      days
      start(formatString: "dddd MMMM Do, YYYY")
      description {
        description
      }
      schedule {
        day
        info
      }
      images {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`;

export default TourTemplate;
