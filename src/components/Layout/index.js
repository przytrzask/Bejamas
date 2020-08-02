/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import PropTypes from "prop-types"

import Header from "../Header"

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <Header />
      <main sx={{ paddingTop: 50, position: "relative" }}>
        <div
          id="portal"
          sx={{ variant: "grid.container", ...backdropStyles }}
        />
        {children}
      </main>
      <footer />
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const backdropStyles = {
  pointerEvents: "none",
  position: "fixed",
  "z-index": 1,
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  "& > * ": {
    pointerEvents: "all",
  },
}
