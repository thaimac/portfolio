import React from 'react';

const ContactForm = () => {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form>
        <label>Name:</label>
        <input type="text" required />

        <label>Email:</label>
        <input type="email" required />

        <label>Message:</label>
        <textarea required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default ContactForm;
