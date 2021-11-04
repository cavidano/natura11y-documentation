import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from 'react-helmet';

import "../../natura11y"
import "../icons/natura11y-icons.css"

import Header from "./Header"
import Footer from "./Footer"

function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query SiteInfo {
      site {
        siteMetadata {
          title
          version
        }
      }
    }
  `);

  const title = data.site.siteMetadata.title
  const version = data.site.siteMetadata.version

  return (
    <div className="Layout">
      <Helmet>
        <title>{title}</title>
        <link rel="stylesheet" href="/prism.css" rel="stylesheet" />
      </Helmet>
      <Header version={version} />

      <div className="content">{children}</div>

      <Footer version={version} title={title} />
    </div>
  )
}

export default Layout
