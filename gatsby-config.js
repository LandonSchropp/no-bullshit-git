module.exports = {
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${ __dirname }/src/images`
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "No Bullshit Git",
        start_url: "/",
        background_color: "#683523",
        theme_color: "#683523",
        icon: "src/images/favicon.png"
      }
    },
    "gatsby-plugin-sass"
  ]
};
