import React from "react";
import Layout from "../components/Layout";
import styles from "../styles/error.module.css";
import Banner from "../components/Banner";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import SEO from "../components/SEO";

const ErrorPage = () => {
  return (
    <Layout>
      <SEO title="Error" />
      <header className={styles.error}>
        <Banner title="Oops it's a dead end">
          <AniLink fade to="/" className="btn-white">
            Back to home page
          </AniLink>
        </Banner>
      </header>
    </Layout>
  );
};

export default ErrorPage;
