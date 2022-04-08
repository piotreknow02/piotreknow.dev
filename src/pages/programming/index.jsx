import React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/Seo";
import * as styles from "../../styles/programming.module.scss";

export default function Programming() {
  return (
    <Layout>
      <Seo title="Programming" />
      <div className={styles.programming}>
        <h1 className={styles.gradienttext}>Programming</h1>
      </div>
    </Layout>
  );
}
