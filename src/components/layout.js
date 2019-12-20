/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import Header from './header';

const Layout = ({ pageTitle, children }) => {
    return (
        <div className="outerWrapper">
            <div className="innerWrapper">
                <Header pageTitle={pageTitle} />
                <main>{children}</main>
                <footer>
                    <p>
                        © {new Date().getFullYear()}, Built with
                        {` `}
                        <a href="https://www.gatsbyjs.org">Gatsby</a> by Sam
                        Low-Chappell
                    </p>
                </footer>
            </div>
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
