import React from 'react';
import './Contact.css';

const ContactForm = () => {
  return (
    <>
    <form className="contact-form" >
      <h2>Contact Us</h2>

      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
      />
      <label htmlFor="subject">Subject</label>
      <input
        type="text"
        id="subject"
        name="subject"
      /> 
      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"

      ></textarea>

      <button type="submit">Submit</button>
    </form>
    <div className='map'>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.8278153785873!2d72.55840060000004!3d23.030093500000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f1af6a551b%3A0x2a03c409d4b4748a!2sLal%20Bunglow%2C%20Chimanlal%20Girdharlal%20Rd%2C%20New%20Commercial%20Mills%20Staff%20Society%2C%20Ellisbridge%2C%20Ahmedabad%2C%20Gujarat%20380009!5e0!3m2!1sen!2sin!4v1725349230994!5m2!1sen!2sin"
     width="600" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
    </>
  );
};

export default ContactForm;
