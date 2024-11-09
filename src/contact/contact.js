import React, { useState, useRef } from 'react';
import './contact.css';
import Swal from 'sweetalert2';
import Navbar from '../navbar';

const ContactForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const form = useRef();
  const backEnd = process.env.REACT_APP_BACKEND_URL;
  

  const sendEmail = (fullName, email, phone, subject, msg) => {
    // Start the loading timer
    let timerInterval;
    Swal.fire({
      title: "Sending your message...",
      html: "Please wait, we are sending your message. <b></b> milliseconds.",
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getHtmlContainer().querySelector("b");
        timerInterval = setInterval(() => {
          timer.textContent = `${Swal.getTimerLeft()}`;
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    });

    fetch(`${backEnd}/email/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        full_name: fullName,
        email: email,
        phone: phone,
        subject: subject,
        msg: msg
      }),
    })
    .then(response => response.json())
    .then(result => {
      Swal.close();  // Close the loading timer
      if (result.success) {
        Swal.fire({
          title: "Success!",
          text: "Message sent successfully!",
          icon: "success"
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">contact me by phone: 0584680232</a>'
        });
      }
    })
    .catch(() => {
      Swal.close();  // Close the loading timer
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">contact me by phone: 0584680232</a>'
      });
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fullName && email && phone && subject && message) {
      sendEmail(fullName, email, phone, subject, message);
      e.target.reset();
      setFullName('');
      setEmail('');
      setPhone('');
      setSubject('');
      setMessage('');
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill out all fields before submitting."
      });
    }
  };


  return (
    <div style={{ display: "flex", justifyContent: "center", minHeight: '100vh' }}>
      <Navbar />
      <section className="contact">
        <h2>Contact Me!</h2>
        <form ref={form} onSubmit={handleSubmit} className="contact-form">
          <div className="input-box">
            <div className="input-field field">
              <input
                type="text"
                placeholder="Full Name"
                className="item"
                value={fullName}
                onChange={e => setFullName(e.target.value)}
                autoComplete="off"
                name='user_name'
              />
              <div className="error-txt">Full Name can't be blank</div>
            </div>
            <div className="input-field field">
              <input
                type="text"
                placeholder="Email"
                className="item"
                value={email}
                onChange={e => setEmail(e.target.value)}
                autoComplete="off"
                name='user_email'
              />
              <div className="error-txt email">Email Address can't be blank</div>
            </div>
          </div>
          <div className="input-box">
            <div className="input-field field">
              <input
                type="text"
                placeholder="Phone Number"
                className="item"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                autoComplete="off"
                name='user_phone'
              />
              <div className="error-txt">Phone Number can't be blank</div>
            </div>
            <div className="input-field field">
              <input
                type="text"
                placeholder="Subject"
                className="item"
                value={subject}
                onChange={e => setSubject(e.target.value)}
                autoComplete="off"
                name='subject'
              />
              <div className="error-txt">Subject can't be blank</div>
            </div>
          </div>
          <div className="textarea-field field">
            <textarea
              cols="30"
              rows="10"
              className="item"
              placeholder="Your Message"
              value={message}
              onChange={e => setMessage(e.target.value)}
              autoComplete="off"
              name='message'
            ></textarea>
            <div className="error-txt">Message can't be blank</div>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default ContactForm;
