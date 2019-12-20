import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import headshot from '../assets/smilingHeadshot.jpg';
import indexStyle from './index.module.css';

const IndexPage = () => (
    <Layout pageTitle={'sam low-chappell'}>
        <SEO title="Home" />
        <div className={indexStyle.about}>
            <div className={indexStyle.aboutHeadshot}>
                <img
                    src={headshot}
                    alt="It's my face! A headshot of me smiling sitting on my porch in Toronto."
                />
            </div>
            <div className={indexStyle.aboutDescription}>
                <p>
                    Hey there! I'm an American-born, Toronto-based Web Developer
                    focused on creating dynamic web experiences for all users
                </p>
                <p>
                    I’m a people person, a creative thinker, and a problem
                    solver. I love to experiment with new technologies
                    (currently exploring Gatsby and GraphQL), and I’m happiest
                    working with a team of people striving to make the internet
                    an accessible, inclusive, wonderfully weird space.
                </p>
                <p>
                    After studying Computer Science and Classics at McGill
                    University, I worked in a variety of roles at{' '}
                    <a href="http://hackeryou.com">
                        Juno College of Technology
                    </a>{' '}
                    (formerly HackerYou) in order to help working professionals
                    transition into a career in Web Development. Feel free to
                    check out my <Link to="/projects/">projects</Link>, and
                    please don't hesitate to{' '}
                    <Link to="/contact/">get in touch!</Link>
                </p>
            </div>
        </div>
    </Layout>
);

export default IndexPage;
