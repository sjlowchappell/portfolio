import React from 'react';

const Project = ({ title, subtitle, description, image, links }) => {
    return (
        <div className="project">
            <div className="project--image">
                <a href={links.live}>
                    <img src={image} alt="" />
                </a>
            </div>
            <div className="project--description">
                <h2>{title}</h2>
                <p>{subtitle}</p>
                <p>{description}</p>
                <div className="project--links">
                    <a href={links.live}>
                        <button>View it live</button>
                    </a>
                    <a href={links.gitHub}>
                        <button>View the code</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Project;
