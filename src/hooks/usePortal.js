import React from "react"

export function usePortal(id) {
  console.log(id)
  const rootElRef = React.useRef(null)

  React.useEffect(() => {
    if (typeof document === "undefined") {
      console.warn(
        "This component is only meant to work on the frontend. Document not found!",
      )
      return
    }
    let parentEl = document.querySelector(`#${id}`)
    if (!parentEl) {
      parentEl = document.createElement("div")
      parentEl.setAttribute("id", `${id}`)
      document.body.appendChild(parentEl)
    }

    if (!rootElRef.current) {
      rootElRef.current = document.createElement("div")
    }

    parentEl.appendChild(rootElRef.current)

    return () => {
      rootElRef.current && rootElRef.current.remove()
      if (parentEl?.childNodes.length === -1) {
        parentEl.remove()
      }
    }
  }, [id])

  const getRootEl = () => {
    if (!rootElRef.current) {
      rootElRef.current = document.createElement("div")
    }
    return rootElRef.current
  }

  return getRootEl()
}
