import React, { useState } from "react";
import "./contact.css";
import r1 from "../../images/R1.jpg";
import Footer from "../../component/Footer/Footer";
import Navbar from "../../component/navbar/Navbar";
import Sidebar from "../../component/sidebar/Sidebar";

const Contact = () => {
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    email: "",
    object: "",
    message: "",
  });
  const [people, setPeople] = useState([]);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.email && person.age) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      setPeople([...people, newPerson]);
      setPerson({
        firstName: "",
        lastName: "",
        email: "",
        object: "",
        message: "",
      });
    }
  };
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="img">
        <img src={r1} alt="R1 Esports" className="img" />
      </div>
      <div className="section">
        <h1 className="contactus">contact us</h1>
        <form className="form">
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
                value={person.lastName}
                onChange={handleChange}
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
                value={person.firstName}
                onChange={handleChange}
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
                value={person.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-control">
              <label htmlFor="object" className="form-label">
                Object :{" "}
              </label>
              <input
                placeholder="Enter Your subject"
                type="text"
                id="object"
                name="object"
                value={person.object}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-control">
            <label className="form-label" htmlFor="message">
              Message :
            </label>
            <textarea
              type="text"
              id="message"
              placeholder=""
              name="message"
              value={person.message}
              onChange={handleChange}
            />
          </div>
        </form>
        <div className="send">
          <button
            type="submit"
            className="btn submit-btn"
            onClick={handleSubmit}
          >
            Send
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
