import React from "react";
import "./contact.css";
import r1 from "../../images/R1.jpg";
import Footer from "../../component/Footer/Footer";
import Navbar from "../../component/navbar/Navbar";
import Sidebar from "../../component/sidebar/Sidebar";
import { useForm, ValidationError } from "@formspree/react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [state, handleSubmit] = useForm("maykaoqj");
  if (state.succeeded) {
    return (
      <section className="error-page section">
        <div className="error-container">
          <h1>Thanks</h1>
          <p>The Form submitted successfully!!</p>
          <div className="error">
            <Link to="/" className="btn btn-primary">
              back home
            </Link>
          </div>
        </div>
      </section>
    );
  }
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="img">
        <img src={r1} alt="R1 Esports" className="img" />
      </div>
      <div className="section">
        <h1 className="contactus">contact us</h1>
        <form
          action="https://formspree.io/f/maykaoqj"
          method="POST"
          className="form"
          onSubmit={handleSubmit}
        >
          <div className="inline">
            <div className="form-control">
              <label htmlFor="lastName" className="form-label">
                LastName :
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Enter your last name"
                name="lastName"
                required
              />
            </div>
            <div className="form-control">
              <label className="form-label" htmlFor="firstName">
                FirstName :
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="Enter your first name"
                name="firstName"
                required
              />
            </div>
          </div>
          <div className="inline">
            <div className="form-control">
              <label className="form-label" htmlFor="email">
                Mail :
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your Email"
                name="email"
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="form-control">
              <label htmlFor="object" className="form-label">
                Object :
              </label>
              <input
                placeholder="Enter Your subject"
                type="text"
                id="object"
                name="object"
              />
            </div>
          </div>
          <div className="form-control">
            <label className="form-label" htmlFor="message">
              Message :
            </label>
            <textarea type="text" id="message" placeholder="" name="message" />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <div className="send">
            <button
              type="submit"
              className="btn submit-btn"
              disabled={state.submitting}
            >
              Send
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
