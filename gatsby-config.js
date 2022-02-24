module.exports = {
  siteMetadata: {
    title: "Natura11y Inclusive Framework",
    version: "v0.1.x-alpha",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-remark-images`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: `blurred`,
          quality: 95
        }
      }
    },
    {
      resolve: 'gatsby-transformer-yaml-full',
      options: {
        plugins: [`mdx-yaml-full`]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/data/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `docs`,
        path: `${__dirname}/src/content/docs/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              path: `${__dirname}/src/images/examples/`,
              maxWidth: 1600,
              linkImagesToOriginal: false,
              quality: 90
            },
          },
        ],
      },
    },
  ],
}