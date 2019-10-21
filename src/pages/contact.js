import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import contactStyles from './contact.module.css';

const Contact = () => {
    return (
        <Layout pageTitle="drop me a line">
            <SEO title="Contact" />
            <form action="submit">
                <div className={contactStyles.nameAndEmailContainer}>
                    <div className={contactStyles.inputContainer}>
                        <label for="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Obi Wan Kenobi"
                        />
                    </div>
                    <div className={contactStyles.inputContainer}>
                        <label for="email">Email</label>
                        <input
                            type="text"
                            id="email"
                            placeholder="obi.kenobi@dagoba.net"
                        />
                    </div>
                </div>

                <div className={contactStyles.inputContainer}>
                    <label for="message">Message</label>
                    <textarea
                        name="message"
                        id="message"
                        rows="10"
                        placeholder="He's more machine than man now..."
                    ></textarea>
                </div>

                <button>Submit</button>
            </form>
        </Layout>
    );
};

export default Contact;
