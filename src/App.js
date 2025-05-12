import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./Components/Common/Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import CoursesHome from "./Components/allCourses/CoursesHome";
import Team from "./Components/Team/Team";
import Pricing from "./Components/Pricing/Pricing";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
import { Footer } from "./Components/Common/Footer/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Header />
        <About />
        <Footer />
      </>
    ),
  },
  {
    path: "/courses",
    element: (
      <>
        <Header />
        <CoursesHome />
        <Footer />
      </>
    ),
  },
  {
    path: "/team",
    element: (
      <>
        <Header />
        <Team />
        <Footer />
      </>
    ),
  },
  {
    path: "/pricing",
    element: (
      <>
        <Header />
        <Pricing />
        <Footer />
      </>
    ),
  },
  {
    path: "/journal",
    element: (
      <>
        <Header />
        <Blog />
        <Footer />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <Header />
        <Contact />
        <Footer />
      </>
    ),
  },
]);

const App = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

export default App;
