import ReactDOM from "react-dom"

import { usePortal } from "../../hooks/usePortal"

export function Portal({ id, children }) {
  const target = usePortal("portal")
  return ReactDOM.createPortal(children, target)
}
