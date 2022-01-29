import React, { useEffect } from 'react';

import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/Layout';

const Home = () => {

  const bannerHeight = () => {
    const headerHeight = document.getElementById('global-header').offsetHeight;
    const bannerTarget = document.getElementById('introduction');

    const initBannerHeight = () => {

      const windowHeight = window.innerHeight;

      bannerTarget.style.height = windowHeight - headerHeight + 'px';
    }

    initBannerHeight();
    window.addEventListener('resize', initBannerHeight);
  }

  useEffect(() => {
    bannerHeight();
  }, []);

  return (
    <Layout>

      <section className="backdrop backdrop--fixed theme-dark height-100vh" id="introduction">

        <div className="backdrop__image">
          <StaticImage
            className="opacity-30"
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
                Natura11y is an open source, front-end design system. It's simple to use for green developers and robust for seasoned ones.
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

                    <div className="backdrop backdrop--fixed theme-dark justify-content-end">

                      <div 
                        className="backdrop__image gradient-veneer-bottom"
                        style={{'--gradient-veneer-opacity': '0.8'}}>

                        <StaticImage
                          className="opacity-30"
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
                                Built-in accessibility features and best practices help you be more inclusive with less effort.
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

                      <div 
                        className="backdrop__image gradient-veneer-bottom"
                        style={{'--gradient-veneer-opacity': '0.8'}}>

                        <StaticImage
                          className="opacity-30"
                          src="../images/backdrop-feature-color-system.jpg"
                          alt=""
                          placeholder="dominantColor"
                          layout="fullWidth"
                        />
                        
                      </div>

                      <div className="backdrop__cover">

                          <div className="container narrow margin-y-3">

                              <h3 className="text-shadow--md margin-bottom-3 text-shadow">
                                Dynamic Color System
                              </h3>

                              <p className="text-shadow">
                                Simple utility classes apply sweeping color themes on entire pages and specific elements in a uniform way.
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

                      <div 
                        className="backdrop__image gradient-veneer-bottom"
                        style={{'--gradient-veneer-opacity': '0.8'}}>
                          
                          <StaticImage
                            className="opacity-30"
                            src="../images/backdrop-feature-customizable-cdn.jpg"
                            alt=""
                            placeholder="dominantColor"
                            layout="fullWidth"
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
                                  className="button theme-white box-shadow font-size-md"
                                  to="/docs/customization">
                                    Customization
                                </Link>
                                
                            </div>

                        </div>

                    </div>

                    <div className="backdrop backdrop--fixed theme-dark justify-content-end">

                        <div 
                          className="backdrop__image gradient-veneer-bottom"
                          style={{'--gradient-veneer-opacity': '0.8'}}>
                  
                          <StaticImage
                            className="opacity-40"
                            src="../images/backdrop-feature-rtl.jpg"
                            alt=""
                            placeholder="dominantColor"
                            layout="fullWidth"
                          />
                  
                        </div>

                        <div className="backdrop__cover">

                            <div className="container narrow margin-y-3">

                                <h3 className="text-shadow--md margin-bottom-3 text-shadow">
                                  RTL Support
                                </h3>

                                <p className="text-shadow">
                                  CSS logical properties and mirrored directional icons provide needed support for right-to-left languages.
                                </p>
                                
                                <Link
                                  className="button theme-white box-shadow font-size-md"
                                  to="/docs/rtl">
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
    
    </Layout>
  );
}

export default Home;
