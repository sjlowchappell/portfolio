import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ pageTitle }) => (
    <header>
        <nav>
            <ul>
                <li>
                    <a href="https://github.com/sjlowchappell">
                        <i className="fab fa-github"></i>
                    </a>
                </li>

                <li>
                    <a href="https://www.instagram.com/sammylowchappy/">
                        <i className="fab fa-instagram"></i>
                    </a>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/projects/">Projects</Link>
                </li>
                <li>
                    <Link to="/contact/">Contact</Link>
                </li>
            </ul>
        </nav>
        <h1>{pageTitle}</h1>
    </header>
);

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: ``,
};

export default Header;
