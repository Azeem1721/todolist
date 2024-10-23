// import React from 'react'

// export const About = () => {
//     return (
//         <div>
//             This is an about component 
//             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum corporis odio, nesciunt sed eveniet, nemo amet, dignissimos magnam itaque ipsam possimus. Inventore vitae, perferendis harum quas cupiditate adipisci repellendus tempore asperiores at consequatur quos?</p>
//         </div>
//     )
// }












import React, { useState } from 'react';
import "./Contact.css"

const ContactMain = () => {
  // State variables for each input field
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [charCount, setCharCount] = useState(0);

  // Input change handlers
  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleSubjectChange = (e) => setSubject(e.target.value);
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    setCharCount(e.target.value.length); // Update character count for message field
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here (e.g., send the data to the server)
    console.log({ name, email, subject, message });

    // Clear form fields after submission
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    setCharCount(0); // Reset character count for message
  };

  return (
    <div id="contact-main">
      <div className="main">
        <div className="Contact-Hero">
          <div className="contact-top">
            <h1>Get In Touch</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
              non nemo porro distinctio voluptas totam delectus impedit quo iure
              nesciunt, id obcaecati provident sequi, similique soluta ipsam,
              officia consequatur qui.
            </p>
          </div>

          <div className="contact-box">
            <div className="contact-left">
              <div className="contact-info-left">
                <h2>Contact Information</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                <div className="left-info">
                  <i className="fa-solid fa-phone"></i>{' '}
                  <span>0317-2183429</span>
                </div>

                <div className="left-info">
                  <i className="fa-solid fa-envelope"></i>{' '}
                  <span>azeemislam79@gmail.com</span>
                </div>

                <div className="left-info">
                  <i className="fa-solid fa-location-dot"></i>
                  <span>Sector 2, North Karachi, Karachi</span>
                </div>
              </div>
            </div>

            <div className="contact-right">
              <div className="form-container">
                <form id="contactForm" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="input-field half-width">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={handleNameChange}
                        required
                      />
                      <label htmlFor="name">Your Name</label>
                      <div className="underline"></div>
                    </div>

                    <div className="input-field half-width">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                      />
                      <label htmlFor="email">Your Email</label>
                      <div className="underline"></div>
                    </div>
                  </div>

                  <div className="input-field full-width">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={subject}
                      onChange={handleSubjectChange}
                      required
                    />
                    <label htmlFor="subject">Your Subject</label>
                    <div className="underline"></div>
                  </div>

                  <div className="input-field full-width message-box">
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={message}
                      maxLength="500"
                      onChange={handleMessageChange}
                      required
                    ></textarea>
                    <label htmlFor="message">Message</label>
                    <div className="underline"></div>
                    <p id="charCount">{charCount}/500</p>
                  </div>

                  <button className="form-button" type="submit">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMain;
