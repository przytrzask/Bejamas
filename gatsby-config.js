module.exports = {
  siteMetadata: {
    title: "BEJAMAS | GATSBY SHOP",
    description: "",
    author: "@bejamasio",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-theme-ui",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "./src/images/icon.png", // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".md", ".mdx"],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "products",
        path: `${__dirname}/src/data/products`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "index",
        path: `${__dirname}/src/pages/product`,
      },
    },
  ],
}
