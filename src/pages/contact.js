import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Contact = () => {
    return (
        <Layout pageTitle="drop me a line">
            <SEO title="Contact" />
            <form action="submit">
                <div class="inputContainer">
                    <div>
                        <label for="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Obi Wan Kenobi"
                        />
                    </div>
                    <div>
                        <label for="email">Email</label>
                        <input
                            type="text"
                            id="email"
                            placeholder="obi.kenobi@dagoba.net"
                        />
                    </div>
                </div>

                <label for="message">Message</label>
                <textarea
                    name="message"
                    id="message"
                    cols="80"
                    rows="10"
                    placeholder="He's more machine than man now..."
                ></textarea>

                <button>Submit</button>
            </form>
        </Layout>
    );
};

export default Contact;
