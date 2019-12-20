import React from 'react';
import Layout from '../components/layout';

const Submit = () => {
    return (
        <Layout pageTitle="Thank you!">
            <iframe
                title="Happy Obi-Wan"
                src="https://giphy.com/embed/KLutwdTSDth72"
                width="480"
                height="264"
                frameBorder="0"
            ></iframe>
            <p>
                <a href="https://giphy.com/gifs/tripping-balls-KLutwdTSDth72">
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
