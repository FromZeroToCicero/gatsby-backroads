import React from "react";
import BlogCard from "./BlogCard";
import Title from "../Title";
import { graphql, useStaticQuery } from "gatsby";
import styles from "../../styles/blog.module.css";

const getPosts = graphql`
  query {
    posts: allContentfulPost(sort: { fields: published, order: DESC }) {
      edges {
        node {
          title
          slug
          published(formatString: "MMMM Do, YYYY")
          id: contentful_id
          images {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;

const BlogList = () => {
  const { posts } = useStaticQuery(getPosts);

  return (
    <section className={styles.blog}>
      <Title title="our" subtitle="blogs" />
      <div className={styles.center}>
        {posts.edges.map(({ node }) => {
          return <BlogCard key={node.id} blog={node} />;
        })}
      </div>
    </section>
  );
};

export default BlogList;
