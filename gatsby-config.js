module.exports = {
    siteMetadata: {
        title: `Sam Low-Chappell Portfolio`,
        description: `Welcome to my portfolio! Here you can find my latest work and how to contact me. Hope to speak with you soon!`,
        author: `Sam Low-Chappell`,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [`Cormorant Garamond`, `Roboto`],
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
                name: `Sam Low-Chappell Portfolio`,
                short_name: `SLC Portfolio`,
                start_url: `/`,
                background_color: `#e8edea`,
                theme_color: `#6d435a`,
                display: `minimal-ui`,
                icon: `src/assets/favicon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
