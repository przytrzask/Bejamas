/** @jsx jsx */
import React from "react"
import { motion } from "framer-motion"
import { jsx } from "theme-ui"

import { Portal } from "../Portal/Portal"

const initialValues = {
  opacity: 0,
}

export function Dropdown({ children, onOutClick }) {
  const ref = React.useRef(null)

  const handleOutClick = React.useCallback(() => {
    if (
      ref &&
      ref.current &&
      event.target instanceof Node &&
      !ref.current.contains(event.target)
    ) {
      return onOutClick()
    }
  }, [onOutClick])

  React.useEffect(() => {
    document.addEventListener("click", handleOutClick)
    return () => document.removeEventListener("click", handleOutClick)
  }, [handleOutClick])

  return (
    <Portal id="portal">
      <div sx={backdropStyles} />
      <motion.div
        ref={ref}
        initial={initialValues}
        animate={{
          opacity: 1,
        }}
        exit={initialValues}
        sx={dropdownStyles}
      >
        {children}
      </motion.div>
    </Portal>
  )
}

const dropdownStyles = {
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  p: 3,
  "z-index": 3,
  borderRadius: 4,
  width: 300,
  height: 300,
  right: 0,
  top: 70,
  bg: "primary",
  border: "2px solid white",
}

const backdropStyles = {
  backdropFilter: "blur(3px)",
  position: "fixed",
  "z-index": 2,
  top: 50,
  left: 0,
  bottom: 0,
  right: 0,
}
