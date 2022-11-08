import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./page/Welcome/Welcome";
import Team from "./page/team/Team";
import News from "./page/news/News";
import Recruitment from "./page/recruitment/Recruitment";
import Contact from "./page/contact/Contact";
import Error from "./page/Error/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route path="/team" element={<Team />} />
        <Route path="/news" element={<News />} />
        <Route path="/recruitment" element={<Recruitment />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
