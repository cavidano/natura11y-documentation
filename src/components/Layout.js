import React, { useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import '../icons/natura11y-icons.css';


import '../../natura11y';

import Accessibility from '../../natura11y/modules/accessibility';
import Accordion from '../../natura11y/modules/accordion';
import Alerts from '../../natura11y/modules/alerts';
import Buttons from '../../natura11y/modules/buttons';
import Collapse from '../../natura11y/modules/collapse';
import Document from '../../natura11y/modules/document';
import Forms from '../../natura11y/modules/forms';
import Modal from '../../natura11y/modules/modal';
import Navigation from '../../natura11y/modules/navigation';
import Tabs from '../../natura11y/modules/tabs';
import Tables from '../../natura11y/modules/tables';

import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {

  useEffect(() => {

    new Accessibility();
    new Accordion();
    new Alerts();
    // new Buttons();
    new Collapse();
    new Document();
    new Forms();
    new Modal();
    new Navigation();
    new Tabs();
    new Tables();

  }, []);

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
