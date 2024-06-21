import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import MyWork from "./Components/Mywork/MyWork";
import ContactForm from "./Components/Contact/ContactForm";
import Footer from "./Components/Footer/Footer";
import BacktoTop from "./Components/BacktoTop/BacktoTop";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <MyWork />
      <ContactForm />
      <Footer />
      <BacktoTop />
    </div>
  );
};

export default App;
