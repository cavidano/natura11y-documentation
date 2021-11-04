import React from "react"
import { Link } from "gatsby"

const DocSidebar = ({ pages }) => {

  // console.log("Page Data", pages);

  return (
    <nav className="position-sticky-top collapse display-block--lg">

      <div className="container narrow margin-y-3 font-size-md">
    
        <ul className="nav font-size-md">
          {pages
          .filter(page => page.frontmatter.category === 'introduction')
          .map(page => (
            <li key={page.id}>
              <Link to={`/docs/${page.slug}`}>
                {page.frontmatter.title}
              </Link>
            </li>
          ))}
        </ul>

        <hr class="margin-y-2 margin-x-n3--lg" />
        
        <ul className="nav font-size-md">
          {pages
          .filter(page => page.frontmatter.category === 'a-z')
          .map(page => (
            <li key={page.id}>
              <Link to={`/docs/${page.slug}`}>
                {page.frontmatter.title}
              </Link>
            </li>
          ))}
        </ul>

      </div>
    </nav>
  )
}

export default DocSidebar;