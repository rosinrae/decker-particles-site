module.exports = {
  siteMetadata: {
    title: 'Decker Particles',
  },
  contactData: {
    email: "owen@decker-particles.com",
    phone: "208-881-8049"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`
      }
    },
  ],
}

