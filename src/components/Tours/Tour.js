import React from "react";
import Image from "gatsby-image";
import styles from "../../styles/tour.module.css";
import { FaMap } from "react-icons/fa";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

const getDefaultImg = graphql`
  query {
    file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Tour = ({ tour }) => {
  const data = useStaticQuery(getDefaultImg);
  const defaultImg = data.file.childImageSharp.fluid;
  const { name, price, country, days, slug, images } = tour;
  const mainImage = images ? images[0].fluid : defaultImg;

  return (
    <article className={styles.tour}>
      <div className={styles.imgContainer}>
        <Image fluid={mainImage} className={styles.img} alt={name} />
        <AniLink fade className={styles.link} to={`/tours/${slug}`}>
          Details
        </AniLink>
      </div>
      <div className={styles.footer}>
        <h3>{name}</h3>
        <div className={styles.info}>
          <h4 className={styles.country}>
            <FaMap className={styles.icon}></FaMap>
            {country}
          </h4>
          <div className={styles.details}>
            <h6>{days} days</h6>
            <h6>from ${price}</h6>
          </div>
        </div>
      </div>
    </article>
  );
};

Tour.propTypes = {
  tour: PropTypes.shape({
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    days: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
  }),
};

export default Tour;
