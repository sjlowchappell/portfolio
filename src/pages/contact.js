import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import contactStyles from './contact.module.css';

const Contact = () => {
    return (
        <Layout pageTitle="drop me a line">
            <SEO title="Contact" />
            <div className={contactStyles.contactContainer}>
                <div>
                    <h2>I'd love to work together.</h2>
                    <p>
                        Have a freelance project? Looking to hire a hungry
                        junior? Want to chat southern Ontario climbing routes??
                        I'm your guy.
                    </p>
                    <p>
                        Send me an email at sjlowchappell at gmail.com or fill
                        out this handy form. I'm looking forward to hearing from
                        you.
                    </p>
                </div>
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
            </div>
        </Layout>
    );
};

export default Contact;
