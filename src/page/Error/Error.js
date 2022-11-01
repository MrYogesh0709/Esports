import React from "react";
import "./error.css";
import { Link } from "react-router-dom";
import Navbar from "../../component/navbar/Navbar";
import Sidebar from "../../component/sidebar/Sidebar";
export default function Error() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <section className="error-page section">
        <div className="error-container">
          <h1>oops! it's a dead end</h1>
          <div className="error">
            <Link to="/" className="btn btn-primary">
              back home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
