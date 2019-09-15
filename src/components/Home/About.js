import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";
import Title from "../Title";
import styles from "../../styles/about.module.css";

const getImage = graphql`
  query AboutImage {
    aboutImg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

const About = () => {
  const { aboutImg } = useStaticQuery(getImage);
  return (
    <section className={styles.about}>
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <Image
              fluid={aboutImg.childImageSharp.fluid}
              alt="awesome landscape"
            />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>Explore the difference</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. nulla
            doloribus enim necessitatibus?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. nulla
            doloribus enim necessitatibus?
          </p>
          <button type="button" className="btn-primary">
            Read More
          </button>
        </article>
      </div>
    </section>
  );
};

export default About;
