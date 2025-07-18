import React, { useState } from 'react';
import './Contact.css';
import contact from '../../assets/contact.png';

export default function Contact() {
  // Controlled input states
  const [userNamevalue, setUserNameValue] = useState('');
  const [userEmailValue, setUserEmailValue] = useState('');
  const [userTextareaValue, setUserTextareaValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission (page reload)

    // Optional: You can add validation here before submit

    // Since your form has action + method (for Formspree), we can't submit manually here,
    // so let's submit the form programmatically:
    e.target.submit();

    // Reset controlled inputs
    setUserNameValue('');
    setUserEmailValue('');
    setUserTextareaValue('');
  };

  return (
    <>
      <h1 className="projectsExperiment">CONTACT WITH US</h1>
      <div id="contact">
        <div className="leftContact">
          <img src={contact} alt="Contact" />
        </div>

        <div className="rightContact">
          {/* Use onSubmit on the form */}
          <form
            action="https://formspree.io/f/xzzvzzeo"
            method="POST"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="userName"
              placeholder="Enter Your Name"
              value={userNamevalue}
              onChange={(e) => setUserNameValue(e.target.value)}
              required
            />
            <input
              type="email"
              name="userEmail"
              placeholder="Enter Your Email"
              value={userEmailValue}
              onChange={(e) => setUserEmailValue(e.target.value)}
              required
            />
            <textarea
              name="userMessage"
              id="textarea"
              cols="30"
              rows="10"
              placeholder="Enter Your Message"
              value={userTextareaValue}
              onChange={(e) => setUserTextareaValue(e.target.value)}
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
}
