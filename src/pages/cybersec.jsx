import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import * as styles from "../styles/Cybersec.module.scss"

export default function Cybersec() {
    return (
        <Layout>
            <Seo title="Cybersecurity" />
            <h1>Cybersecyrity</h1>
            <section>
                <h3>My tryhackme account</h3>
                <a href="https://tryhackme.com/p/piotreknow">
                    <img
                        src="https://tryhackme-badges.s3.amazonaws.com/piotreknow.png"
                        alt="TryHackMe"
                    />
                </a>
            </section>
        </Layout>
    )
}
