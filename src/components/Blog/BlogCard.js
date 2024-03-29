import React from "react";
import styles from "../../styles/blog-card.module.css";
import Image from "gatsby-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const BlogCard = ({ blog }) => {
  const { slug, title, images, published } = blog;
  const mainImage = images[0];

  return (
    <article className={styles.blog}>
      <div className={styles.imgContainer}>
        <Image
          fluid={mainImage.fluid}
          className={styles.img}
          alt="single post"
        />
        <AniLink fade className={styles.link} to={`/blog/${slug}`}>
          Read More
        </AniLink>
        <h6 className={styles.date}>{published}</h6>
      </div>
      <div className={styles.footer}>
        <h4>{title}</h4>
      </div>
    </article>
  );
};

export default BlogCard;
