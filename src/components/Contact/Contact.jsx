import React from 'react';
import './Contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_k59cuqj', 'template_u94ew97', form.current, 'l8yqb0hE1_bDpbmQc')
    e.target.reset();
  };


  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>E-mail</h4>
            <h5>coreydaves@gmail.com</h5>
            <a href="mailto: coreydaves@gmail.com">Send a message</a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className="contact_option-icon" />
            <h4>Messenger</h4>
            <h5>Corey Daves</h5>
            <a href="https://m.me/coreydavess" target="_blank">Send a message</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon" />
            <h4>WhatsApp</h4>
            <h5>+5527996131240</h5>
            <a href="https://api.whatsapp.com/send?phone=+5527996131240">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your E-mail" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn-ctt">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact