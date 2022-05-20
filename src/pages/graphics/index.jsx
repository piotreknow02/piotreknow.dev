import React from "react"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import * as styles from "../../styles/Graphics.module.scss"

export default function Graphics() {
    return (
        <Layout>
            <Seo title="Graphics" />
            <div className={styles.graphics}>
                <h1>Graphics</h1>
            </div>
        </Layout>
    )
}
