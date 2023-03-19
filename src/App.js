import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
// import Blog from './components/Blog';  for the future
import Contact from './components/Contact';
import Header from './components/Header';
import ProjectGallery from './components/ProjectGallery';
import Footer from './components/Footer';

function App() {
  const personalDetails = {
    name: "Ali Suleym",
    signature: "...Suleym",
    location: "UK Based",
    tagline: "In partnership, we can achieve the impossible..........",
    email: "ams.ma@hotmail.com",
    availability: "Always looking for new and interesting projects.",
    brand:
      "Hello My name is Ali and I am an aspiring front-end developer amd I am enjoying this journey",
  };

  return (
    <Router basename="/AliSuleym-portfolio-react">
      <div>
        <Header />
        {/* Wrap Route elements in a Routes component */}
        <Routes>
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/" element={<Home personalDetails={personalDetails} />} />
          <Route path="about" element={<About personalDetails={personalDetails} />} />
          {/* <Route path="blog" element={<Blog />} /> for the future */}
          <Route path="projectGallery" element={<ProjectGallery />} />
          {/* Define a route that will have descendant routes */}
          <Route path="contact" element={<Contact personalDetails={personalDetails} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

