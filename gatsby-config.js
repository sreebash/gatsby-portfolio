/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-transformer-remark',

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
    


  ],
  siteMetadata: {
    title: 'Web Warrior',
    description: 'Web dev portfolio',
    copyright: 'This website is copywright 2021 Web Warrior',

  }
}
