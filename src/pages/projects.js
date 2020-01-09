import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Project from '../components/project';
import projectData from '../utils/projectData';
import { graphql } from 'gatsby';

const Projects = props => (
    <Layout pageTitle="projects">
        <SEO title="Projects" />
        {projectData.map((project, index) => {
            const { title, subtitle, description, shorthand, links } = project;
            return (
                <Project
                    title={title}
                    subtitle={subtitle}
                    description={description}
                    image={props.data[shorthand]}
                    links={links}
                    index={index}
                    key={index}
                />
            );
        })}
    </Layout>
);

export default Projects;

export const fluidImage = graphql`
    fragment fluidImage on File {
        childImageSharp {
            fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
            }
        }
    }
`;

export const pageQuery = graphql`
    query {
        fermentedFilms: file(relativePath: { eq: "fermentedFilmsMockup.png" }) {
            ...fluidImage
        }
        packTrack: file(relativePath: { eq: "packTrack.png" }) {
            ...fluidImage
        }
        podcastable: file(relativePath: { eq: "podcastableMockup.png" }) {
            ...fluidImage
        }
        songSmash: file(relativePath: { eq: "songSmashMockup.png" }) {
            ...fluidImage
        }
        gourmand: file(relativePath: { eq: "foodPassionMockup.png" }) {
            ...fluidImage
        }
    }
`;
