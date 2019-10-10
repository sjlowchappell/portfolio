import React from 'react';
import projectStyle from './project.module.css';

const Project = ({ title, subtitle, description, image, links, index }) => {
    return (
        <>
            {index % 2 === 0 ? (
                <div className={projectStyle.project}>
                    <div className={projectStyle.projectImage}>
                        <a href={links.live}>
                            <img src={image} alt="" />
                        </a>
                    </div>
                    <div>
                        <h2>{title}</h2>
                        <p>{subtitle}</p>
                        <p>{description}</p>
                        <div className={projectStyle.projectLinks}>
                            <a href={links.live}>
                                <button>View it live</button>
                            </a>
                            <a href={links.gitHub}>
                                <button>View the code</button>
                            </a>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={projectStyle.project}>
                    <div>
                        <h2>{title}</h2>
                        <p>{subtitle}</p>
                        <p>{description}</p>
                        <div className={projectStyle.projectLinks}>
                            <a href={links.live}>
                                <button>View it live</button>
                            </a>
                            <a href={links.gitHub}>
                                <button>View the code</button>
                            </a>
                        </div>
                    </div>
                    <div className={projectStyle.projectImage}>
                        <a href={links.live}>
                            <img src={image} alt="" />
                        </a>
                    </div>
                </div>
            )}
        </>
    );
};

export default Project;
