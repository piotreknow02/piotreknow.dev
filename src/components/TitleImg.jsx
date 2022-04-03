import React from "react";
import * as styles from "../styles/TitleImg.module.scss";

export default function TitleImg({ img, title }) {
  return (
    <div class={styles.imgcontainer}>
      <img className={styles.image} src={img} alt={title} />
      <h1 className={styles.text}>{title}</h1>
    </div>
  );
}
