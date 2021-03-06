import React, { Fragment } from 'react';

import { Link } from 'gatsby';

import { StaticImage } from 'gatsby-plugin-image';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Seo from '../components/Seo';

const Home = () => {

  return (
    <Fragment>

      <Seo title='Home' />

      <div className="min-height-100vh flex-column">

        <Header />

        <section
          className="flex-grow-1 theme-secondary backdrop backdrop--fixed theme-dark"
          id="skip-header-target"
          style={{
            '--backdrop-fixed-height':'100%'
          }}>
        
          <div className="backdrop__image">

            <StaticImage
              className="opacity-30"
              src="../images/backdrop-introduction.jpg"
              alt="Swarm of Bees"
            />

            <div className="backdrop__image__credit margin-1">
                <p>
                  Photo by&nbsp;
                  <a href="https://unsplash.com/@tup_s" target="_blank">
                    Damien Tupinier
                  </a>&nbsp;
                  on Unsplash
                </p>
            </div>
            
          </div>

          <div className="backdrop__cover">

            <div className="container medium margin-y-4 text-align-center">
                
              <h1 className="banner-headline text-shadow display">
                Be inclusive&#8212;naturally.
              </h1>

              <div className="container narrow margin-y-3">
                  
                <p className="font-size-lg text-shadow">
                  Natura11y is an open source, front-end toolkit. It's easy to use for developers at different skill levels.
                </p>

                <div className="grid narrow grid--column-2--sm gap-3">
                  <Link
                    className="button theme-canvas width-100"
                    to="/docs/get-started/">
                      Get Started
                  </Link>
                  <Link
                    className="button button--outline width-100"
                    to="/comps/">
                      Comps
                  </Link>
                </div>
              </div>
              
            </div>
            
          </div>

        </section>

      </div>

      <section className="theme-dark overflow-hidden text-align-center" id="features">

          <div className="margin-y-5">
          
              <div className="container narrow margin-bottom-4">

                  <h2>
                    It's time to evolve.
                  </h2>

                  <p>
                    With each passing day, designers and developers face increasing expectations. To be successful, we're required to master an ever widening landscape of technologies.
                  </p>

                  <p>
                    Natura11y aims to make life a little easier.
                  </p>

              </div>

              <div className="container wide">

                  <div className="grid grid--column-2--lg gap-border">

                    <div className="backdrop backdrop--fixed align-content-end">

                      <div 
                        className="backdrop__image gradient-veneer-bottom"
                        style={{'--gradient-veneer-opacity': '0.8'}}>

                        <StaticImage
                          className="opacity-60"
                          src="../images/backdrop-feature-accessibility.jpg"
                          alt="Giraffe eating leaves from a tree"
                        />

                      </div>

                      <div className="backdrop__cover">

                          <div className="container narrow margin-y-3">

                              <h3 className="text-shadow--md text-shadow">
                                  Accessibility
                              </h3>

                              <p className="text-shadow">
                                Built-in accessibility features and guidance help you be more accomodating with less effort.
                              </p>
                              
                              <Link
                                className="button theme-canvas box-shadow font-size-md"
                                to="/docs/accessibility/">
                                  What's Included
                              </Link>

                          </div>

                      </div>

                    </div>

                    <div className="backdrop backdrop--fixed align-content-end">

                      <div 
                        className="backdrop__image gradient-veneer-bottom"
                        style={{'--gradient-veneer-opacity': '0.8'}}>

                        <StaticImage
                          className="opacity-60"
                          src="../images/backdrop-feature-color-system.jpg"
                          alt="Colorful bird"
                        />
                        
                      </div>

                      <div className="backdrop__cover">

                          <div className="container narrow margin-y-3">

                              <h3 className="text-shadow--md margin-bottom-3 text-shadow">
                                Dynamic Color System
                              </h3>

                              <p className="text-shadow">
                                Apply sweeping color themes to pages and components. You can also add single colors to specific elements. 
                              </p>
                              
                              <Link
                                className="button theme-canvas box-shadow font-size-md"
                                to="/docs/color/">
                                  Color
                              </Link>
                              
                          </div>

                      </div>

                    </div>

                    <div className="backdrop backdrop--fixed align-content-end">

                      <div 
                        className="backdrop__image gradient-veneer-bottom"
                        style={{'--gradient-veneer-opacity': '0.8'}}>
                          
                          <StaticImage
                            className="opacity-60"
                            src="../images/backdrop-feature-customizable-cdn.jpg"
                            alt="Close-up of a chamealoen"
                          />
                        
                        </div>

                        <div className="backdrop__cover">

                            <div className="container narrow margin-y-3">

                                <h3 className="text-shadow--md margin-bottom-3 text-shadow">
                                    Customizable CDN
                                </h3>

                                <p className="text-shadow">
                                  Content delivered styles use CSS Variables. Redefine styles a number of ways without compiling Sass.
                                </p>
                                
                                <Link
                                  className="button theme-canvas box-shadow font-size-md"
                                  to="/docs/customization/">
                                    Customization
                                </Link>
                                
                            </div>

                        </div>

                    </div>

                    <div className="backdrop backdrop--fixed align-content-end">

                        <div 
                          className="backdrop__image gradient-veneer-bottom"
                          style={{'--gradient-veneer-opacity': '0.8'}}>
                  
                          <StaticImage
                            className="opacity-60"
                            src="../images/backdrop-feature-rtl.jpg"
                            alt="A crab on the beach"
                          />
                  
                        </div>

                        <div className="backdrop__cover">

                            <div className="container narrow margin-y-3">

                                <h3 className="text-shadow--md margin-bottom-3 text-shadow">
                                  RTL Support
                                </h3>

                                <p className="text-shadow">
                                  CSS logical properties and flipped directional icons provide needed support for right-to-left languages.
                                </p>
                                
                                <Link
                                  className="button theme-canvas box-shadow font-size-md"
                                  to="/docs/rtl/">
                                    How it Works
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

      <Footer />

    </Fragment>
  );
}

export default Home;