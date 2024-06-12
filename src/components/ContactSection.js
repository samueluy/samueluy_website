import React, { Fragment } from "react";
import emailjs from "emailjs-com";
import dotenv from "dotenv";
dotenv.config();

const ContactSection = () => {

  console.log("Service ID:", process.env.REACT_APP_EMAILJS_SERVICE_ID);
  console.log("Template ID:", process.env.REACT_APP_EMAILJS_TEMPLATE_ID);
  console.log("User ID:", process.env.REACT_APP_EMAILJS_USER_ID);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      e.target,
      process.env.REACT_APP_EMAILJS_USER_ID)
      .then((result) => {
          console.log(result.text);
          alert("Message sent successfully!");
      }, (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again.");
      });

    e.target.reset();
  };

  return (
    <Fragment>
      {/* Section Contacts Info */}
      <div className="section contacts" id="next_section">
        <div className="content">
          {/* title */}
          <div className="title">
            <div className="title_inner">Contact Info</div>
          </div>
          {/* contacts items */}
          <div className="service-items">
            <div className="service-col">
              <div className="service-item content-box">
                <div className="icon">
                  <span className="fas fa-phone" />
                </div>
                <div className="name">Phone</div>
                <div className="text">+ (63) 956 381 2141</div>
              </div>
            </div>
            <div className="service-col">
              <div className="service-item content-box">
                <div className="icon">
                  <span className="fas fa-envelope" />
                </div>
                <div className="name">Email</div>
                <div className="text">
                  <a href="mailto:contact@samueluy.com">
                    contact@samueluy.com
                  </a>
                </div>
              </div>
            </div>
            <div className="service-col">
              <div className="service-item content-box">
                <div className="icon">
                  <span className="fas fa-map-marker-alt" />
                </div>
                <div className="name">Address</div>
                <div className="text">Quezon City, Metro Manila</div>
              </div>
            </div>
            <div className="service-col">
              <div className="service-item content-box">
                <div className="icon">
                  <span className="fas fa-user-tie" />
                </div>
                <div className="name">Available</div>
                <div className="text">Open for collaborations and partnerships</div>
              </div>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
      {/* Section Contacts Form */}
      <div className="section contacts" id="section-contacts">
        <div className="content">
          {/* title */}
          <div className="title">
            <div className="title_inner">Contact Form</div>
          </div>
          {/* form */}
          <div className="contact_form content-box">
            <form id="cform" onSubmit={sendEmail}>
              <div className="group-val">
                <input type="text" name="from_name" placeholder="Name" required />
              </div>
              <div className="group-val">
                <input type="email" name="from_email" placeholder="Email" required />
              </div>
              <div className="group-val ct-gr">
                <textarea name="message" placeholder="Message" required />
              </div>
              <div className="group-bts">
                <button type="submit" className="btn hover-animated">
                  <span className="circle" />
                  <span className="lnk">Send Message</span>
                </button>
              </div>
            </form>
            <div className="alert-success">
              <p>Thanks, your message is sent successfully.</p>
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    </Fragment>
  );
};

export default ContactSection;
