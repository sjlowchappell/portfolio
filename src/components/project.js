import React from 'react';
import styles from './project.module.css';

const Project = ({ title, subtitle, description, image, links }) => {
    return (
        <section className={styles.project}>
            <div className={styles.projectImage}>
                <a href={links.live} target="_blank" rel="noopener noreferrer">
                    <img
                        src={image}
                        alt={`Mockup of the ${title} project on a macbook`}
                    />
                </a>
            </div>
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

export default Project;
