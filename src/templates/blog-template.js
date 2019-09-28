import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import styles from "../styles/single-blog.module.css";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Image from "gatsby-image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import SEO from "../components/SEO";

const blogTemplate = ({ data }) => {
  const {
    title,
    published,
    text: { json },
    images,
  } = data.post;
  const mainImage = images[0];
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        return (
          <div>
            <img
              width="400"
              alt="post"
              src={node.data.target.fields.file["en-US"].url}
            />
          </div>
        );
      },
    },
  };

  return (
    <Layout>
      <SEO title={title} />
      <section className={styles.blog}>
        <div className={styles.center}>
          <h1>{title}</h1>
          <h4>Published at: {published}</h4>
          <Image
            fluid={mainImage.fluid}
            alt="single tour"
            className={styles.image}
          />
          <article className={styles.post}>
            {documentToReactComponents(json, options)}
          </article>
          <AniLink fade to="/blog" className="btn-primary">
            All Posts
          </AniLink>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    post: contentfulPost(slug: { eq: $slug }) {
      title
      published(formatString: "MMMM Do, YYYY")
      text {
        json
      }
      images {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`;

export default blogTemplate;
