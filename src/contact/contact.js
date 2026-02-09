import React, { useState, useRef } from "react";
import "./contact.css";
import Swal from "sweetalert2";
import Navbar from "../navbar";
import Footer from "../footer";
import EmailIcon from "@mui/icons-material/Email";
import SmsIcon from "@mui/icons-material/Sms";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const ContactForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [contactMethod, setContactMethod] = useState("email");
  const form = useRef();
  const backEnd = process.env.REACT_APP_BACKEND_URL;

  const sendMessage = (fullName, email, phone, subject, msg, method) => {
    // Validation based on method
    if (method === "email" && !email) {
      Swal.fire({
        icon: "error",
        title: "Email Required",
        text: "Please enter your email address to use this method.",
      });
      return;
    }

    if ((method === "sms" || method === "whatsapp") && !phone) {
      Swal.fire({
        icon: "error",
        title: "Phone Required",
        text: "Please enter your phone number to use this method.",
      });
      return;
    }

    // Start the loading timer
    let timerInterval;
    const methodNames = {
      email: "Email",
      sms: "SMS",
      whatsapp: "WhatsApp",
    };

    Swal.fire({
      title: `Sending via ${methodNames[method]}...`,
      html: "Please wait, we are sending your message.",
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    });

    // Determine endpoint
    const endpoints = {
      email: `${backEnd}/contact/email_sender`,
      sms: `${backEnd}/contact/sms_sender`,
      whatsapp: `${backEnd}/contact/whatsapp_sender`,
    };

    fetch(endpoints[method], {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        full_name: fullName,
        email: email,
        phone: phone,
        subject: subject,
        msg: msg,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        Swal.close();
        if (result.success) {
          Swal.fire({
            title: "Success!",
            text: `Message sent successfully via ${methodNames[method]}!`,
            icon: "success",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: result.message || "Something went wrong!",
            footer: '<a href="#">Contact me by phone: 0584680232</a>',
          });
        }
      })
      .catch((error) => {
        Swal.close();
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Contact me by phone: 0584680232</a>',
        });
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fullName && subject && message) {
      sendMessage(fullName, email, phone, subject, message, contactMethod);
      e.target.reset();
      setFullName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill out all required fields before submitting.",
      });
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <Navbar />
        <section className="contact">
          <h2>Contact Me!</h2>

          {/* Contact Method Selector */}
          <div className="contact-method-selector">
            <button
              type="button"
              className={`method-btn ${contactMethod === "email" ? "active" : ""}`}
              onClick={() => setContactMethod("email")}
            >
              <EmailIcon className="method-icon" />
              <span className="method-text">Email</span>
            </button>
            <button
              type="button"
              className={`method-btn ${contactMethod === "sms" ? "active" : ""}`}
              onClick={() => setContactMethod("sms")}
            >
              <SmsIcon className="method-icon" />
              <span className="method-text">SMS</span>
            </button>
            <button
              type="button"
              className={`method-btn ${contactMethod === "whatsapp" ? "active" : ""}`}
              onClick={() => setContactMethod("whatsapp")}
            >
              <WhatsAppIcon className="method-icon" />
              <span className="method-text">WhatsApp</span>
            </button>
          </div>

          <form ref={form} onSubmit={handleSubmit} className="contact-form">
            <div className="input-box">
              <div className="input-field field">
                <input
                  type="text"
                  placeholder="Full Name *"
                  className="item"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  autoComplete="off"
                  name="user_name"
                  required
                />
                <div className="error-txt">Full Name can't be blank</div>
              </div>
              <div className="input-field field">
                <input
                  type="email"
                  placeholder={`Email ${contactMethod === "email" ? "*" : ""}`}
                  className="item"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="off"
                  name="user_email"
                  required={contactMethod === "email"}
                />
                <div className="error-txt email">
                  Email Address can't be blank
                </div>
              </div>
            </div>
            <div className="input-box">
              <div className="input-field field">
                <input
                  type="tel"
                  placeholder={`Phone Number ${contactMethod === "sms" || contactMethod === "whatsapp" ? "*" : ""}`}
                  className="item"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  autoComplete="off"
                  name="user_phone"
                  required={
                    contactMethod === "sms" || contactMethod === "whatsapp"
                  }
                />
                <div className="error-txt">Phone Number can't be blank</div>
              </div>
              <div className="input-field field">
                <input
                  type="text"
                  placeholder="Subject *"
                  className="item"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  autoComplete="off"
                  name="subject"
                  required
                />
                <div className="error-txt">Subject can't be blank</div>
              </div>
            </div>
            <div className="textarea-field field">
              <textarea
                cols="30"
                rows="10"
                className="item"
                placeholder="Your Message *"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                autoComplete="off"
                name="message"
                required
              ></textarea>
              <div className="error-txt">Message can't be blank</div>
            </div>
            <button type="submit" className="submit-btn">
              {contactMethod === "email" && (
                <>
                  <EmailIcon /> Send Email
                </>
              )}
              {contactMethod === "sms" && (
                <>
                  <SmsIcon /> Send SMS
                </>
              )}
              {contactMethod === "whatsapp" && (
                <>
                  <WhatsAppIcon /> Send WhatsApp
                </>
              )}
            </button>
          </form>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ContactForm;
