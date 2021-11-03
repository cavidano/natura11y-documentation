import React from "react"
import { Link } from "gatsby"

const DocSidebar = ({ pages }) => {

  return (
    <nav className="sticky-top padding-2 font-size-md">
      <ul className="nav">
        {pages.map(page => (
          <li key={page.id}>
            <Link to={"/docs/" + page.slug}>
              {page.frontmatter.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default DocSidebar;