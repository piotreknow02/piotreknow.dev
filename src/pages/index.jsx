import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import * as styles from "../styles/Index.module.scss"

import TitleImg from "../components/TitleImg"
import profile from "../images/my_profile.jpg"

export default function IndexPage() {
    return (
        <Layout>
            <Seo title="Home" />
            <TitleImg img={profile} title="Piotreknow" />
        </Layout>
    )
}
