import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import contactStyles from './contact.module.css';

const Contact = () => {
    return (
        <Layout pageTitle="drop me a line">
            <SEO title="Contact" />
            <div className={contactStyles.contactContainer}>
                <div className={contactStyles.contactText}>
                    <h2>Let's work together.</h2>
                    <p>
                        Have a freelance project? Looking to hire a new
                        teammate? Want to chat southern Ontario climbing routes?
                        I'm your guy.
                    </p>
                    <p>
                        Send me an email at sjlowchappell@gmail.com or fill out
                        this handy form. I'm looking forward to hearing from
                        you.
                    </p>
                </div>
                <form
                    name="contact"
                    action="/submit"
                    method="POST"
                    data-netlify="true"
                >
                    <input type="hidden" name="bot-field" />
                    <input type="hidden" name="form-name" value="contact" />
                    <div className={contactStyles.nameAndEmailContainer}>
                        <div className={contactStyles.inputContainer}>
                            <label htmlFor="name">Name</label>
                            <input
                                name="name"
                                type="text"
                                id="name"
                                placeholder="Obi Wan Kenobi"
                                required
                            />
                        </div>
                        <div className={contactStyles.inputContainer}>
                            <label htmlFor="email">Email</label>
                            <input
                                name="email"
                                type="email"
                                id="email"
                                placeholder="obi.kenobi@dagoba.net"
                                required
                            />
                        </div>
                    </div>

                    <div className={contactStyles.inputContainer}>
                        <label htmlFor="message">Message</label>
                        <textarea
                            name="message"
                            id="message"
                            rows="6"
                            placeholder="He's more machine than man now..."
                            required
                        ></textarea>
                    </div>

                    <div className={contactStyles.buttonContainer}>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </Layout>
    );
};

export default Contact;
