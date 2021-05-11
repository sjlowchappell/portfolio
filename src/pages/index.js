import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import styles from './index.module.css';
import Img from 'gatsby-image';

const IndexPage = props => (
    <Layout pageTitle={'sam low-chappell'}>
        <SEO title="Home" />
        <section>
            <div className={styles.headshotContainer}>
                <Img
                    className={styles.headshot}
                    fluid={props.data.smilingHeadshot.childImageSharp.fluid}
                    alt={`Headshot of Sam Low-Chappell`}
                />
            </div>
              <div>
                <p>
                    Hey there! I'm an American-born, Toronto-based Front End
                    Engineer focused on creating dynamic web experiences for all
                    users.
                </p>
                <p>
                    I’m a people person, a creative thinker, and a problem
                    solver. I love to experiment with new technologies, and I’m
                    happiest working with a team of people striving to make the
                    internet an accessible, inclusive, wonderfully weird space.
                </p>
                <p>
                    After studying Computer Science and Classics at McGill
                    University, I worked in a variety of roles at{' '}
                    <a href="http://hackeryou.com">
                        Juno College of Technology
                    </a>{' '}
                    (formerly HackerYou) in order to help working professionals
                    transition into a career in Web Development. These days I'm
                    developing Healthcare applications at <a href="http://thoughtwire.com">ThoughtWire</a>, helping
                    improve practitioner experience and enabling better patient
                    outcomes. Feel free to check out my{' '}
                    <Link to="/projects/">projects</Link>, and please don't
                    hesitate to <Link to="/contact/">get in touch!</Link>
                </p>
            </div>
        </section>
    </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
    query {
        smilingHeadshot: file(relativePath: { eq: "smilingHeadshot.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;
