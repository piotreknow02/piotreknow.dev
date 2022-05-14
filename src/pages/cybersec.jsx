import React from "react";
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import * as styles from "../styles/Cybersec.module.scss";

export default function Cybersec() {
  return (
    <Layout>
      <Seo title="Cybersecurity"/>
      <section>
        <script src="https://tryhackme.com/badge/442046"></script>
      </section>
    </Layout>
  );
}
