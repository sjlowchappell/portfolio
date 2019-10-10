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
                    Now, I'm returning to my roots and looking to get back in
                    the developer's seat. I'm looking to join a collaborative
                    team with opportunities for mentorship where I can continue
                    to learn and build projects that help people.
                </p>
            </div>
            <div className={indexStyle.aboutHeadshot}>
                <img src={headshot} alt="" />
            </div>
        </div>
    </Layout>
);

export default IndexPage;
