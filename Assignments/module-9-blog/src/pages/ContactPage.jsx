//05 Updated the ContactPage component to include a contact form with fields for name, email, and message.
// Lastly the button will only render and not actually submit the form.

function ContactPage() {
    return (
        <section className="contact-page">
            <h1>Contact Me</h1>

            <p>For any inquiries, feel free to reach out to me through the contact form below.</p>
        
            <form className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Enter your message"
                        rows="6"
                        required
                    ></textarea>
                </div>
            
                <button type="submit">Send Message</button>
            </form>
        </section>
    );
}

export default ContactPage;