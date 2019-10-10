import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => (
    <Layout pageTitle={'about me'}>
        <SEO title="Home" />
        <div className="aboutContainer">
            <div className="aboutDescription">
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
            <div className="aboutHeadshot">
                <img src="./assets/smilingHeadshot.jpg" alt="" />
            </div>
        </div>
    </Layout>
);

export default IndexPage;
