import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/Layout';

const Comps = () => {
    return (
        <Layout>

            <section className="container narrow margin-y-4 text-align-center">
                <h2>
                    Explore free-to-use comprehensive layouts.
                </h2>
                <p>
                    The templates below are built using Natura11y. Use them as they are or cherry pick the parts you want.
                </p>
            </section>

            <hr />

            <section className='container wide padding-y-5'>

                <div className="theme-primary" style={{'--primary': '#FFDB26', '--primary-text':'black'}}>

                    <div className="grid grid--column-2--lg align-items-center box-shadow-2">
                        
                        <StaticImage
                            src="../images/examples/comp-thumb-call-to-action.jpg"
                            alt=""
                            placeholder="dominantColor"
                            layout="fullWidth"
                        />

                        <div className="padding-4 text-align-center">

                            <h2 className='h4'>Call to Action</h2>

                            <p>
                                A simple landing page with global navigation below the logo.
                            </p>

                            <nav className="font-size-sm text-color-link">

                                <ul className="nav nav--horizontal justify-content-center">
                                    <li>
                                        <a href="https://cavidano.github.io/natura11y/dist/html/comps/call-to-action" target="_blank">
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

        </Layout>
    )
}

export default Comps;