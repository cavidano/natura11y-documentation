import React, { Fragment } from 'react';

import { Link } from 'gatsby';

const DocSidebar = ({ pages }) => {

  const activeStyle = {
    'font-weight': 'var(--body-font-weight-bold)'
  }

  return (
    <Fragment>
      
      <a className="focusable-only" href="#primary-content">Skip Navigation</a>

      <div className="display-none--lg padding-y-2">
          <div className="container narrow">
              <button
                  className="button button--outline button--has-icon--disperse width-100"
                  data-toggle="collapse"
                  data-target-toggle="#docs-sidebar">
                      <span className="button__text">Documentation</span>
                      <span className="icon icon-arrow-down button__icon"></span>
              </button>
          </div>
      </div>
      
      <nav
        className="position-sticky-top collapse display-block--lg"
        id="docs-sidebar"
        style={{'maxHeight': '100vh', 'overflowY': 'auto'}}>

        <div className="container narrow margin-y-3 font-size-md">
      
          <ul className="nav font-size-md">
            <li>
              <Link
                to="/docs/get-started"
                activeStyle={activeStyle}
                partiallyActive={true}>
                Get Started
              </Link>
            </li>
            <li>
              <Link
                to="/docs/customization"
                activeStyle={activeStyle}
                partiallyActive={true}>
                Customization
              </Link>
            </li>
            <li>
              <Link
                to="/docs/accessibility"
                activeStyle={activeStyle}
                partiallyActive={true}>
                Accessibility
              </Link>
            </li>
            <li>
              <Link
                to="/docs/rtl"
                activeStyle={activeStyle}
                partiallyActive={true}>
                RTL
              </Link>
            </li>
          </ul>

          <hr className="margin-y-2 margin-x-n3--lg" />
          
          <ul className="nav font-size-md">
            {pages
            .filter(page => page.frontmatter.category === 'a-z')
            .map(page => (
              <li key={page.id}>
                <Link 
                  to={`/docs/${page.slug}`}
                  activeStyle={activeStyle}
                  partiallyActive={true}>
                    {page.frontmatter.title}
                </Link>
              </li>
            ))}
          </ul>

        </div>
      </nav>
    </Fragment>
  );
}

export default DocSidebar;