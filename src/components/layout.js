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
                        © {new Date().getFullYear()}, <a href="https://samlow-chappell.com">
                            Sam Low-Chappell
                        </a>
                    </p>
                </footer>
            </div>
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    pageTitle: PropTypes.string,
};

export default Layout;
