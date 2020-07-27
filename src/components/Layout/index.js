/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import PropTypes from "prop-types"

import Header from "../Header"

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <Header />
      <main sx={{ paddingTop: 50 }}>{children}</main>
      <footer />
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
