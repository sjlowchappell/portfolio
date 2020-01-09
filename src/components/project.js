import React from 'react';
import styles from './project.module.css';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const Project = ({ title, subtitle, description, image, links }) => {
    return (
        <section className={styles.project}>
            <a
                className={styles.projectImage}
                href={links.live}
                target="_blank"
                rel="noopener noreferrer"
            >
                <Img
                    fluid={image.childImageSharp.fluid}
                    alt={`${title} Project Mockup`}
                />
            </a>
            <div>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.subtitle}>{subtitle}</p>
                <p>{description}</p>
                <div className={styles.projectLinks}>
                    <a
                        href={links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button>View it live</button>
                    </a>
                    <a
                        href={links.gitHub}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button>View the code</button>
                    </a>
                </div>
            </div>
        </section>
    );
};

Project.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.object,
    links: PropTypes.object,
};

export default Project;
