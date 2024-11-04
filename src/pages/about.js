import "./styles.css";
import "./about.css";

const About = () => {
    return (
        <>
        <main id="about-section">
            <section id="who-section">
                <div className="img-div">
                    <img id="who-img-1" src="images/team.jpg" />
                </div>
                <div className="content-div">
                    <h1>The Team</h1>
                    <p>ProteinPrepped originates in Columbia, South Carolina, USA, as does most of our team. We hire people from diverse background and stories to help us develop the best steps forward for our mission.</p>
                    <p>We are still based in Columbia, but have a growing staff of people all around the country, including Austin, TX, New York City, NY, and Seattle, WA, and abroad!</p>
                </div>
            </section>
            <section id="why-section">
                <div className="img-div">
                    <img id="why-img-1" src="images/mission.jpg" />
                </div>
                <div className="content-div">
                    <h1>The Mission</h1>
                    <p>Our goal as a company is to provide a much needed service in the meal kit service. Many companies in the past decade have come up in providing cheap meal kits, but none have provided this service to those with muscle growth in mind. We aim to provide high-protein and affordable meal prep to anyone who wants it.</p>
                </div>
            </section>
            <section id="iframe-section">
                <h1>Our Location</h1>
                <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            </section>
            <section id="form-section">
                <h1>Contact Us</h1>
                <form id="contact-form" method="post">
                    <input type="hidden" name="access_key" value="a947ae2e-a2d7-4800-9c22-8d8ad6f41852" />
                    <p>
                        <label for="name">Name:</label>
                        <input id="name" type="text" placeholder="Firstname Lastname" name="name" required />
                    </p>
                    <p>
                        <label for="phone">Phone:</label>
                        <input id="phone" type="text" placeholder="(XXX) XXX-XXXX" name="phone" required />
                    </p>
                    <p>
                        <label for="email">Email:</label>
                        <input id="email" type="email" name="email" required />
                    </p>
                    <p>
                        <label for="message">Message:</label>
                        <textarea id="message" name="message" required></textarea>
                    </p>
                    <input type="hidden" name="redirect" value="https://web3forms.com/success" />
                    <input type="hidden" name="subject" value="Contact from Protein Prepped"/>
                    <input type="hidden" name="from_name" value="Protein Prepped" />
                    <p><button type="submit">Submit Form</button></p>
                    <p id="result"></p>
                </form>
            </section>
        </main>
        </>
    )
};

export default About;