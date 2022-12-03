import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Talk from "./pages/Talk";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollTop";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/talk" element={<Talk />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
