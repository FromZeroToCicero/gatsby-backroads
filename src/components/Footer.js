import React from "react";
import { Link } from "gatsby";
import styles from "../styles/footer.module.css";
import links from "../constants/links";
import socialIcons from "../constants/social-icons";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        {links.map((item, index) => {
          return (
            <Link key={index} to={item.path}>
              {item.text}
            </Link>
          );
        })}
      </div>
      <div className={styles.icons}>
        {socialIcons.map((item, index) => {
          return (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          );
        })}
      </div>
      <div className={styles.copyright}>
        Copyright &copy; Backroads Travel Company {new Date().getFullYear()} All
        Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
