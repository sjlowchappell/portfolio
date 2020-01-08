import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = ({ location }) => {
    const name = location.pathname;
    return (
        <Layout pageTitle={`You seriously tried to go to the ${name} page?`}>
            <SEO title="404: Not found" />
            <p>
                Get outa here!! Go check out my{' '}
                <Link to="/projects">projects</Link> instead.
            </p>
        </Layout>
    );
};

NotFoundPage.propTypes = {
    location: propTypes.object,
};

export default NotFoundPage;
