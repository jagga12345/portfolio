import React, { useState } from "react";
import "./Contact.css";
import iconbg from "../../assets/iconbg.svg";

const ContactForm = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Validate form fields
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name || !email || !message) {
      setErrorMessage("All fields are required.");
      return;
    }

    formData.append("access_key", "0f64c020-c602-4cf2-ba88-3c77df9d50c1");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      event.target.reset(); // Reset the form fields after successful submission
      setSuccessMessage("Your message has been sent successfully!");
      setErrorMessage(""); // Clear any previous error message
    } else {
      console.log("Error", res);
      setSuccessMessage("");
      setErrorMessage(
        "There was an error sending your message. Please try again."
      );
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="title-box">
        <h1>Get in touch</h1>
        <img src={iconbg} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <p>
                <b>Email:</b>
              </p>
              <p>jagahls@gmail.com</p>
            </div>
            <div className="contact-detail">
              <p>
                <b>Number:</b>
              </p>
              <p>9108226820</p>
            </div>
            <div className="contact-detail">
              <p>
                <b>Location:</b>
              </p>
              <p>Gubbi, Karnataka</p>
            </div>
          </div>
        </div>
        <form className="contact-right" onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label>Your email</label>
          <input type="text" placeholder="Enter your email" name="email" />
          <label>Write your message here</label>
          <textarea name="message" rows="8" placeholder="Enter your message" />
          <button type="submit" className="contact-submit">
            Submit now
          </button>
          {successMessage && (
            <p className="success-message">{successMessage}</p>
          )}
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
