import React from 'react';
import projectStyle from './project.module.css';

const Project = ({ title, subtitle, description, image, links, index }) => {
    return (
        <div className={projectStyle.project}>
            <div className={projectStyle.projectImage}>
                <a href={links.live}>
                    <img src={image} alt="" />
                </a>
            </div>
            <div>
                <h2>{title}</h2>
                <p className={projectStyle.subtitle}>{subtitle}</p>
                <p>{description}</p>
                <div className={projectStyle.projectLinks}>
                    <a
                        href={links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button>View it live</button>
                    </a>
                    <a href={links.gitHub} target="_blank">
                        <button>View the code</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Project;
