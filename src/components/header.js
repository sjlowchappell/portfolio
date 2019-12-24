import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import github from '../assets/github-1.svg';
import instagram from '../assets/instagram-glyph-1.svg';
import linkedin from '../assets/linkedin-icon-1.svg';
import styles from './header.module.css';
import resume from '../assets/resume.pdf';

const Header = ({ pageTitle }) => (
    <header>
        <input
            type="checkbox"
            id="hamburger"
            className={styles.hamburgerInput}
        />
        <div className={styles.hamContainer}>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
        </div>
        <nav className={styles.nav}>
            <ul>
                <li>
                    <a href="https://github.com/sjlowchappell">
                        <img
                            src={github}
                            alt="GitHub Icon"
                            className={styles.icon}
                        />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/sammylowchappy/">
                        <img
                            src={instagram}
                            alt="Instagram Icon"
                            className={styles.icon}
                        />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/samuel-low-chappell-626110b3/">
                        <img
                            src={linkedin}
                            alt="Linkedin Icon"
                            className={styles.icon}
                        />
                    </a>
                </li>
            </ul>
            <ul className={styles.subnav}>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/projects/">Projects</Link>
                </li>
                <li>
                    <Link to="/contact/">Contact</Link>
                </li>
                <li>
                    <a href={resume} target="_blank" rel="noopener noreferrer">
                        Resume
                    </a>
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
