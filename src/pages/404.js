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

        <Header />

        <section className="display-flex flex-grow-1 justify-content-center align-items-center">

          <h1 className="screen-reader-only">
            Page not found
          </h1>

          <div className="text-align-center">

            <span className="display-block banner-headline margin-bottom-3" aria-hidden="true">
              (\&nbsp;&nbsp;/)<br />
              (&nbsp;&nbsp;'x'&nbsp;&nbsp;)<br />
              c(")(")<span style={{'opacity': '0'}}>c</span>
            </span>

            <p>
              <strong>Poor wee bunny!</strong>
              <span className='display-block'>You've hopped onto a page that doesn't exist.</span>
            </p>

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