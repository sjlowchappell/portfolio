module.exports = {
    siteMetadata: {
        title: `Sam Low-Chappell Portfolio`,
        description: `Welcome to my portfolio! Here you can find my latest work and how to contact me. Hope to speak with you soon!`,
        author: `@gatsbyjs`,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [`Cormorant Garamond`, `Roboto`, `Montserrat`],
                display: 'swap',
            },
        },
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
