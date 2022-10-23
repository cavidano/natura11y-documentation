import React, { Fragment } from 'react';

import { Link } from 'gatsby';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Seo from '../components/Seo';

const NotFound = () => {
  return (
    <Fragment>

      <Seo title="Page not found" />

      <div className="flex-column min-height-100vh">

        <Header
          utilities='box-shadow-1 z-index-2500'
        />

        <section className="display-flex flex-grow-1 justify-content-center align-items-center">

          <h1 className="screen-reader-only">
            Page not found
          </h1>

          <div className="container narrow text-align-center">

            <p className="h2 code-font margin-bottom-3" aria-hidden="true">
              (\_/)<br />
              ('x')<br />
              c(")(")<span style={{'opacity': '0'}}>c</span>
            </p>

            <p className='h6 display-block'>Poor wee bunny!</p>
            <p>You've hopped on to a page that doesn't exist.</p>

            <p>
              <Link to="/">Back to Home</Link>
            </p> 

          </div>

        </section>
              
        <Footer />

      </div>

    </Fragment>
  )
}

export default NotFound;