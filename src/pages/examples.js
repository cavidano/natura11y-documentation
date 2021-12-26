import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/Layout';

const Examples = () => {
    return (
        <Layout>

            <section className="container narrow margin-y-4 text-align-center">
                <h2>
                    Full layouts for another way to get started.
                </h2>
                <p>
                    The templates below are built using Natura11y. Use them as they are or cherry pick the parts you want.
                </p>
            </section>

            <hr />

            <section className='container medium padding-y-5'>

                <div className="grid grid--column-2--lg align-items-center box-shadow-3">
                    
                    <StaticImage
                        src="../images/examples/template-example-01.jpg"
                        alt=""
                        placeholder="dominantColor"
                        layout="fullWidth"
                    />

                    <div className="padding-4 text-align-center">

                        <h5>Landing Page</h5>

                        <p>
                            A simple landing page with global navigation below the logo.
                        </p>

                        <nav className="font-size-sm text-color-link">

                            <ul className="nav nav--horizontal justify-content-center">
                                <li>
                                    <a
                                        className="button button--outline button--has-icon"
                                        href="https://github.com/cavidano/natura11y/blob/main/dist/html/layouts/landing-page.html"
                                        target="_blank">
                                        <span className="icon icon-github button__icon"></span>
                                        <span className="button__text">View on GitHub</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://cavidano.github.io/natura11y/dist/html/layouts/landing-page.html" target="_blank">
                                        Preview in Browser
                                    </a>
                                </li>
                            </ul>

                        </nav>

                    </div>

                </div>

            </section>
            <hr />

            <section className='container medium margin-y-5'>

                <div className="grid grid--column-2--lg align-items-center box-shadow-3">
                    
                    <StaticImage
                        src="../images/examples/template-example-01.jpg"
                        alt=""
                        placeholder="dominantColor"
                        layout="fullWidth"
                    />

                    <div className="padding-4 text-align-center">

                        <h5>Landing Page</h5>

                        <p>
                            A simple landing page with global navigation below the logo.
                        </p>

                        <nav className="font-size-sm text-color-link">

                            <ul className="nav nav--horizontal justify-content-center">
                                <li>
                                    <a
                                        className="button button--outline button--has-icon"
                                        href="https://github.com/cavidano/natura11y/blob/main/dist/html/layouts/landing-page.html"
                                        target="_blank">
                                        <span className="icon icon-github button__icon"></span>
                                        <span className="button__text">View on GitHub</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://cavidano.github.io/natura11y/dist/html/layouts/landing-page.html" target="_blank">
                                        Preview in Browser
                                    </a>
                                </li>
                            </ul>

                        </nav>

                    </div>

                </div>

            </section>

        </Layout>
    )
}

export default Examples;
