import React, { Component } from "react";
import styles from "../../styles/items.module.css";
import Tour from "./Tour";
import Title from "../Title";

export default class TourList extends Component {
  state = {
    tours: [],
    sortedTours: [],
  };

  componentDidMount() {
    this.setState({
      tours: this.props.tours.edges,
      sortedTours: this.props.tours.edges,
    });
  }

  render() {
    return (
      <section className={styles.tours}>
        <Title title="our" subtitle="tours" />
        <div className={styles.center}>
          {this.state.tours.map(({ node }) => {
            return <Tour tour={node} key={node.contentful_id} />;
          })}
        </div>
      </section>
    );
  }
}
