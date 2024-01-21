import React from "react";
import Header from "./Components/Common/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import CoursesHome from "./Components/allCourses/CoursesHome";
import Team from "./Components/Team/Team";
import Pricing from "./Components/Pricing/Pricing";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
import { Footer } from "./Components/Common/Footer/Footer";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/courses" exact element={<CoursesHome />} />
          <Route path="/team" exact element={<Team />} />
          <Route path="/pricing" exact element={<Pricing />} />
          <Route path="/journal" exact element={<Blog />} />
          <Route path="/contact" exact element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
