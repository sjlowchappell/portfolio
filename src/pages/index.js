import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import headshot from '../assets/smilingHeadshot.jpg';
import indexStyle from './index.module.css';

const IndexPage = () => (
    <Layout pageTitle={'sam low-chappell'}>
        <SEO title="Home" />
        <div className={indexStyle.about}>
            <div className={indexStyle.aboutDescription}>
                <p>
                    Hey there! I'm an American-born, Toronto-based Web Developer
                    focused on creating amazing digital experiences.
                </p>
                <p>
                    After studying Computer Science and Classics at McGill
                    University, I worked in a variety of roles at{' '}
                    <a href="http://hackeryou.com">
                        Juno College of Technology
                    </a>{' '}
                    (formerly HackerYou) in order to help working professionals
                    transition into a career in Web Development.
                </p>
                <p>
                    When I'm not hacking on projects, you can find me walking
                    around the city listening to the latest{' '}
                    <a href="https://gimletmedia.com/shows/heavyweight">
                        Heavyweight
                    </a>{' '}
                    episode, Dungeon Master-ing an amazing party of
                    dragon-slaying heroes, or hitting one of the many southern
                    Ontario climbing crags.
                </p>
            </div>
            <div className={indexStyle.aboutHeadshot}>
                <img
                    src={headshot}
                    alt="It's my face! A headshot of me smiling sitting on my porch in Toronto."
                />
            </div>
        </div>
    </Layout>
);

export default IndexPage;
