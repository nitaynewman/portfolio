import React, { useState } from 'react';
import './contact.css'
import Swal from 'sweetalert2';
import Navbar from '../navbar';
// var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };

const ContactForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = () => {
      const bodyMessage = `Full Name: ${fullName}\nEmail: ${email}\nPhone Number: ${phone}\nMessage: ${message}`;
      window.Email.send({
          SecureToken : "232b1529-ae0b-4939-be9c-79aea349f74d",
          // Host: "smtp.elasticemail.com",
          // Username: "nitaybusines@gmail.com",
          // Password: "D6E9199F58848EBE92BEDF6C1A46CECCADD5",
          // Port: 2525,
          To: 'nitaybusines@gmail.com',
          From: "nitaybusines@gmail.com",
          Subject: subject,
          Body: bodyMessage
      }).then(
          message => {
              if (message === "OK") {
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
                      footer: '<a href="#">contact me in phone: 0584680232</a>'
                  });
              }
          }
      );
  };

  const checkInputs = () => {
      return fullName.trim() !== '' && email.trim() !== '' && phone.trim() !== '' && subject.trim() !== '' && message.trim() !== '';
  };

  const handleSubmit = e => {
      e.preventDefault();
      if (checkInputs()) {
          sendEmail();
          e.target.reset();
      } else {
          // Handle errors, maybe display an error message
          console.log('Form has errors');
      }
  };

  return (
    <div style={{display:"flex", justifyContent:"center", minHeight: '100vh'}}>
      <Navbar />
      <section className="contact">
          <h2>Contact Me!</h2>
          <form onSubmit={handleSubmit} className="contact-form">
              <div className="input-box">
                  <div className="input-field field">
                      <input
                          type="text"
                          placeholder="Full Name"
                          className="item"
                          value={fullName}
                          onChange={e => setFullName(e.target.value)}
                          autoComplete="off"
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