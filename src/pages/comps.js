import React, { Fragment } from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Seo from '../components/Seo';


const Comps = () => {
    return (
        <Fragment>
            
            <Seo title="Comps" />
            
            <Header />

            <section className="container narrow margin-y-4 text-align-center">
                <h2>
                    Explore free-to-use comprehensive layouts.
                </h2>
                <p>
                    The templates below are built using Natura11y. Use them as they are or cherry pick the parts you want.
                </p>
            </section>

            <hr />

            <section className="padding-y-5">

                <div className="container wide">
                
                    <div className="grid grid--column-2--lg align-items-center">
                            
                        <StaticImage
                            className="box-shadow-2"
                            src="../images/examples/comp-birds-landing-page.jpg"
                            alt="Thumbnail of Natura11y's Call to Action landing page"
                        />

                        <div className="padding-4 text-align-center">

                            <h2 className='h4'>Landing Page</h2>

                            <p>
                                This simple landing page demonstrates mixed uses of Natura11y's <a href="/docs/backdrops">backdrop</a> and <a href="/docs/grids/#cssGrid">CSS grid</a> components.
                            </p>

                            <nav className="font-size-sm text-color-link">

                                <ul className="nav nav--horizontal justify-content-center">
                                    <li>
                                        <a href="https://cavidano.github.io/natura11y/dist/html/comps/birds-landing-page/" target="_blank">
                                            Preview in Browser
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="button button--outline button--has-icon"
                                            href="https://github.com/cavidano/natura11y/blob/main/dist/html/comps/call-to-action/index.html"
                                            target="_blank">
                                                <span className="icon icon-github button__icon"></span>
                                                <span className="button__text">View on GitHub</span>
                                        </a>
                                    </li>
                                </ul>

                            </nav>

                        </div>

                    </div>

                </div>

            </section>

            <Footer />

        </Fragment>
    )
}

export default Comps;