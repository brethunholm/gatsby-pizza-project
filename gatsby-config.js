import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: `Slicks Slices`,
    siteUrl: `https://gatsby.pizza`,
    description: `Serving up the good goods.`,
    twitter: '@slicksSlices',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      // this is the name of the plug in you are adding
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'ioddwi70',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_Token,
      },
    },
  ],
};
