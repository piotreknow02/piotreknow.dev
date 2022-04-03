import * as React from "react"
import PropTypes from "prop-types"
import "../styles/global.scss"

import Navbar from "./Navbar"

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}