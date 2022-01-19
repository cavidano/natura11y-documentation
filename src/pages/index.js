import React, { useEffect } from 'react';

import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/Layout';

const Home = () => {

  const bannerHeight = () => {
    const headerHeight = document.getElementById('global-header').offsetHeight
    const bannerTarget = document.getElementById('introduction')

    const initBannerHeight = () => {
      const windowHeight = window.innerHeight

      bannerTarget.style.height = windowHeight - headerHeight + "px"
    }

    initBannerHeight()
    window.addEventListener("resize", initBannerHeight)
  }

  useEffect(() => {
    bannerHeight();
  }, [])

  return (
    <Layout>
      <section
        className="backdrop backdrop--fixed theme-dark"
        id="introduction">

        <div className="backdrop__image">
          <StaticImage
            className="opacity-40"
            src="../images/backdrop-introduction.jpg"
            alt="Bees"
            placeholder="dominantColor"
            layout="fullWidth"
          />
        </div>

        <div className="backdrop__cover">

          <div className="container medium margin-y-4 text-align-center">
            
            <h1 className="banner-headline text-align-center text-shadow">
              Be inclusive&#8212;naturally.
            </h1>

            <div className="narrow margin-y-3">
              
              <p className="font-size-lg text-shadow">
                Natura11y is an open-source design system. With it, create
                elegant, accessible websites.
              </p>

              <div className="grid grid--column-2--sm gap-3">
                <Link
                  className="button theme-white width-100"
                  to="/docs/get-started">
                    Get Started
                </Link>
                <Link
                  className="button button--outline width-100"
                  to="/comps">
                    Comps
                </Link>
              </div>
            </div>
          
          </div>
        
        </div>
      
      </section>

      <section className="theme-dark overflow-hidden text-align-center" id="features">

          <div className="margin-y-5">
          
              <div className="container narrow margin-bottom-4">
                  <h2>
                      Evolution demands adaptation.
                  </h2>
                  <p>
                      Natura11y helps you adapt to today's ever-widening landscape of UX tools and processes.
                  </p>
              </div>

              <div className="container wide">

                  <div className="grid grid--column-2--lg gap-border">

                      <div className="backdrop backdrop--fixed theme-dark justify-content-end">

                          <div className="backdrop__image">
                            <StaticImage
                              className="opacity-40"
                              src="../images/backdrop-feature-accessibility.jpg"
                              alt=""
                              placeholder="dominantColor"
                              layout="fullWidth"
                            />
                          </div>

                          <div className="backdrop__cover">

                              <div className="container narrow margin-y-4">

                                  <h3 className="text-shadow--md text-shadow">
                                      Accessibility
                                  </h3>

                                  <p className="text-shadow">
                                      Built-in Accessibility features and best practices for assistive technologies, language translation, and more.
                                  </p>
                                  
                                  <Link
                                    className="button theme-white box-shadow font-size-md"
                                    to="/docs/accessibility">
                                      What's Included
                                  </Link>

                              </div>

                          </div>

                      </div>

                      <div className="backdrop backdrop--fixed theme-dark justify-content-end">

                          <div className="backdrop__image">
                            <StaticImage
                              className="opacity-40"
                              src="../images/backdrop-feature-color-system.jpg"
                              alt=""
                              placeholder="dominantColor"
                              layout="fullWidth"
                            />
                            
                          </div>

                          <div className="backdrop__cover">

                              <div className="container narrow margin-y-4">

                                  <h3 className="text-shadow--md margin-bottom-3 text-shadow">
                                      Dynamic Color System
                                  </h3>

                                  <p className="text-shadow">
                                      Effortlessly apply color wherever you wish while keeping an accessible contrast
                                      ratio throughout your layouts.
                                  </p>
                                  
                                  <Link
                                    className="button theme-white box-shadow font-size-md"
                                    to="/docs/color">
                                      Color
                                  </Link>
                                  

                              </div>

                          </div>

                      </div>

                      <div className="backdrop backdrop--fixed theme-dark justify-content-end">

                          <div className="backdrop__image">
                            <StaticImage
                              className="opacity-40"
                              src="../images/backdrop-feature-customizable-cdn.jpg"
                              alt=""
                              placeholder="dominantColor"
                              layout="fullWidth"
                            />
                          </div>

                          <div className="backdrop__cover">

                              <div className="container narrow margin-y-4">

                                  <h3 className="text-shadow--md margin-bottom-3 text-shadow">
                                      Customizable CDN
                                  </h3>

                                  <p className="text-shadow">
                                      Style declarations use CSS Variables. You can redefine styles without the need for compiling Sass.  
                                  </p>
                                  
                                  <Link
                                    className="button theme-white box-shadow font-size-md"
                                    to="/docs/customization">
                                      Customization
                                  </Link>
                                  

                              </div>

                          </div>

                      </div>

                      <div className="backdrop backdrop--fixed theme-dark justify-content-end">

                          <div className="backdrop__image">
                            <StaticImage
                              className="opacity-40"
                              src="../images/backdrop-feature-beginner-friendly.jpg"
                              alt=""
                              placeholder="dominantColor"
                              layout="fullWidth"
                            />
                          </div>

                          <div className="backdrop__cover">

                              <div className="container narrow margin-y-4">

                                  <h3 className="text-shadow--md margin-bottom-3 text-shadow">
                                      Beginner Friendly
                                  </h3>

                                  <p className="text-shadow">
                                      An unintimidating code base and minimal dependencies make building with Natura11y
                                      ideal for any developer.
                                  </p>
                                  
                                  <Link
                                    className="button theme-white box-shadow font-size-md"
                                    to="/docs/get-started">
                                      Get Started
                                  </Link>

                              </div>

                          </div>

                      </div>

                  </div>

              </div>

              <div className="container narrow margin-y-5">
                  <div className="grid grid--column-2--md gap-3">
                      <a className="button button--has-icon width-100 button--outline"
                        href="https://github.com/cavidano/natura11y" target="_blank">
                          <span className="icon icon-github"></span>
                          <span className="button__text">GitHub</span>
                      </a>  
                      <a className="button button--has-icon width-100 button--outline"
                        href="https://www.npmjs.com/package/natura11y" target="_blank">
                          <span className="icon icon-npm"></span>
                          <span className="button__text">NPM</span>
                      </a>
                  </div>
              </div>

          </div>

      </section>
    
    </Layout>
  );
}

export default Home;
