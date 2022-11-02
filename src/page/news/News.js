import React from "react";
import "./news.css";
import Footer from "../../component/Footer/Footer";
import Navbar from "../../component/navbar/Navbar";
import Sidebar from "../../component/sidebar/Sidebar";

const News = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <main>
        <div className="container">
          <h1>Coming soon...</h1>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default News;
