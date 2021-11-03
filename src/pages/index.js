import React, { useEffect } from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"

const Home = () => {
  const bannerHeight = () => {
    const headerHeight = document.getElementById("global-header").offsetHeight
    const bannerTarget = document.getElementById("introduction")

    const initBannerHeight = () => {
      const windowHeight = window.innerHeight

      bannerTarget.style.height = windowHeight - headerHeight + "px"
    }

    initBannerHeight()
    window.addEventListener("resize", initBannerHeight)
  }

  useEffect(() => {
    bannerHeight()
  }, [])

  return (
    <Layout>
      <section
        className="backdrop backdrop--fixed theme-dark"
        id="introduction"
      >
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
                <a className="button theme-white width-100" href="#1">
                  Get Started
                </a>
                <a
                  className="button button--outline width-100"
                  href="{{ site.url }}/examples"
                >
                  Examples
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Home
