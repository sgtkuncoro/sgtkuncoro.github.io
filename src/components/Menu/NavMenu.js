import React from "react"
import { Link } from "gatsby"

export default function NavMenu({ menus }) {
  return (
    <ul>
      {Array.isArray(menus) &&
        menus.map((menu, idx) => (
          <li key={idx}>
            <Link to={menu.path}> {menu.label}</Link>
          </li>
        ))}
    </ul>
  )
}
