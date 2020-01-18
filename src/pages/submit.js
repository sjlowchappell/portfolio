import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import styles from './submit.module.css';

const Submit = () => {
    return (
        <Layout pageTitle="Thank you!">
            <SEO title="Submit" />
            <div className={styles.giphyEmbedContainer}>
                <iframe
                    title="Salty Success"
                    src="https://giphy.com/embed/3o7P4F86TAI9Kz7XYk"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
            </div>
            <p>
                <a href="https://giphy.com/gifs/3o7P4F86TAI9Kz7XYk">
                    via GIPHY
                </a>
            </p>
            <p>
                Thanks for reaching out! I'm looking forward to reading your
                note and I'll get back to you as soon as I can.
            </p>
        </Layout>
    );
};

export default Submit;
