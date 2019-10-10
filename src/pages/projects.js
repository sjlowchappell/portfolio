import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Project from '../components/project';
import fermentedFilms from '../assets/fermentedFilmsMockup.png';
import podcastable from '../assets/podcastableMockup.png';
import songSmash from '../assets/songSmashMockup.png';
import gourmand from '../assets/foodPassionMockup.png';

const projectData = [
    {
        image: fermentedFilms,
        title: 'Fermented Films',
        subtitle: 'Fun Project!',
        description:
            'Fermented Films is a one stop shop for a curated evening based on one ingredient. Built using the React library, this project utilizes the MovieDB, CocktailDB, and MealsDB APIs.',
        links: {
            live: '#',
            gitHub: '#',
        },
    },
    {
        image: podcastable,
        title: 'Podcastable',
        subtitle: 'Fun Project!',
        description:
            'Podcastable is your home for podcast Recommendations. Built with React and leveraging the ListenNotes API. Search your favorite podcast and get a list of up to 8 recommendations based on the searched value.',
        links: {
            live: '#',
            gitHub: '#',
        },
    },
    {
        image: songSmash,
        title: 'Song Smash',
        subtitle: 'Fun Project!',
        description:
            'Song Smash is a project using modern vanilla JavaScript. Enter your favorite song and get its lyrics. Smash the song, and see a silly result. Utilizes the Merriam Webster and Musixmatch APIs.',
        links: {
            live: '#',
            gitHub: '#',
        },
    },
    {
        image: gourmand,
        title: 'Le Gourmand',
        subtitle: 'Fun Project!',
        description:
            'Le Gourmand is a simple design conversion using HTML and CSS. Using modern techniques like CSS BEM and SASS, this project focuses on Web Accessibility to ensure it is good for all users.',
        links: {
            live: '#',
            gitHub: '#',
        },
    },
];

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
                    key={index}
                />
            );
        })}
    </Layout>
);

export default Projects;
