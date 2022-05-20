import * as React from "react"
import PropTypes from "prop-types"
import "../styles/global.scss"

import Navbar from "./Navbar"
import Icons from "./Icons"
import Helmet from "react-helmet"

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <section id="icons">
                <Icons />
            </section>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}
