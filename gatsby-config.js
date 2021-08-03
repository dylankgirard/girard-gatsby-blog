module.exports = {
  siteMetadata: {
    title: "DG Gatsby Blog",
    author: "Dylan Girard",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-transformer-remark",
  ],
}
