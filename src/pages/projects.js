import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Project from '../components/project';
import projectData from '../utils/projectData';

const Projects = () => (
    <Layout pageTitle="projects">
        <SEO title="Projects" />
        {projectData.map((project, index) => {
            const { title, subtitle, description, image, links } = project;
            return (
                <Project
                    title={title}
                    subtitle={subtitle}
                    description={description}
                    image={image}
                    links={links}
                    index={index}
                    key={index}
                />
            );
        })}
    </Layout>
);

export default Projects;
