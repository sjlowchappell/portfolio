import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import github from '../assets/github-1.svg';
import instagram from '../assets/instagram-glyph-1.svg';
import linkedin from '../assets/linkedin-icon-1.svg';
import './headerStyle.module.css';

const Header = ({ pageTitle }) => (
    <header>
        <nav>
            <ul>
                <li>
                    <a href="https://github.com/sjlowchappell">
                        <img src={github} alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/sammylowchappy/">
                        <img src={instagram} alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/samuel-low-chappell-626110b3/">
                        <img src={linkedin} alt="" />
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
