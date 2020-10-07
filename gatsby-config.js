module.exports = {
  siteMetadata: {
    title: "No Bullshit Git",
    description: "The practical, no-BS course that takes you beyond the basics of Git.",
    author: "Landon Schropp <schroppl@gmail.com>"
  },
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
    "gatsby-plugin-sharp"
  ]
};
