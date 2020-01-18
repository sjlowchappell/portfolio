import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = ({ location }) => {
    const name = location.pathname;
    return (
        <Layout pageTitle={`You made it to the ${name} page??`}>
            <SEO title="404: Not found" />
            <p>
                Not much to see here! But while you're around, I recommend
                taking a look at these <Link to="/projects">projects</Link>.
            </p>
        </Layout>
    );
};

NotFoundPage.propTypes = {
    location: PropTypes.object,
};

export default NotFoundPage;
