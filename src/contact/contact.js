import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from '../navbar';

export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_pmgxo1s', 'template_jj84qun', form.current, {
        publicKey: 'TUo92Y0oy-H-qUGHG',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
      <div className='contact-container'>
        <Navbar />
           <h1>Contact Me</h1>
           <p>I would love to respond to your effort. Feel free to get in touch with me😊</p>    
           <div className='contact-box'>
              <div className='contact-left'>
                  <h3>Send your respons</h3>
                  <form>
                      <div className='input-row'>
                          <div className='input-group'>
                              <label>Name</label>
                              <input type='text' placeholder='Nitay Newman' />
                          </div>
                          <div className='input-group'>
                              <label>Phone</label>
                              <input type='text' placeholder='+972-123456789'/>
                          </div>
                      </div>
                      <div className='input-row'>
                          <div className='input-group'>
                              <label>Gmail</label>
                              <input type='gmail' placeholder='nitaynewman@gmail.com' />
                          </div>
                          <div className='input-group'>
                              <label>Subject</label>
                              <input type='text' placeholder='Enter your contact info here'/>
                          </div>
                      </div>
                      <label>Message</label>
                      <textarea rows='5' placeholder='Enter your message here'></textarea>
                      <button type='submit' className='button'>SEND</button>
                  </form>
              </div>
              <div className='contact-right'>
                  <h3>Reach Me</h3>
                  <table>
                      <tr>
                          <td>Email</td>
                          <td>contactme@gmail.com</td>
                      </tr>
                      <tr>
                          <td>Phone</td>
                          <td>+972-123-456-789</td>
                      </tr>
                  </table>

              </div>
           </div>

      </div>



        // <section>
        //     <div className='container'>
        //         <h2 ref={form} onSubmit={sendEmail} className='--text-center'>Contact Me</h2>
        //         <form className='--form-control --card --flex-center --dir-column'>
        //             <input type='text' placeholder='Full Name' name='user_name' required />
        //             <input type='email' placeholder='Email Adress' name='user_email' required />
        //             <input type='text' placeholder='Subject' name='subject' required />
        //             <textarea name='message' cols='30' rows='10'></textarea>
        //             <button type='submit' className='--btn --btn-primary'>Send Message</button>
        //         </form>
        //     </div>
        // </section>
  );
};



// import {useRef} from 'react'
// import emailjs from '@emailjs/browser'

// export default function Contact() {
//     const form = useRef();
//     let SERVICE_ID = 'service_pmgxo1s'
//     let TEMPLATE_ID = 'template_jj84qun'
//     let PUBLIC_KEY = 'TUo92Y0oy-H-qUGHG'
//     const sendEmail = (e) => {
//         e.preventDefault();
    
//         emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
//             publicKey: PUBLIC_KEY,
//           })
//           .then((result) => {
//               console.log("it worked", result.text);
//             },
//             (error) => {
//               console.log('FAILED...', error.text);
//             },
//           );
//       };
//         return(
//         <section>
//             <div className='container'>
//                 <h2 ref={form} onSubmit={sendEmail} className='--text-center'>Contact Me</h2>
//                 <form className='--form-control --card --flex-center --dir-column'>
//                     <input type='text' placeholder='Full Name' name='user_name' required />
//                     <input type='email' placeholder='Email Adress' name='user_email' required />
//                     <input type='text' placeholder='Subject' name='subject' required />
//                     <textarea name='message' cols='30' rows='10'></textarea>
//                     <button type='submit' className='--btn --btn-primary'>Send Message</button>
//                 </form>
//             </div>
//         </section>
//     )
//     // export default Contact()
// }




// import './contact.css'
// export default function Contact() {
    // return(
    //     <div className='contact-container'>
    //          <h1>Contact Me</h1>
    //          <p>I would love to respond to your effort. Feel free to get in touch with me😊</p>    
    //          <div className='contact-box'>
    //             <div className='contact-left'>
    //                 <h3>Send your respons</h3>
    //                 <form>
    //                     <div className='input-row'>
    //                         <div className='input-group'>
    //                             <label>Name</label>
    //                             <input type='text' placeholder='Nitay Newman' />
    //                         </div>
    //                         <div className='input-group'>
    //                             <label>Phone</label>
    //                             <input type='text' placeholder='+972-123456789'/>
    //                         </div>
    //                     </div>
    //                     <div className='input-row'>
    //                         <div className='input-group'>
    //                             <label>Gmail</label>
    //                             <input type='gmail' placeholder='nitaynewman@gmail.com' />
    //                         </div>
    //                         <div className='input-group'>
    //                             <label>Subject</label>
    //                             <input type='text' placeholder='Enter your contact info here'/>
    //                         </div>
    //                     </div>
    //                     <label>Message</label>
    //                     <textarea rows='5' placeholder='Enter your message here'></textarea>
    //                     <button type='submit' className='button'>SEND</button>
    //                 </form>
    //             </div>
    //             <div className='contact-right'>
    //                 <h3>Reach Me</h3>
    //                 <table>
    //                     <tr>
    //                         <td>Email</td>
    //                         <td>contactme@gmail.com</td>
    //                     </tr>
    //                     <tr>
    //                         <td>Phone</td>
    //                         <td>+972-123-456-789</td>
    //                     </tr>
    //                 </table>

    //             </div>
    //          </div>

    //     </div>
    // )
// }